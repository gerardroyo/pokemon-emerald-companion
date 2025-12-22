
console.log("Starting Import Checks...");

try {
    console.log("Importing translations...");
    const translations = await import('./data/translations.js');
    console.log("Translations OK");
} catch (e) {
    console.error("Translations Failed", e);
}

try {
    console.log("Importing teams_data...");
    const tData = await import('./data/teams_data.js');
    console.log("teams_data OK");
} catch (e) {
    console.error("teams_data Failed", e);
}

try {
    console.log("Importing platino_teams_data...");
    const pData = await import('./data/platino_teams_data.js');
    console.log("platino_teams_data OK");
} catch (e) {
    console.error("platino_teams_data Failed", e);
}

try {
    console.log("Importing move_types...");
    const mData = await import('./data/move_types.js');
    console.log("move_types OK");
} catch (e) {
    console.error("move_types Failed", e);
}

try {
    console.log("Importing pokeApiService...");
    const api = await import('./data/pokeApiService.js');
    console.log("pokeApiService OK");
} catch (e) {
    console.error("pokeApiService Failed", e);
}

try {
    console.log("Importing teamManager...");
    const tm = await import('./data/teamManager.js');
    console.log("teamManager OK");
} catch (e) {
    console.error("teamManager Failed", e);
}

try {
    console.log("Importing TeamBuilder...");
    const tb = await import('./components/TeamBuilder.js');
    console.log("TeamBuilder OK");
} catch (e) {
    console.error("TeamBuilder Failed", e);
}

try {
    console.log("Importing TeamView...");
    const tv = await import('./components/TeamView.js');
    console.log("TeamView OK");
} catch (e) {
    console.error("TeamView Failed", e);
}

try {
    console.log("Importing main...");
    // Main is not a module that exports much, but importing it executes it.
    // We can't easily import it without side effects, but let's see if it parses.
    const main = await import('./main.js');
    console.log("main OK");
} catch (e) {
    console.error("main Failed", e);
}

console.log("Import Checks Completed.");
