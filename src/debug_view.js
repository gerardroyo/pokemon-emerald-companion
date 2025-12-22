
import { renderTeamView } from './components/TeamView.js';

// Mock localStorage if needed, or rely on defaults
console.log("Starting Debug View...");
try {
    renderTeamView();
    console.log("renderTeamView Success");
    document.body.innerHTML += "<h1>Success View</h1>";
} catch (e) {
    console.error("View Crash:", e);
    document.body.innerHTML += "<h1>Crash: " + e.message + "</h1><pre>" + e.stack + "</pre>";
}

