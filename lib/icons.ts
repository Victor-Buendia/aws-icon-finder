import fs from "fs";
import path from "path";

export function getIconPaths() {
    const currentPath = process.cwd();
    const iconsPath = path.join(currentPath, "public/assets");
    return fs.readdirSync(iconsPath, { recursive: true })
        .map(
            (f) => (path.join("assets", f.toString()))
        )
        .filter((f) => (f.endsWith(".png")))
        .filter((f) => (f.includes("/64/")))
        .filter((f) => (!f.includes("5x")));
}