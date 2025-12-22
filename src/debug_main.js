
import { renderTeamBuilder } from './components/TeamBuilder.js';
console.log("TeamBuilder imported successfully");

try {
    const html = renderTeamBuilder();
    console.log("renderTeamBuilder execution success");
    document.body.innerHTML = "<h1>Success</h1>" + html;
} catch (e) {
    console.error("Execution Error:", e);
    document.body.innerHTML = "<h1>Execution Error: " + e.message + "</h1>";
}

