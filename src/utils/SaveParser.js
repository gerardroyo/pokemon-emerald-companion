/**
 * SaveParser.js
 * Logic for parsing Pokemon Generation 3 Save Files (.sav)
 * Focus: Emerald, Ruby, Sapphire (GBA)
 */

import { internalToNational, decodeGen3String } from '../data/gen3_species_map.js';

export class SaveParser {
    constructor(buffer) {
        this.data = new DataView(buffer);
        this.buffer = buffer;
    }

    parse() {
        // 1. Find the active save block
        // Gen 3 saves have two 57344-byte blocks. The one with the highest index is active.
        // Each block has 14 sectors (4KB each).
        const saveA = this.getGlobalSaveIndex(0);
        const saveB = this.getGlobalSaveIndex(57344);

        let offset = 0;
        if (saveA === -1 && saveB === -1) {
            throw new Error("No se encontró un archivo de guardado válido (Gen 3).");
        }

        // Choose the most recent save
        if (saveA > saveB) {
            offset = 0;
        } else {
            offset = 57344;
        }

        // 2. Reconstruct the Save Data from Sectors
        // Sectors are scattered. We need to order them by their Sector ID (0-13).
        const saveData = new Uint8Array(57344);
        const sectorOrder = [];

        for (let i = 0; i < 14; i++) {
            const sectorOffset = offset + (i * 4096);
            const sectorId = this.data.getUint16(sectorOffset + 0xFF4, true); // Footer ID
            sectorOrder[sectorId] = sectorOffset;

            // Copy sector data (minus footer) to the linear buffer
            const sectorContent = new Uint8Array(this.buffer, sectorOffset, 4096);
            saveData.set(sectorContent, sectorId * 4096);
        }

        // 3. Parse Team (Sector 1 in Emerald/RS covers Team/Items)
        const linearView = new DataView(saveData.buffer);

        // Hardcoded offsets for Emerald (Source: Bulbapedia/ProjectPokemon)
        // Sector 1 (ID 1) starts at 4096 in our linear buffer
        const teamCountAddr = 4096 + 0x0234;
        const teamSize = linearView.getUint32(teamCountAddr, true);

        const teamListAddr = 4096 + 0x0238;
        const team = [];

        if (teamSize > 6) return { error: "Datos corruptos o versión no soportada." };

        for (let i = 0; i < teamSize; i++) {
            const pkmAddr = teamListAddr + (i * 100);
            const pkmData = new Uint8Array(saveData.buffer, pkmAddr, 100);
            team.push(this.parsePokemon(pkmData));
        }

        return {
            team: team,
            gameCode: "Emerald"
        };
    }

    getGlobalSaveIndex(baseOffset) {
        // Check all 14 sectors to check consistency
        let maxIndex = -1;
        for (let i = 0; i < 14; i++) {
            const storedOffset = baseOffset + (i * 4096);
            const signature = this.data.getUint32(storedOffset + 0xFF8, true);
            if (signature !== 0x08012025) return -1; // Magic Number mismatch

            const saveIndex = this.data.getUint32(storedOffset + 0xFFC, true);
            if (saveIndex > maxIndex) maxIndex = saveIndex;
        }
        return maxIndex;
    }

    parsePokemon(bytes) {
        const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);

        // Basic Data (Unencrypted)
        const personality = view.getUint32(0x00, true);
        const otId = view.getUint32(0x04, true);

        // Nickname (Bytes 0x08 - 0x11)
        const nickname = decodeGen3String(bytes.slice(0x08, 0x12));

        // Data Decryption
        const key = personality ^ otId;
        const substructs = new Uint8Array(48);

        for (let i = 0; i < 12; i++) {
            const val = view.getUint32(0x20 + (i * 4), true);
            const decrypted = val ^ key;
            substructs.set(new Uint8Array(new Int32Array([decrypted]).buffer), i * 4);
        }

        // Substructure Order (Modulo 24)
        const order = personality % 24;
        const orders = [
            "GAEM", "GAME", "GEAM", "GEMA", "GMAE", "GMEA",
            "AGEM", "AGME", "AEGM", "AEMG", "AMGE", "AMEG",
            "EGAM", "EGMA", "EAGM", "EAMG", "EMGA", "EMAG",
            "MGAE", "MGEA", "MAGE", "MAEG", "MEGA", "MEAG"
        ];
        const currentOrder = orders[order];

        // Helper to extract data from substructs
        const getData = (blockKey, offset, type) => {
            const blockIndex = currentOrder.indexOf(blockKey);
            const blockStart = blockIndex * 12;
            const finalOffset = blockStart + offset;
            const subView = new DataView(substructs.buffer);

            if (type === 'u16') return subView.getUint16(finalOffset, true);
            if (type === 'u8') return subView.getUint8(finalOffset);
            if (type === 'u32') return subView.getUint32(finalOffset, true);
            return 0;
        };

        // Growth (G)
        const speciesId = getData('G', 0, 'u16');
        const friendship = getData('G', 9, 'u8');

        // EVs & Condition (E)
        const hpEv = getData('E', 0, 'u8');
        const atkEv = getData('E', 1, 'u8');
        const defEv = getData('E', 2, 'u8');
        const spdEv = getData('E', 3, 'u8');
        const spatkEv = getData('E', 4, 'u8');
        const spdefEv = getData('E', 5, 'u8');

        // Misc (M)
        const ivsVar = getData('M', 4, 'u32');
        const pokerus = getData('M', 0, 'u8');

        // IV Extraction
        const hpIv = (ivsVar >> 0) & 31;
        const atkIv = (ivsVar >> 5) & 31;
        const defIv = (ivsVar >> 10) & 31;
        const spdIv = (ivsVar >> 15) & 31;
        const spatkIv = (ivsVar >> 20) & 31;
        const spdefIv = (ivsVar >> 25) & 31;
        const isEgg = ((ivsVar >> 30) & 1) === 1;

        // Hidden Power
        const hpBit = (hpIv % 2);
        const atkBit = (atkIv % 2);
        const defBit = (defIv % 2);
        const spdBit = (spdIv % 2);
        const spatkBit = (spatkIv % 2);
        const spdefBit = (spdefIv % 2);

        const typeVal = Math.floor(((hpBit + 2 * atkBit + 4 * defBit + 8 * spdBit + 16 * spatkBit + 32 * spdefBit) * 15) / 63);
        const powerVal = Math.floor(((hpBit + 2 * atkBit + 4 * defBit + 8 * spdBit + 16 * spatkBit + 32 * spdefBit) * 40) / 63) + 30;

        const types = ['Lucha', 'Volador', 'Veneno', 'Tierra', 'Roca', 'Bicho', 'Fantasma', 'Acero', 'Fuego', 'Agua', 'Planta', 'Eléctrico', 'Psíquico', 'Hielo', 'Dragón', 'Siniestro'];
        const hpType = types[typeVal];

        // Shiny Check
        const trainerId = otId & 0xFFFF;
        const secretId = (otId >> 16) & 0xFFFF;
        const p1 = (personality >> 16) & 0xFFFF;
        const p2 = personality & 0xFFFF;
        const shinyValue = trainerId ^ secretId ^ p1 ^ p2;
        const isShiny = shinyValue < 8;

        // Use the mapping table for accurate National Dex conversion
        const nationalId = internalToNational[speciesId] || speciesId;

        return {
            nickname: nickname.trim(),
            speciesId,
            nationalId,
            isEgg,
            isShiny,
            pokerusStatus: pokerus,
            friendship,
            ivs: { hp: hpIv, atk: atkIv, def: defIv, spd: spdIv, spa: spatkIv, spdef: spdefIv },
            evs: { hp: hpEv, atk: atkEv, def: defEv, spd: spdEv, spa: spatkEv, spdef: spdefEv },
            hiddenPower: { type: hpType, power: powerVal },
            pid: personality
        };
    }
}

