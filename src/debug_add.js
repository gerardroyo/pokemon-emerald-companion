
import { getPokemonData } from './data/pokeApiService.js';

async function testAddPokemon(id) {
    console.log(`Testing Add Pokemon for ID: ${id}`);
    try {
        const details = await getPokemonData(id);
        console.log("Fetch success", details.name);

        if (!details.sprites) throw new Error("No sprites");
        if (!details.sprites.other) throw new Error("No sprites.other");

        const official = details.sprites.other['official-artwork'];
        console.log("Official Artwork:", official);

        const newMember = {
            id: details.id,
            name: details.name,
            sprite: details.sprites.other['official-artwork'].front_default || details.sprites.front_default,
        };
        console.log("Member created:", newMember);

    } catch (e) {
        console.error("DEBUG TEST FAILED:", e);
    }
}

// Test a few IDs
testAddPokemon(1); // Bulbasaur
testAddPokemon(25); // Pikachu
testAddPokemon(384); // Rayquaza
