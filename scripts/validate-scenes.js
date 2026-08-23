const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const sceneDir = path.join(root, "campus", "scenes");
const xmlFiles = [path.join(root, "campus", "tour.xml"), ...fs.readdirSync(sceneDir).filter((name) => name.endsWith(".xml")).map((name) => path.join(sceneDir, name))];
const sceneNames = new Set();
const links = [];
const duplicates = [];

for (const file of xmlFiles) {
  const xml = fs.readFileSync(file, "utf8");
  for (const match of xml.matchAll(/<scene\s+[^>]*name="([^"]+)"/g)) {
    if (sceneNames.has(match[1])) duplicates.push(match[1]);
    sceneNames.add(match[1]);
  }
  for (const match of xml.matchAll(/linkedscene="([^"]+)"/g)) links.push({ scene: match[1], file });
}

const missing = links.filter(({ scene }) => !sceneNames.has(scene));
if (duplicates.length || missing.length) {
  duplicates.forEach((scene) => console.error(`Duplicate scene: ${scene}`));
  missing.forEach(({ scene, file }) => console.error(`Missing linkedscene ${scene} in ${path.relative(root, file)}`));
  process.exit(1);
}

console.log(`Scenes OK: ${sceneNames.size} unique scenes, ${links.length} linkedscene references.`);
