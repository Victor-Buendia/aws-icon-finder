const fs = require('fs');
const path = require('path');

// Generate icon paths
function getIconPaths() {
    const currentPath = process.cwd();
    const iconsPath = path.join(currentPath, "public/assets");
    return fs.readdirSync(iconsPath, { recursive: true })
        .map(f => path.join("assets", f.toString()))
        .filter(f => f.endsWith(".png"))
        .filter(f => f.includes("/64/"))
        .filter(f => !f.includes("5x"));
}

// Write to JSON file
const iconPaths = getIconPaths();
fs.writeFileSync(
    path.join(process.cwd(), 'public/icon-paths.json'), 
    JSON.stringify(iconPaths, null, 2)
);