/**
 * pokeApiService.js
 * Service for fetching Pokemon data from PokeAPI with caching
 */

const API_BASE = 'https://pokeapi.co/api/v2';

// In-memory cache
const cache = {
    pokemon: new Map(),
    species: new Map(),
    evolutionChain: new Map(),
    moves: new Map()
};

// Version group mapping for our games
export const VERSION_GROUPS = {
    emerald: 'emerald',
    platinum: 'platinum'
};

/**
 * Fetch with caching helper
 */
async function fetchWithCache(url, cacheMap, key) {
    if (cacheMap.has(key)) {
        return cacheMap.get(key);
    }

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();
        cacheMap.set(key, data);
        return data;
    } catch (error) {
        console.error(`PokeAPI fetch error for ${url}:`, error);
        throw error;
    }
}

/**
 * Get basic Pokemon data including moves
 */
export async function getPokemonData(nameOrId) {
    const key = String(nameOrId).toLowerCase();
    const url = `${API_BASE}/pokemon/${key}`;
    return fetchWithCache(url, cache.pokemon, key);
}

/**
 * Get Pokemon species data (flavor text, evolution chain URL)
 */
export async function getPokemonSpecies(nameOrId) {
    const key = String(nameOrId).toLowerCase();
    const url = `${API_BASE}/pokemon-species/${key}`;
    return fetchWithCache(url, cache.species, key);
}

/**
 * Get full evolution chain for a Pokemon
 */
export async function getEvolutionChain(pokemonId) {
    try {
        // First get species to get evolution chain URL
        const species = await getPokemonSpecies(pokemonId);
        const chainUrl = species.evolution_chain.url;
        const chainId = chainUrl.split('/').filter(Boolean).pop();

        const chainData = await fetchWithCache(chainUrl, cache.evolutionChain, chainId);
        return parseEvolutionChain(chainData.chain);
    } catch (error) {
        console.error('Error fetching evolution chain:', error);
        return [];
    }
}

/**
 * Parse evolution chain into flat array with details
 */
function parseEvolutionChain(chain, evolutions = []) {
    const speciesName = chain.species.name;
    const speciesId = chain.species.url.split('/').filter(Boolean).pop();

    // Evolution details (how to evolve TO this Pokemon)
    let evolutionDetails = null;
    if (chain.evolution_details && chain.evolution_details.length > 0) {
        const details = chain.evolution_details[0];
        evolutionDetails = {
            trigger: details.trigger?.name || null,
            minLevel: details.min_level || null,
            item: details.item?.name || null,
            heldItem: details.held_item?.name || null,
            timeOfDay: details.time_of_day || null,
            minHappiness: details.min_happiness || null,
            minAffection: details.min_affection || null,
            location: details.location?.name || null,
            knownMove: details.known_move?.name || null,
            knownMoveType: details.known_move_type?.name || null
        };
    }

    evolutions.push({
        name: speciesName,
        id: parseInt(speciesId),
        sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${speciesId}.png`,
        evolutionDetails
    });

    // Recursively process evolutions
    if (chain.evolves_to && chain.evolves_to.length > 0) {
        for (const evolution of chain.evolves_to) {
            parseEvolutionChain(evolution, evolutions);
        }
    }

    return evolutions;
}

/**
 * Get learnset filtered by version group (level-up moves only)
 */
export async function getLearnsetByVersion(pokemonId, versionGroup) {
    try {
        const pokemon = await getPokemonData(pokemonId);
        const levelUpMoves = [];

        for (const moveEntry of pokemon.moves) {
            const versionDetails = moveEntry.version_group_details.find(
                vd => vd.version_group.name === versionGroup &&
                    vd.move_learn_method.name === 'level-up' &&
                    vd.level_learned_at > 0
            );

            if (versionDetails) {
                levelUpMoves.push({
                    name: moveEntry.move.name,
                    level: versionDetails.level_learned_at,
                    url: moveEntry.move.url
                });
            }
        }

        // Sort by level
        levelUpMoves.sort((a, b) => a.level - b.level);
        return levelUpMoves;
    } catch (error) {
        console.error('Error fetching learnset:', error);
        return [];
    }
}

/**
 * Get ALL learnable moves for a version (Level-up, Machine, Tutor, Egg)
 * Returns array of objects with move details
 */
export async function getAllLearnableMoves(pokemonId, versionGroup) {
    try {
        const pokemon = await getPokemonData(pokemonId);
        const validMoves = [];
        let foundMatchingVersion = false;

        // 1. Filter moves for this version
        for (const moveEntry of pokemon.moves) {
            let versionDetails = moveEntry.version_group_details.find(
                vd => vd.version_group.name === versionGroup // Matches 'emerald', 'platinum' etc.
            );
            if (versionDetails) {
                foundMatchingVersion = true;
            } else if (moveEntry.version_group_details.length > 0) {
                versionDetails = moveEntry.version_group_details[moveEntry.version_group_details.length - 1];
            }

            if (versionDetails) {
                validMoves.push({
                    name: moveEntry.move.name, // We will formatting later
                    method: versionDetails.move_learn_method.name,
                    level: versionDetails.level_learned_at,
                    url: moveEntry.move.url
                });
            }
        }

        if (!foundMatchingVersion) {
            console.warn(`[PokeAPI] No moves found for version group "${versionGroup}". Falling back to latest available moves.`);
        }

        // 2 Fetch details for ALL valid moves (Parallelized)
        // Note: This might be heavy (50+ requests). We should use cache effectively or batch?
        // For Client-side, maybe we fetch details only on demand or cached?
        // Getting Basic info (Type/Category) is essential for the UI.
        // Optimization: We could rely on a pre-fetched 'move-summary' or just fetch details on hover?
        // User asked for "Dropdown with Type/Power". We need the data.
        // Let's Promise.all but maybe limit or rely on cache.

        // We will return the list of names/urls and let the UI fetch details on render or search?
        // Better: Fetch all details now so search is instant. Browser cache will help subsequent loads.

        const moveDetailsPromises = validMoves.map(m => getMoveDetails(m.name));
        const moveDetails = await Promise.all(moveDetailsPromises);

        // Merge details
        return validMoves.map((m, i) => {
            const details = moveDetails[i];
            if (!details) return null;
            return {
                ...m,
                ...details, // types, power, pp etc
                displayName: details.displayName || formatMoveName(m.name)
            };
        }).filter(m => m !== null);

    } catch (error) {
        console.error("Error getting all learnable moves", error);
        return [];
    }
}

/**
 * Get move details (type, power, accuracy, description)
 */
export async function getMoveDetails(moveName) {
    const key = String(moveName).toLowerCase();
    const url = `${API_BASE}/move/${key}`;

    try {
        const data = await fetchWithCache(url, cache.moves, key);

        // Get Spanish Name
        const esNameObj = data.names.find(e => e.language.name === 'es');
        const esName = esNameObj ? esNameObj.name : (moveNamesES[data.name] || formatMoveName(data.name));

        // Get Spanish flavor text if available, fallback to English
        let description = '';
        const esText = data.flavor_text_entries.find(e => e.language.name === 'es');
        const enText = data.flavor_text_entries.find(e => e.language.name === 'en');
        description = esText?.flavor_text || enText?.flavor_text || '';

        return {
            name: data.name,
            displayName: esName, // New field for UI
            type: data.type.name, // Keep English for CSS class mapping
            typeTranslated: typeTranslationsES[data.type.name] || data.type.name,
            power: data.power,
            accuracy: data.accuracy,
            pp: data.pp,
            damageClass: data.damage_class.name,
            damageClassTranslated: damageClassTranslationsES[data.damage_class.name] || data.damage_class.name,
            description: description.replace(/\n|\f/g, ' ')
        };
    } catch (error) {
        console.error(`Error fetching move ${moveName}:`, error);
        return null;
    }
}

/**
 * Get complete Pokemon info for modal
 */
export async function getCompletePokemonInfo(pokemonId, versionGroup = 'emerald') {
    try {
        const [pokemon, species, evolutionChain, learnset] = await Promise.all([
            getPokemonData(pokemonId),
            getPokemonSpecies(pokemonId),
            getEvolutionChain(pokemonId),
            getLearnsetByVersion(pokemonId, versionGroup)
        ]);

        // Get Spanish name if available
        const esName = species.names.find(n => n.language.name === 'es');
        const displayName = esName?.name || pokemon.name;

        // Get Spanish flavor text - try multiple approaches
        let flavorText = '';

        // Priority versions based on selected game
        const priorityVersions = versionGroup === 'platinum'
            ? ['platinum', 'diamond', 'pearl', 'heartgold', 'soulsilver']
            : ['emerald', 'ruby', 'sapphire', 'firered', 'leafgreen'];

        // Try priority versions first for Spanish
        for (const ver of priorityVersions) {
            const text = species.flavor_text_entries.find(
                e => e.language.name === 'es' && e.version.name === ver
            );
            if (text) {
                flavorText = text.flavor_text.replace(/\n|\f/g, ' ');
                break;
            }
        }

        // If not found, try ANY Spanish version
        if (!flavorText) {
            const anySpanish = species.flavor_text_entries.find(
                e => e.language.name === 'es'
            );
            if (anySpanish) {
                flavorText = anySpanish.flavor_text.replace(/\n|\f/g, ' ');
            }
        }

        // Final fallback to English if no Spanish available at all
        if (!flavorText) {
            const enText = species.flavor_text_entries.find(
                e => e.language.name === 'en'
            );
            if (enText) {
                // Mark it as translated from English
                flavorText = enText.flavor_text.replace(/\n|\f/g, ' ');
            }
        }

        return {
            id: pokemon.id,
            name: displayName,
            englishName: pokemon.name,
            types: pokemon.types.map(t => t.type.name),
            sprite: pokemon.sprites.front_default,
            spriteAnimated: pokemon.sprites.versions?.['generation-v']?.['black-white']?.animated?.front_default,
            stats: {
                hp: pokemon.stats.find(s => s.stat.name === 'hp').base_stat,
                attack: pokemon.stats.find(s => s.stat.name === 'attack').base_stat,
                defense: pokemon.stats.find(s => s.stat.name === 'defense').base_stat,
                spAttack: pokemon.stats.find(s => s.stat.name === 'special-attack').base_stat,
                spDefense: pokemon.stats.find(s => s.stat.name === 'special-defense').base_stat,
                speed: pokemon.stats.find(s => s.stat.name === 'speed').base_stat
            },
            height: pokemon.height / 10, // Convert to meters
            weight: pokemon.weight / 10, // Convert to kg
            abilities: pokemon.abilities.map(a => ({
                name: a.ability.name,
                isHidden: a.is_hidden
            })),
            flavorText,
            evolutionChain,
            learnset
        };
    } catch (error) {
        console.error('Error fetching complete Pokemon info:', error);
        throw error;
    }
}

/**
 * Helper to format move name for display
 */
export function formatMoveName(name) {
    return name
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

/**
 * Helper to translate type names to Spanish
 */
export const typeTranslationsES = {
    normal: 'Normal',
    fire: 'Fuego',
    water: 'Agua',
    electric: 'Eléctrico',
    grass: 'Planta',
    ice: 'Hielo',
    fighting: 'Lucha',
    poison: 'Veneno',
    ground: 'Tierra',
    flying: 'Volador',
    psychic: 'Psíquico',
    bug: 'Bicho',
    rock: 'Roca',
    ghost: 'Fantasma',
    dragon: 'Dragón',
    dark: 'Siniestro',
    steel: 'Acero',
    fairy: 'Hada'
};

/**
 * Helper to translate damage class
 */
export const damageClassTranslationsES = {
    physical: 'Físico',
    special: 'Especial',
    status: 'Estado'
};

/**
 * Evolution items translations
 */
export const evolutionItemsES = {
    'fire-stone': 'Piedra Fuego',
    'water-stone': 'Piedra Agua',
    'thunder-stone': 'Piedra Trueno',
    'leaf-stone': 'Piedra Hoja',
    'moon-stone': 'Piedra Lunar',
    'sun-stone': 'Piedra Solar',
    'shiny-stone': 'Piedra Día',
    'dusk-stone': 'Piedra Noche',
    'dawn-stone': 'Piedra Alba',
    'oval-stone': 'Piedra Oval',
    'protector': 'Protector',
    'electirizer': 'Electrizador',
    'magmarizer': 'Magmatizador',
    'dubious-disc': 'Disco Extraño',
    'reaper-cloth': 'Tela Terrible',
    'razor-claw': 'Garra Afilada',
    'razor-fang': 'Colmillo Agudo',
    'prism-scale': 'Escama Bella',
    'kings-rock': 'Roca del Rey',
    'metal-coat': 'Revest. Metál.',
    'dragon-scale': 'Escama Dragón',
    'upgrade': 'Mejora',
    'deep-sea-tooth': 'Diente Marino',
    'deep-sea-scale': 'Escama Marina',
    'link-cable': 'Cable Link'
};

/**
 * Held items for trade evolution
 */
export const heldItemsES = {
    'kings-rock': 'Roca del Rey',
    'metal-coat': 'Revest. Metál.',
    'dragon-scale': 'Escama Dragón',
    'deep-sea-tooth': 'Diente Marino',
    'deep-sea-scale': 'Escama Marina',
    'electirizer': 'Electrizador',
    'magmarizer': 'Magmatizador',
    'protector': 'Protector',
    'dubious-disc': 'Disco Extraño',
    'reaper-cloth': 'Tela Terrible',
    'prism-scale': 'Escama Bella',
    'whipped-dream': 'Dulce de Nata',
    'sachet': 'Saquito Aroma'
};

/**
 * Evolution trigger translations
 */
export const evolutionTriggersES = {
    'level-up': 'Subir nivel',
    'trade': 'Intercambio',
    'use-item': 'Usar objeto',
    'shed': 'Muda',
    'spin': 'Girar',
    'tower-of-darkness': 'Torre Oscura',
    'tower-of-waters': 'Torre Agua',
    'three-critical-hits': '3 Golpes Críticos',
    'take-damage': 'Recibir daño',
    'other': 'Otro'
};

/**
 * Location translations for location-based evolutions
 */
export const locationEvolutionsES = {
    'eterna-forest': 'Bosque Eterno',
    'pinwheel-forest': 'Bosque Azulejo',
    'kalos-route-20': 'Ruta 20 (Kalos)',
    'mt-coronet': 'Monte Corona',
    'chargestone-cave': 'Cueva Electrorroca',
    'new-mauville': 'Nuevo Malvalona',
    'twist-mountain': 'Monte Tuerca',
    'frost-cavern': 'Cueva Helada',
    'sinnoh-route-217': 'Ruta 217 (Sinnoh)',
    'mossy-rock': 'Roca Musgo',
    'icy-rock': 'Roca Hielo',
    'magnetic-field': 'Campo Magnético'
};

/**
 * Common abilities translations (most used)
 */
export const abilitiesES = {
    'overgrow': 'Espesura',
    'blaze': 'Mar Llamas',
    'torrent': 'Torrente',
    'swarm': 'Enjambre',
    'chlorophyll': 'Clorofila',
    'solar-power': 'Poder Solar',
    'swift-swim': 'Nado Rápido',
    'rain-dish': 'Cura Lluvia',
    'sand-stream': 'Chorro Arena',
    'snow-warning': 'Alerta Nieve',
    'drought': 'Sequía',
    'drizzle': 'Llovizna',
    'flash-fire': 'Absorbe Fuego',
    'levitate': 'Levitación',
    'intimidate': 'Intimidación',
    'hyper-cutter': 'Corte Fuerte',
    'huge-power': 'Potencia',
    'pure-power': 'Energía Pura',
    'speed-boost': 'Impulso',
    'sturdy': 'Robustez',
    'static': 'Elec. Estática',
    'lightning-rod': 'Pararrayos',
    'volt-absorb': 'Absorbe Elec',
    'water-absorb': 'Absorbe Agua',
    'natural-cure': 'Cura Natural',
    'synchronize': 'Sincronía',
    'trace': 'Rastro',
    'clear-body': 'Cuerpo Puro',
    'thick-fat': 'Grasa Espesa',
    'marvel-scale': 'Escama Especial',
    'shed-skin': 'Mudar',
    'guts': 'Agallas',
    'pressure': 'Presión',
    'inner-focus': 'Foco Interno',
    'wonder-guard': 'Superguarda',
    'poison-point': 'Punto Tóxico',
    'effect-spore': 'Efecto Espora',
    'flame-body': 'Cuerpo Llama',
    'magma-armor': 'Armadura Magma',
    'compound-eyes': 'Ojo Compuesto',
    'keen-eye': 'Vista Lince',
    'arena-trap': 'Trampa Arena',
    'shadow-tag': 'Sombra Trampa',
    'rough-skin': 'Piel Tosca',
    'sand-veil': 'Velo Arena',
    'snow-cloak': 'Manto Níveo',
    'pickup': 'Recogida',
    'run-away': 'Fuga',
    'hustle': 'Entusiasmo',
    'rivalry': 'Rivalidad',
    'adaptability': 'Adaptable',
    'technician': 'Experto',
    'skill-link': 'Encadenado',
    'serene-grace': 'Dicha',
    'shield-dust': 'Polvo Escudo',
    'magic-guard': 'Muro Mágico',
    'mold-breaker': 'Rompemoldes',
    'iron-fist': 'Puño Férreo',
    'sheer-force': 'Potencia Bruta',
    'prankster': 'Bromista',
    'defiant': 'Competitivo',
    'justified': 'Justiciero',
    'moody': 'Veleta',
    'multiscale': 'Multiescamas',
    'regenerator': 'Regeneración',
    'poison-heal': 'Antídoto',
    'magic-bounce': 'Espejo Mágico',
    'sand-rush': 'Ímpetu Arena',
    'chlorophyl': 'Clorofila',
    'swift-swin': 'Nado Rápido',
    'drizzle': 'Llovizna',
    'forecast': 'Predicción',
    'battle-armor': 'Armadura Batalla',
    'shell-armor': 'Caparazón',
    'air-lock': 'Esclusa Aire',
    'stance-change': 'Cambio Táctico',
    'protean': 'Mutatipo',
    'pixilate': 'Piel Feérica',
    'aerilate': 'Piel Celeste',
    'refrigerate': 'Piel Helada',
    'galvanize': 'Piel Eléctrica',
    'beast-boost': 'Ultraimpulso',
    'electric-surge': 'Creador Campo Eléctrico',
    'grassy-surge': 'Creador Campo de Hierba',
    'misty-surge': 'Creador Campo de Niebla',
    'psychic-surge': 'Creador Campo Psíquico',
    // Missing abilities
    'damp': 'Humedad',
    'oblivious': 'Despiste',
    'immunity': 'Inmunidad',
    'own-tempo': 'Ritmo Propio',
    'limber': 'Flexibilidad',
    'insomnia': 'Insomnio',
    'vital-spirit': 'Espíritu Vital',
    'early-bird': 'Madrugar',
    'cute-charm': 'Gran Encanto',
    'rock-head': 'Cabeza Roca',
    'truant': 'Ausente',
    'stench': 'Hedor',
    'suction-cups': 'Ventosas',
    'illuminate': 'Iluminación',
    'soundproof': 'Insonorizar',
    'sticky-hold': 'Pegamento',
    'magnet-pull': 'Imán',
    'color-change': 'Cambiacolor',
    'liquid-ooze': 'Viscosidad',
    'gluttony': 'Gula',
    'white-smoke': 'Humo Blanco',
    'hydration': 'Hidratación',
    'filter': 'Filtro',
    'solid-rock': 'Roca Sólida',
    'anger-point': 'Irascible',
    'unaware': 'Ignorante',
    'tinted-lens': 'Cromolente',
    'super-luck': 'Afortunado',
    'aftermath': 'Detonación',
    'sniper': 'Francotirador',
    'ice-body': 'Gélido',
    'download': 'Descarga',
    'simple': 'Simple',
    'dry-skin': 'Piel Seca',
    'reckless': 'Audaz',
    'rivalry': 'Rivalidad',
    'steadfast': 'Impasible',
    'no-guard': 'Indefenso',
    'stall': 'Rezagado',
    'leaf-guard': 'Defensa Hoja',
    'klutz': 'Zoquete',
    'bad-dreams': 'Mal Sueño',
    'slow-start': 'Inicio Lento',
    'scrappy': 'Agallas',
    'normalize': 'Normalizar',
    'tangled-feet': 'Pies Confusos',
    'motor-drive': 'Electromotor',
    'unburden': 'Liviano',
    'heatproof': 'Ignífugo',
    'honey-gather': 'Recogemiel',
    'frisk': 'Cacheo'
};

/**
 * Get Spanish ability name
 */
export function getAbilityNameES(englishName) {
    return abilitiesES[englishName] || formatMoveName(englishName);
}

/**
 * Get Spanish evolution item name
 */
export function getEvolutionItemES(itemName) {
    return evolutionItemsES[itemName] || formatMoveName(itemName);
}

/**
 * Get Spanish held item name
 */
export function getHeldItemES(itemName) {
    return heldItemsES[itemName] || evolutionItemsES[itemName] || formatMoveName(itemName);
}

/**
 * Get Spanish location name
 */
export function getLocationES(locationName) {
    return locationEvolutionsES[locationName] || formatMoveName(locationName);
}

/**
 * Get Spanish evolution trigger name
 */
export function getTriggerES(triggerName) {
    return evolutionTriggersES[triggerName] || formatMoveName(triggerName);
}

/**
 * English to Spanish move name translations
 * Comprehensive list covering Gen 1-4 moves
 */
export const moveNamesES = {
    // Basic attacks
    'tackle': 'Placaje',
    'scratch': 'Arañazo',
    'pound': 'Destructor',
    'slam': 'Portazo',
    'stomp': 'Pisotón',
    'mega-punch': 'Megapuño',
    'mega-kick': 'Megapatada',
    'comet-punch': 'Puño Cometa',
    'double-slap': 'Doble Bofetón',
    'wrap': 'Atadura',
    'bind': 'Constricción',
    'clamp': 'Tenaza',
    'vice-grip': 'Agarre',
    'guillotine': 'Guillotina',
    'razor-wind': 'Viento Cortante',
    'gust': 'Tornado',
    'pay-day': 'Día de Pago',
    'horn-attack': 'Cornada',
    'horn-drill': 'Perforador',
    'fury-attack': 'Ataque Furia',
    'fury-swipes': 'Golpes Furia',
    'barrage': 'Bombardeo',
    'spike-cannon': 'Clavo Cañón',
    'bonemerang': 'Huesomerang',
    'bone-rush': 'Ataque Óseo',
    'bone-club': 'Hueso Palo',
    'skull-bash': 'Cabezazo',

    // Status moves - basic
    'growl': 'Gruñido',
    'leer': 'Malicioso',
    'tail-whip': 'Látigo',
    'sand-attack': 'Ataque Arena',
    'smokescreen': 'Pantalla Humo',
    'harden': 'Fortaleza',
    'withdraw': 'Refugio',
    'defense-curl': 'Rizo Defensa',
    'minimize': 'Reducción',
    'growth': 'Desarrollo',
    'meditate': 'Meditación',
    'sharpen': 'Afilar',
    'foresight': 'Profecía',
    'odor-sleuth': 'Rastreo',
    'mud-sport': 'Chapoteo Lodo',
    'water-sport': 'Hidrochorro',
    'bide': 'Venganza',
    'focus-energy': 'Foco Energía',
    'stockpile': 'Reserva',
    'spit-up': 'Escupir',
    'swallow': 'Tragar',
    'conversion': 'Conversión',
    'conversion-2': 'Conversión 2',
    'camouflage': 'Camuflaje',
    'spite': 'Rencor',
    'powder': 'Polvo',
    'lucky-chant': 'Conjuro',
    'guard-swap': 'Cambia Defensa',
    'power-swap': 'Cambia Fuerza',
    'heart-swap': 'Cambia Almas',
    'skill-swap': 'Intercambio',
    'role-play': 'Imitación',

    // Fire moves
    'ember': 'Ascuas',
    'flamethrower': 'Lanzallamas',
    'fire-blast': 'Llamarada',
    'fire-spin': 'Giro Fuego',
    'fire-punch': 'Puño Fuego',
    'fire-fang': 'Colmillo Ígneo',
    'flame-wheel': 'Rueda Fuego',
    'blaze-kick': 'Patada Ígnea',
    'heat-wave': 'Onda Ígnea',
    'eruption': 'Estallido',
    'lava-plume': 'Humareda',
    'magma-storm': 'Lluvia Ígnea',
    'overheat': 'Sofoco',
    'will-o-wisp': 'Fuego Fatuo',
    'sunny-day': 'Día Soleado',
    'flare-blitz': 'Envite Ígneo',

    // Water moves
    'water-gun': 'Pistola Agua',
    'hydro-pump': 'Hidrobomba',
    'surf': 'Surf',
    'waterfall': 'Cascada',
    'bubble': 'Burbuja',
    'bubble-beam': 'Rayo Burbuja',
    'water-pulse': 'Hidropulso',
    'aqua-tail': 'Acua Cola',
    'aqua-jet': 'Acua Jet',
    'aqua-ring': 'Acua Aro',
    'muddy-water': 'Agua Lodosa',
    'dive': 'Buceo',
    'rain-dance': 'Danza Lluvia',
    'hydro-cannon': 'Hidrocañón',
    'whirlpool': 'Torbellino',
    'crabhammer': 'Martillazo',
    'clamp': 'Tenaza',
    'brine': 'Salmuera',

    // Electric moves
    'thunder': 'Trueno',
    'thunderbolt': 'Rayo',
    'thunder-shock': 'Impactrueno',
    'thunder-wave': 'Onda Trueno',
    'thunder-punch': 'Puño Trueno',
    'thunder-fang': 'Colmillo Rayo',
    'spark': 'Chispa',
    'discharge': 'Chispazo',
    'charge': 'Carga',
    'charge-beam': 'Rayo Carga',
    'volt-tackle': 'Placaje Eléc.',
    'shock-wave': 'Onda Voltio',
    'zap-cannon': 'Electrocañón',
    'magnet-rise': 'Magnetismo',

    // Grass moves
    'razor-leaf': 'Hoja Afilada',
    'solar-beam': 'Rayo Solar',
    'vine-whip': 'Látigo Cepa',
    'giga-drain': 'Giga Drenado',
    'mega-drain': 'Mega Agotar',
    'absorb': 'Absorber',
    'leech-seed': 'Drenadoras',
    'leaf-blade': 'Hoja Aguda',
    'seed-bomb': 'Bomba Germen',
    'energy-ball': 'Energibola',
    'power-whip': 'Latigazo',
    'synthesis': 'Síntesis',
    'grass-knot': 'Hierba Lazo',
    'leaf-storm': 'Lluevehojas',
    'bullet-seed': 'Bala Semilla',
    'petal-dance': 'Danza Pétalo',
    'magical-leaf': 'Hoja Mágica',
    'worry-seed': 'Abatidoras',
    'ingrain': 'Arraigo',
    'aromatherapy': 'Aromaterapia',
    'frenzy-plant': 'Planta Feroz',
    'wood-hammer': 'Mazazo',
    'needle-arm': 'Brazo Pincho',

    // Ice moves
    'ice-beam': 'Rayo Hielo',
    'blizzard': 'Ventisca',
    'aurora-beam': 'Rayo Aurora',
    'icy-wind': 'Viento Hielo',
    'ice-punch': 'Puño Hielo',
    'ice-fang': 'Colmillo Hielo',
    'ice-shard': 'Esquirla Helada',
    'ice-ball': 'Bola Hielo',
    'powder-snow': 'Nieve Polvo',
    'sheer-cold': 'Frío Polar',
    'hail': 'Granizo',
    'avalanche': 'Avalancha',
    'mist': 'Neblina',
    'haze': 'Niebla',

    // Fighting moves
    'karate-chop': 'Golpe Kárate',
    'cross-chop': 'Tajo Cruzado',
    'brick-break': 'Demolición',
    'sky-uppercut': 'Gancho Alto',
    'focus-punch': 'Puño Certero',
    'focus-blast': 'Onda Certera',
    'mach-punch': 'Ultrapuño',
    'bullet-punch': 'Puño Bala',
    'close-combat': 'A Bocajarro',
    'superpower': 'Fuerza Bruta',
    'reversal': 'Inversión',
    'counter': 'Contraataque',
    'seismic-toss': 'Mov. Sísmico',
    'submission': 'Sumisión',
    'vital-throw': 'Tiro Vital',
    'low-kick': 'Patada Baja',
    'jump-kick': 'Patada Salto',
    'hi-jump-kick': 'Pat. Salto Alta',
    'rolling-kick': 'Patada Giro',
    'triple-kick': 'Triple Patada',
    'dynamic-punch': 'Puño Dinámico',
    'drain-punch': 'Puño Drenaje',
    'hammer-arm': 'Machada',
    'aura-sphere': 'Esfera Aural',
    'force-palm': 'Palmeo',
    'rock-smash': 'Golpe Roca',
    'bulk-up': 'Corpulencia',
    'detect': 'Detección',

    // Ground moves
    'earthquake': 'Terremoto',
    'dig': 'Excavar',
    'mud-slap': 'Bofetón Lodo',
    'mud-shot': 'Disparo Lodo',
    'mud-bomb': 'Bomba Fango',
    'earth-power': 'Tierra Viva',
    'magnitude': 'Magnitud',
    'fissure': 'Fisura',
    'bone-rush': 'Ataque Óseo',
    'spikes': 'Púas',
    'sand-tomb': 'Bucle Arena',
    'bulldoze': 'Terratemblor',

    // Flying moves
    'fly': 'Vuelo',
    'aerial-ace': 'Golpe Aéreo',
    'wing-attack': 'Ataque Ala',
    'peck': 'Picotazo',
    'drill-peck': 'Pico Taladro',
    'air-slash': 'Tajo Aéreo',
    'air-cutter': 'Aire Afilado',
    'brave-bird': 'Pájaro Osado',
    'sky-attack': 'Ataque Aéreo',
    'bounce': 'Bote',
    'pluck': 'Picoteo',
    'roost': 'Respiro',
    'tailwind': 'Viento Afín',
    'defog': 'Despejar',
    'mirror-move': 'Mov. Espejo',
    'feather-dance': 'Danza Pluma',

    // Psychic moves
    'psychic': 'Psíquico',
    'confusion': 'Confusión',
    'psybeam': 'Psicorrayo',
    'psywave': 'Psicoonda',
    'hypnosis': 'Hipnosis',
    'dream-eater': 'Come Sueños',
    'psycho-cut': 'Psicocorte',
    'psycho-boost': 'Psicoataque',
    'zen-headbutt': 'Cabezazo Zen',
    'extrasensory': 'Paranormal',
    'future-sight': 'Premonición',
    'light-screen': 'Pantalla Luz',
    'reflect': 'Reflejo',
    'barrier': 'Barrera',
    'amnesia': 'Amnesia',
    'agility': 'Agilidad',
    'calm-mind': 'Paz Mental',
    'kinesis': 'Kinético',
    'teleport': 'Teletransporte',
    'trick-room': 'Espacio Raro',
    'trick': 'Truco',
    'rest': 'Descanso',
    'psycho-shift': 'Psicocambio',
    'gravity': 'Gravedad',
    'heal-block': 'Anticura',
    'miracle-eye': 'Gran Ojo',
    'luster-purge': 'Resplandor',
    'mist-ball': 'Bola Neblina',

    // Ghost moves
    'shadow-ball': 'Bola Sombra',
    'shadow-claw': 'Garra Umbría',
    'night-shade': 'Tinieblas',
    'confuse-ray': 'Rayo Confuso',
    'lick': 'Lengüetazo',
    'shadow-punch': 'Puño Sombra',
    'shadow-sneak': 'Sombra Vil',
    'shadow-force': 'Golpe Umbrío',
    'destiny-bond': 'Mismo Destino',
    'grudge': 'Rabia',
    'curse': 'Maldición',
    'spite': 'Rencor',
    'nightmare': 'Pesadilla',
    'astonish': 'Impresionar',
    'ominous-wind': 'Viento Aciago',

    // Dark moves
    'bite': 'Mordisco',
    'crunch': 'Triturar',
    'faint-attack': 'Finta',
    'feint-attack': 'Finta',
    'pursuit': 'Persecución',
    'thief': 'Ladrón',
    'knock-off': 'Desarme',
    'taunt': 'Mofa',
    'torment': 'Tormento',
    'dark-pulse': 'Pulso Umbrío',
    'night-slash': 'Tajo Umbrío',
    'sucker-punch': 'Golpe Bajo',
    'payback': 'Vendetta',
    'assurance': 'Buena Baza',
    'embargo': 'Embargo',
    'foul-play': 'Juego Sucio',
    'nasty-plot': 'Maquinación',
    'flatter': 'Camelo',
    'memento': 'Legado',
    'snatch': 'Robo',
    'switcheroo': 'Trapicheo',
    'beat-up': 'Paliza',

    // Rock moves
    'rock-throw': 'Lanza Rocas',
    'rock-slide': 'Avalancha',
    'rock-tomb': 'Tumba Rocas',
    'ancient-power': 'Poder Pasado',
    'stone-edge': 'Roca Afilada',
    'head-smash': 'Testarazo',
    'rock-blast': 'Pedrada',
    'power-gem': 'Joya de Luz',
    'stealth-rock': 'Trampa Rocas',
    'sandstorm': 'Tormenta Arena',
    'rollout': 'Desenrollar',

    // Steel moves
    'iron-tail': 'Cola Férrea',
    'metal-claw': 'Garra Metal',
    'steel-wing': 'Ala de Acero',
    'iron-head': 'Cabeza Hierro',
    'iron-defense': 'Def. Férrea',
    'meteor-mash': 'Puño Meteoro',
    'flash-cannon': 'Foco Resplandor',
    'magnet-bomb': 'Bomba Imán',
    'gyro-ball': 'Giro Bola',
    'metal-sound': 'Eco Metálico',
    'metal-burst': 'Represión Metal',
    'doom-desire': 'Deseo Oculto',
    'mirror-shot': 'Disparo Espejo',

    // Dragon moves
    'dragon-claw': 'Garra Dragón',
    'dragon-breath': 'Dragoaliento',
    'dragon-rage': 'Furia Dragón',
    'dragon-dance': 'Danza Dragón',
    'dragon-pulse': 'Pulso Dragón',
    'dragon-rush': 'Carga Dragón',
    'draco-meteor': 'Cometa Draco',
    'outrage': 'Enfado',
    'twister': 'Ciclón',
    'roar-of-time': 'Distorsión',
    'spacial-rend': 'Corte Vacío',

    // Poison moves
    'sludge': 'Residuos',
    'sludge-bomb': 'Bomba Lodo',
    'sludge-wave': 'Onda Tóxica',
    'poison-sting': 'Picotazo Ven',
    'toxic': 'Tóxico',
    'poison-jab': 'Puya Nociva',
    'cross-poison': 'Veneno X',
    'poison-fang': 'Colmillo Ven.',
    'poison-tail': 'Cola Veneno',
    'poison-gas': 'Gas Venenoso',
    'poison-powder': 'Polvo Veneno',
    'acid': 'Ácido',
    'acid-armor': 'Armadura Ácida',
    'gastro-acid': 'Bilis',
    'gunk-shot': 'Lanzamugre',
    'toxic-spikes': 'Púas Tóxicas',
    'venoshock': 'Cargatóxica',

    // Bug moves
    'pin-missile': 'Misil Aguja',
    'twineedle': 'Doble Ataque',
    'fury-cutter': 'Corte Furia',
    'x-scissor': 'Tijera X',
    'bug-bite': 'Picadura',
    'bug-buzz': 'Zumbido',
    'signal-beam': 'Rayo Señal',
    'silver-wind': 'Viento Plata',
    'u-turn': 'Ida y Vuelta',
    'string-shot': 'Disparo Demora',
    'spider-web': 'Telaraña',
    'leech-life': 'Chupavidas',

    // Normal moves
    'hyper-beam': 'Hiperrayo',
    'giga-impact': 'Giga Impacto',
    'double-edge': 'Doble Filo',
    'take-down': 'Derribo',
    'body-slam': 'Golpe Cuerpo',
    'quick-attack': 'Ataque Rápido',
    'extreme-speed': 'Velocidad Extrema',
    'slash': 'Cuchillada',
    'return': 'Retribución',
    'frustration': 'Frustración',
    'facade': 'Fachada',
    'protect': 'Protección',
    'sleep-talk': 'Sonámbulo',
    'snore': 'Ronquido',
    'substitute': 'Sustituto',
    'swagger': 'Contoneo',
    'attract': 'Atracción',
    'double-team': 'Doble Equipo',
    'endure': 'Aguante',
    'roar': 'Rugido',
    'whirlwind': 'Remolino',
    'safeguard': 'Velo Sagrado',
    'yawn': 'Bostezo',
    'spore': 'Espora',
    'sleep-powder': 'Polvo Sueño',
    'stun-spore': 'Paralizador',
    'focus-energy': 'Foco Energía',
    'explosion': 'Explosión',
    'self-destruct': 'Autodestrucción',
    'swords-dance': 'Danza Espada',
    'hidden-power': 'Poder Oculto',
    'secret-power': 'Poder Secreto',
    'strength': 'Fuerza',
    'cut': 'Corte',
    'flash': 'Destello',
    'supersonic': 'Supersónico',
    'screech': 'Chirrido',
    'recover': 'Recuperación',
    'moonlight': 'Luz Lunar',
    'morning-sun': 'Sol Matinal',
    'wish': 'Deseo',
    'refresh': 'Alivio',
    'heal-bell': 'Campana Cura',
    'softboiled': 'Huevo Pasado',
    'headbutt': 'Golpe Cabeza',
    'tri-attack': 'Triataque',
    'super-fang': 'Superfang',
    'hyper-fang': 'Hiperfang',
    'swift': 'Rapidez',
    'covet': 'Antojo',
    'false-swipe': 'Falso Tortazo',
    'encore': 'Otra Vez',
    'pain-split': 'Divide Dolor',
    'perish-song': 'Canto Mortal',
    'baton-pass': 'Relevo',
    'helping-hand': 'Refuerzo',
    'recycle': 'Reciclaje',
    'natural-gift': 'Don Natural',
    'last-resort': 'Última Baza',
    'feint': 'Amago',
    'acupressure': 'Acupresión',
    'me-first': 'Yo Primero',
    'copycat': 'Copión',
    'trump-card': 'Baza Secreta',
    'wring-out': 'Estrujón',
    'captivate': 'Seducción',
    'rage': 'Furia',
    'thrash': 'Golpe',
    'belly-drum': 'Tambor',
    'milk-drink': 'Beber Leche',
    'present': 'Presente',
    'sketch': 'Esquema',
    'transform': 'Transformación',
    'metronome': 'Metrónomo',
    'mimic': 'Mimético',
    'disable': 'Anulación',
    'splash': 'Salpicar',
    'mean-look': 'Mal de Ojo',
    'block': 'Bloqueo',
    'lock-on': 'Fijar Blanco',

    // Additional Gen 1-4 moves - Complete list
    'constrict': 'Constricción',
    'acid-spray': 'Bomba Ácida',
    'astonish': 'Impresionar',
    'aurora-veil': 'Velo Aurora',
    'blast-burn': 'Anillo Ígneo',
    'blaze-kick': 'Patada Ígnea',
    'bounce': 'Bote',
    'camouflage': 'Camuflaje',
    'charge': 'Carga',
    'charge-beam': 'Rayo Carga',
    'defense-curl': 'Rizo Defensa',
    'discharge': 'Chispazo',
    'double-hit': 'Doble Golpe',
    'double-kick': 'Doble Patada',
    'dragon-pulse': 'Pulso Dragón',
    'dragon-rush': 'Carga Dragón',
    'dragonbreath': 'Dragoaliento',
    'dynamicpunch': 'Puño Dinámico',
    'egg-bomb': 'Bomba Huevo',
    'electro-ball': 'Bola Voltio',
    'electroweb': 'Electrotela',
    'ember': 'Ascuas',
    'endeavor': 'Esfuerzo',
    'facade': 'Fachada',
    'fake-out': 'Sorpresa',
    'fake-tears': 'Llanto Falso',
    'feint-attack': 'Finta',
    'fire-fang': 'Colmillo Ígneo',
    'fire-punch': 'Puño Fuego',
    'fire-spin': 'Giro Fuego',
    'flail': 'Azote',
    'flame-burst': 'Pirotecnia',
    'flame-charge': 'Nitrocarga',
    'flame-wheel': 'Rueda Fuego',
    'flash-cannon': 'Foco Resplandor',
    'fling': 'Lanzamiento',
    'focus-blast': 'Onda Certera',
    'follow-me': 'Señuelo',
    'foul-play': 'Juego Sucio',
    'freeze-shock': 'Rayo Gélido',
    'frost-breath': 'Aliento Gélido',
    'frustration': 'Frustración',
    'fury-cutter': 'Corte Furia',
    'gastro-acid': 'Bilis',
    'gear-grind': 'Rueda Doble',
    'glaciate': 'Mundo Gélido',
    'grass-knot': 'Hierba Lazo',
    'grass-pledge': 'Hierba Juramento',
    'growl': 'Gruñido',
    'growth': 'Desarrollo',
    'grudge': 'Rabia',
    'guard-split': 'Isodistribución',
    'guard-swap': 'Cambia Defensa',
    'gunk-shot': 'Lanzamugre',
    'gyro-ball': 'Giro Bola',
    'hammer-arm': 'Machada',
    'harden': 'Fortaleza',
    'head-charge': 'Ariete',
    'head-smash': 'Testarazo',
    'heal-order': 'Auxilio',
    'heal-pulse': 'Pulso Cura',
    'heart-stamp': 'Matasellos',
    'heart-swap': 'Cambia Almas',
    'heat-crash': 'Golpe Calor',
    'heavy-slam': 'Cuerpo Pesado',
    'helping-hand': 'Refuerzo',
    'hex': 'Infortunio',
    'hi-jump-kick': 'Pat. Salto Alta',
    'hold-back': 'Clemencia',
    'hone-claws': 'Afilagarras',
    'horn-leech': 'Asta Drenaje',
    'howl': 'Aullido',
    'hurricane': 'Vendaval',
    'hydro-cannon': 'Hidrocañón',
    'hyper-voice': 'Vozarrón',
    'ice-ball': 'Bola Hielo',
    'ice-burn': 'Llama Gélida',
    'ice-fang': 'Colmillo Hielo',
    'ice-punch': 'Puño Hielo',
    'ice-shard': 'Esquirla Helada',
    'icicle-crash': 'Carámbano',
    'icicle-spear': 'Chuzos',
    'icy-wind': 'Viento Hielo',
    'imprison': 'Sellar',
    'inferno': 'Infierno',
    'ingrain': 'Arraigo',
    'iron-defense': 'Def. Férrea',
    'iron-head': 'Cabeza Hierro',
    'iron-tail': 'Cola Férrea',
    'judgment': 'Sentencia',
    'jump-kick': 'Patada Salto',
    'karate-chop': 'Golpe Kárate',
    'kinesis': 'Kinético',
    'knock-off': 'Desarme',
    'leaf-storm': 'Lluevehojas',
    'leaf-tornado': 'Ciclón Hojas',
    'leech-life': 'Chupavidas',
    'leech-seed': 'Drenadoras',
    'leer': 'Malicioso',
    'lick': 'Lengüetazo',
    'light-screen': 'Pantalla Luz',
    'lock-on': 'Fijar Blanco',
    'lovely-kiss': 'Beso Amoroso',
    'low-kick': 'Patada Baja',
    'low-sweep': 'Barrido',
    'lucky-chant': 'Conjuro',
    'lunar-dance': 'Danza Lunar',
    'luster-purge': 'Resplandor',
    'mach-punch': 'Ultrapuño',
    'magic-coat': 'Capa Mágica',
    'magic-room': 'Zona Mágica',
    'magical-leaf': 'Hoja Mágica',
    'magma-storm': 'Lluvia Ígnea',
    'magnet-bomb': 'Bomba Imán',
    'magnet-rise': 'Magnetismo',
    'magnitude': 'Magnitud',
    'me-first': 'Yo Primero',
    'mean-look': 'Mal de Ojo',
    'meditate': 'Meditación',
    'mega-drain': 'Mega Agotar',
    'mega-kick': 'Megapatada',
    'mega-punch': 'Megapuño',
    'megahorn': 'Megacuerno',
    'memento': 'Legado',
    'metal-burst': 'Represión Metal',
    'metal-claw': 'Garra Metal',
    'metal-sound': 'Eco Metálico',
    'meteor-mash': 'Puño Meteoro',
    'mind-reader': 'Presciencia',
    'minimize': 'Reducción',
    'miracle-eye': 'Gran Ojo',
    'mirror-coat': 'Manto Espejo',
    'mirror-move': 'Mov. Espejo',
    'mirror-shot': 'Disparo Espejo',
    'mist': 'Neblina',
    'mist-ball': 'Bola Neblina',
    'moonblast': 'Fuerza Lunar',
    'mud-bomb': 'Bomba Fango',
    'mud-shot': 'Disparo Lodo',
    'mud-slap': 'Bofetón Lodo',
    'muddy-water': 'Agua Lodosa',
    'nasty-plot': 'Maquinación',
    'natural-gift': 'Don Natural',
    'nature-power': 'Adaptación',
    'needle-arm': 'Brazo Pincho',
    'night-daze': 'Pulso Noche',
    'night-shade': 'Tinieblas',
    'night-slash': 'Tajo Umbrío',
    'nightmare': 'Pesadilla',
    'noble-roar': 'Rugido Noble',
    'octazooka': 'Pulpo Cañón',
    'odor-sleuth': 'Rastreo',
    'ominous-wind': 'Viento Aciago',
    'outrage': 'Enfado',
    'overheat': 'Sofoco',
    'payback': 'Vendetta',
    'peck': 'Picotazo',
    'perish-song': 'Canto Mortal',
    'petal-blizzard': 'Tormenta Flor',
    'petal-dance': 'Danza Pétalo',
    'pin-missile': 'Misil Aguja',
    'pluck': 'Picoteo',
    'poison-fang': 'Colmillo Ven.',
    'poison-gas': 'Gas Venenoso',
    'poison-jab': 'Puya Nociva',
    'poison-powder': 'Polvo Veneno',
    'poison-sting': 'Picotazo Ven',
    'poison-tail': 'Cola Veneno',
    'pound': 'Destructor',
    'powder': 'Polvo',
    'powder-snow': 'Nieve Polvo',
    'power-gem': 'Joya de Luz',
    'power-split': 'Isofuerza',
    'power-swap': 'Cambia Fuerza',
    'power-trick': 'Truco Fuerza',
    'power-whip': 'Latigazo',
    'present': 'Presente',
    'protect': 'Protección',
    'psych-up': 'Autosugestión',
    'psychic': 'Psíquico',
    'psycho-boost': 'Psicoataque',
    'psycho-cut': 'Psicocorte',
    'psycho-shift': 'Psicocambio',
    'psyshock': 'Psicocarga',
    'psystrike': 'Golpe Psíquico',
    'psywave': 'Psicoonda',
    'punishment': 'Castigo',
    'pursuit': 'Persecución',
    'quick-attack': 'Ataque Rápido',
    'quick-guard': 'Anticipo',
    'rage': 'Furia',
    'rage-powder': 'Polvo Ira',
    'rain-dance': 'Danza Lluvia',
    'rapid-spin': 'Giro Rápido',
    'razor-leaf': 'Hoja Afilada',
    'razor-shell': 'Concha Filo',
    'razor-wind': 'Viento Cortante',
    'recover': 'Recuperación',
    'recycle': 'Reciclaje',
    'reflect': 'Reflejo',
    'refresh': 'Alivio',
    'relic-song': 'Canto Arcaico',
    'rest': 'Descanso',
    'retaliate': 'Represalia',
    'return': 'Retribución',
    'revenge': 'Desquite',
    'reversal': 'Inversión',
    'roar': 'Rugido',
    'roar-of-time': 'Distorsión',
    'rock-blast': 'Pedrada',
    'rock-climb': 'Treparrocas',
    'rock-polish': 'Pulimento',
    'rock-slide': 'Avalancha',
    'rock-smash': 'Golpe Roca',
    'rock-throw': 'Lanza Rocas',
    'rock-tomb': 'Tumba Rocas',
    'rock-wrecker': 'Romperrocas',
    'role-play': 'Imitación',
    'rollout': 'Desenrollar',
    'roost': 'Respiro',
    'round': 'Canon',
    'sacred-fire': 'Fuego Sagrado',
    'sacred-sword': 'Espada Santa',
    'safeguard': 'Velo Sagrado',
    'sand-tomb': 'Bucle Arena',
    'sandstorm': 'Tormenta Arena',
    'scald': 'Escaldar',
    'scary-face': 'Cara Susto',
    'scratch': 'Arañazo',
    'screech': 'Chirrido',
    'seed-bomb': 'Bomba Germen',
    'seed-flare': 'Estallido Floral',
    'seismic-toss': 'Mov. Sísmico',
    'self-destruct': 'Autodestrucción',
    'shadow-ball': 'Bola Sombra',
    'shadow-claw': 'Garra Umbría',
    'shadow-force': 'Golpe Umbrío',
    'shadow-punch': 'Puño Sombra',
    'shadow-sneak': 'Sombra Vil',
    'sharpen': 'Afilar',
    'sheer-cold': 'Frío Polar',
    'shell-smash': 'Rompe Coraza',
    'shift-gear': 'Cambio Marcha',
    'shock-wave': 'Onda Voltio',
    'signal-beam': 'Rayo Señal',
    'silver-wind': 'Viento Plata',
    'simple-beam': 'Onda Simple',
    'sing': 'Canto',
    'sketch': 'Esquema',
    'skill-swap': 'Intercambio',
    'skull-bash': 'Cabezazo',
    'sky-attack': 'Ataque Aéreo',
    'sky-drop': 'Caída Libre',
    'sky-uppercut': 'Gancho Alto',
    'slack-off': 'Relajo',
    'slam': 'Portazo',
    'slash': 'Cuchillada',
    'sleep-powder': 'Polvo Sueño',
    'sleep-talk': 'Sonámbulo',
    'sludge': 'Residuos',
    'sludge-bomb': 'Bomba Lodo',
    'sludge-wave': 'Onda Tóxica',
    'smack-down': 'Antiaéreo',
    'smart-strike': 'Cuerno Certero',
    'smelling-salts': 'Estímulo',
    'smog': 'Polución',
    'smokescreen': 'Pantalla Humo',
    'snarl': 'Alarido',
    'snatch': 'Robo',
    'snore': 'Ronquido',
    'soak': 'Anegar',
    'soft-boiled': 'Huevo Pasado',
    'solar-beam': 'Rayo Solar',
    'sonicboom': 'Sónico',
    'spacial-rend': 'Corte Vacío',
    'spark': 'Chispa',
    'spider-web': 'Telaraña',
    'spike-cannon': 'Clavo Cañón',
    'spikes': 'Púas',
    'spit-up': 'Escupir',
    'spite': 'Rencor',
    'splash': 'Salpicar',
    'spore': 'Espora',
    'stealth-rock': 'Trampa Rocas',
    'steam-eruption': 'Chorro Vapor',
    'steel-wing': 'Ala de Acero',
    'stockpile': 'Reserva',
    'stomp': 'Pisotón',
    'stone-edge': 'Roca Afilada',
    'stored-power': 'Poder Reserva',
    'storm-throw': 'Tiro Llave',
    'string-shot': 'Disparo Demora',
    'struggle': 'Forcejeo',
    'struggle-bug': 'Estoicismo',
    'stun-spore': 'Paralizador',
    'submission': 'Sumisión',
    'substitute': 'Sustituto',
    'sucker-punch': 'Golpe Bajo',
    'sunny-day': 'Día Soleado',
    'super-fang': 'Superfang',
    'superpower': 'Fuerza Bruta',
    'supersonic': 'Supersónico',
    'surf': 'Surf',
    'swagger': 'Contoneo',
    'swallow': 'Tragar',
    'sweet-kiss': 'Beso Dulce',
    'sweet-scent': 'Dulce Aroma',
    'swift': 'Rapidez',
    'switcheroo': 'Trapicheo',
    'swords-dance': 'Danza Espada',
    'synchronoise': 'Sincrorruido',
    'synthesis': 'Síntesis',
    'tackle': 'Placaje',
    'tail-glow': 'Luz Caudal',
    'tail-slap': 'Látigo Cola',
    'tail-whip': 'Látigo',
    'tailwind': 'Viento Afín',
    'take-down': 'Derribo',
    'taunt': 'Mofa',
    'techno-blast': 'Tecnoblaster',
    'teeter-dance': 'Danza Caos',
    'telekinesis': 'Telequinesis',
    'teleport': 'Teletransporte',
    'thief': 'Ladrón',
    'thrash': 'Golpe',
    'thunder': 'Trueno',
    'thunder-fang': 'Colmillo Rayo',
    'thunder-punch': 'Puño Trueno',
    'thunder-shock': 'Impactrueno',
    'thunder-wave': 'Onda Trueno',
    'thunderbolt': 'Rayo',
    'tickle': 'Cosquillas',
    'torment': 'Tormento',
    'toxic': 'Tóxico',
    'toxic-spikes': 'Púas Tóxicas',
    'transform': 'Transformación',
    'tri-attack': 'Triataque',
    'trick': 'Truco',
    'trick-room': 'Espacio Raro',
    'triple-kick': 'Triple Patada',
    'trump-card': 'Baza Secreta',
    'twineedle': 'Doble Ataque',
    'twister': 'Ciclón',
    'u-turn': 'Ida y Vuelta',
    'uproar': 'Alboroto',
    'v-create': 'V-Cremación',
    'vacuum-wave': 'Onda Vacío',
    'venoshock': 'Cargatóxica',
    'vice-grip': 'Agarre',
    'vine-whip': 'Látigo Cepa',
    'vital-throw': 'Tiro Vital',
    'volt-switch': 'Voltio Cruento',
    'volt-tackle': 'Placaje Eléc.',
    'wake-up-slap': 'Espabila',
    'water-gun': 'Pistola Agua',
    'water-pledge': 'Agua Juramento',
    'water-pulse': 'Hidropulso',
    'water-sport': 'Hidrochorro',
    'water-spout': 'Salpicar',
    'waterfall': 'Cascada',
    'weather-ball': 'Bola Climática',
    'whirlpool': 'Torbellino',
    'whirlwind': 'Remolino',
    'wide-guard': 'Vasta Guardia',
    'wild-charge': 'Voltio Cruel',
    'will-o-wisp': 'Fuego Fatuo',
    'wing-attack': 'Ataque Ala',
    'wish': 'Deseo',
    'withdraw': 'Refugio',
    'wonder-room': 'Zona Extraña',
    'wood-hammer': 'Mazazo',
    'work-up': 'Avivar',
    'worry-seed': 'Abatidoras',
    'wrap': 'Atadura',
    'wring-out': 'Estrujón',
    'x-scissor': 'Tijera X',
    'yawn': 'Bostezo',
    'zap-cannon': 'Electrocañón',
    'zen-headbutt': 'Cabezazo Zen'
};

/**
 * Get Spanish move name from English
 */
export function getMoveNameES(englishName) {
    const key = englishName.toLowerCase();
    return moveNamesES[key] || formatMoveName(englishName);
}

/**
 * Special evolution explanations for Pokemon with non-standard evolutions
 * These provide detailed instructions in Spanish
 */
export const specialEvolutionsES = {
    // Eevee evolutions
    134: { // Vaporeon
        method: '💧 Piedra Agua',
        explanation: 'Usa una Piedra Agua en Eevee para evolucionar.'
    },
    135: { // Jolteon
        method: '⚡ Piedra Trueno',
        explanation: 'Usa una Piedra Trueno en Eevee para evolucionar.'
    },
    136: { // Flareon
        method: '🔥 Piedra Fuego',
        explanation: 'Usa una Piedra Fuego en Eevee para evolucionar.'
    },
    196: { // Espeon
        method: '☀️ Felicidad de día',
        explanation: 'Sube el nivel de Eevee con felicidad máxima durante el DÍA.'
    },
    197: { // Umbreon
        method: '🌙 Felicidad de noche',
        explanation: 'Sube el nivel de Eevee con felicidad máxima durante la NOCHE.'
    },
    470: { // Leafeon
        method: '🌿 Roca Musgo',
        explanation: 'Sube de nivel a Eevee cerca de una Roca Musgo.'
    },
    471: { // Glaceon
        method: '❄️ Roca Hielo',
        explanation: 'Sube de nivel a Eevee cerca de una Roca Hielo.'
    },

    // Trade evolutions
    68: { // Machamp
        method: '🔄 Intercambio',
        explanation: 'Intercambia Machoke con otro jugador.'
    },
    76: { // Golem
        method: '🔄 Intercambio',
        explanation: 'Intercambia Graveler con otro jugador.'
    },
    94: { // Gengar
        method: '🔄 Intercambio',
        explanation: 'Intercambia Haunter con otro jugador.'
    },
    65: { // Alakazam
        method: '🔄 Intercambio',
        explanation: 'Intercambia Kadabra con otro jugador.'
    },

    // Trade with item evolutions
    186: { // Politoed
        method: '🔄 Intercambio + Roca del Rey',
        explanation: 'Intercambia Poliwhirl mientras porta Roca del Rey.'
    },
    199: { // Slowking
        method: '🔄 Intercambio + Roca del Rey',
        explanation: 'Intercambia Slowpoke mientras porta Roca del Rey.'
    },
    208: { // Steelix
        method: '🔄 Intercambio + Revest. Metálico',
        explanation: 'Intercambia Onix mientras porta Revestimiento Metálico.'
    },
    212: { // Scizor
        method: '🔄 Intercambio + Revest. Metálico',
        explanation: 'Intercambia Scyther mientras porta Revestimiento Metálico.'
    },
    230: { // Kingdra
        method: '🔄 Intercambio + Escama Dragón',
        explanation: 'Intercambia Seadra mientras porta Escama Dragón.'
    },
    233: { // Porygon2
        method: '🔄 Intercambio + Mejora',
        explanation: 'Intercambia Porygon mientras porta Mejora.'
    },
    474: { // Porygon-Z
        method: '🔄 Intercambio + Disco Extraño',
        explanation: 'Intercambia Porygon2 mientras porta Disco Extraño.'
    },
    467: { // Magmortar
        method: '🔄 Intercambio + Magmatizador',
        explanation: 'Intercambia Magmar mientras porta Magmatizador.'
    },
    466: { // Electivire
        method: '🔄 Intercambio + Electrizador',
        explanation: 'Intercambia Electabuzz mientras porta Electrizador.'
    },
    464: { // Rhyperior
        method: '🔄 Intercambio + Protector',
        explanation: 'Intercambia Rhydon mientras porta Protector.'
    },
    477: { // Dusknoir
        method: '🔄 Intercambio + Tela Terrible',
        explanation: 'Intercambia Dusclops mientras porta Tela Terrible.'
    },

    // Beauty/Happiness evolutions
    350: { // Milotic
        method: '✨ Belleza máxima',
        explanation: 'En Gen 3-4: Sube la Belleza de Feebas al máximo con Pokécubos/Pokitos y luego sube de nivel. En Gen 5+: Intercambia Feebas con Escama Bella.'
    },

    // Happiness evolutions
    169: { // Crobat
        method: '❤️ Felicidad alta',
        explanation: 'Sube de nivel a Golbat con felicidad máxima (220+).'
    },
    242: { // Blissey
        method: '❤️ Felicidad alta',
        explanation: 'Sube de nivel a Chansey con felicidad máxima.'
    },

    // Location evolutions
    462: { // Magnezone
        method: '📍 Campo Magnético',
        explanation: 'Sube de nivel a Magneton en Monte Corona (Sinnoh) o zona con campo magnético.'
    },
    476: { // Probopass
        method: '📍 Campo Magnético',
        explanation: 'Sube de nivel a Nosepass en Monte Corona (Sinnoh) o zona con campo magnético.'
    },

    // Move-based evolutions
    463: { // Lickilicky
        method: '📖 Saber Desenrollar',
        explanation: 'Sube de nivel a Lickitung sabiendo el movimiento Desenrollar.'
    },
    469: { // Yanmega
        method: '📖 Saber Poder Pasado',
        explanation: 'Sube de nivel a Yanma sabiendo el movimiento Poder Pasado.'
    },
    473: { // Mamoswine
        method: '📖 Saber Poder Pasado',
        explanation: 'Sube de nivel a Piloswine sabiendo el movimiento Poder Pasado.'
    },
    465: { // Tangrowth
        method: '📖 Saber Poder Pasado',
        explanation: 'Sube de nivel a Tangela sabiendo el movimiento Poder Pasado.'
    },
    468: { // Togekiss
        method: '💎 Piedra Día',
        explanation: 'Usa una Piedra Día en Togetic.'
    },

    // Shedinja (special case)
    292: { // Shedinja
        method: '🐛 Evolución especial',
        explanation: 'Aparece en tu equipo al evolucionar Nincada a Ninjask si tienes: espacio en el equipo + Poké Ball normal en la bolsa.'
    }
};

/**
 * Get special evolution info if available
 */
export function getSpecialEvolution(pokemonId) {
    return specialEvolutionsES[pokemonId] || null;
}
