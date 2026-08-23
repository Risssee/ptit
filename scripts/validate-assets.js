const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const sourceFiles = [];

function collect(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (entry.name === ".git" || (directory === root && entry.name === "scripts")) continue;
    const full = path.join(directory, entry.name);
    if (entry.isDirectory()) collect(full);
    else if (/\.(?:html|css|js|xml)$/i.test(entry.name)) sourceFiles.push(full);
  }
}

collect(root);
const missing = new Set();
const assetPattern = /["'(]((?:\/|\.\.\/|\.\/)?(?:assets|campus|labs)\/[^"')?]+\.(?:png|jpe?g|svg|mp3|wav|css|js))/gi;

for (const file of sourceFiles) {
  const text = fs.readFileSync(file, "utf8");
  for (const match of text.matchAll(assetPattern)) {
    const value = match[1];
    const normalizedValue = value.includes("%")
      ? value.slice(0, value.indexOf("%")).replace(/[\\/]$/, "")
      : value;
    const candidate = normalizedValue.startsWith("/")
      ? path.join(root, normalizedValue.slice(1))
      : path.resolve(path.dirname(file), normalizedValue);
    const pageRelativeCandidate = path.resolve(root, "campus", normalizedValue);
    if (!fs.existsSync(candidate) && !fs.existsSync(pageRelativeCandidate)) {
      missing.add(`${path.relative(root, file)} -> ${value}`);
    }
  }
}

if (missing.size) {
  console.error([...missing].join("\n"));
  process.exit(1);
}

console.log(`Assets OK: checked references in ${sourceFiles.length} source files.`);
