const fs = require('fs');
const path = require('path');

const files = [
    'src/data/gym_leaders.js',
    'src/data/platino_gym_leaders.js'
];

files.forEach(file => {
    const filePath = path.join(process.cwd(), file);
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        // Remove ability: "..." regardless of leading comma or whitespace
        content = content.replace(/,?\s*ability:\s*"[^"]*"/g, '');
        // Fix potential double commas or commas before closing braces if any were introduced
        content = content.replace(/,(\s*})/g, '$1');
        fs.writeFileSync(filePath, content);
        console.log(`Cleaned ${file}`);
    } else {
        console.log(`File not found: ${file}`);
    }
});
