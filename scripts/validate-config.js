const fs = require("fs");
const vm = require("vm");
const path = require("path");

const root = path.resolve(__dirname, "..");
const context = { window: {} };
context.globalThis = context.window;
vm.createContext(context);

for (const file of ["campus/config/sidebar-groups.js", "campus/config/locations.js", "campus/config/minimap-positions.js"]) {
  vm.runInContext(fs.readFileSync(path.join(root, file), "utf8"), context, { filename: file });
}

const result = context.window.PTIT_VALIDATE_LOCATION_CONFIG();
if (!result.valid) {
  console.error(result.errors.join("\n"));
  process.exit(1);
}

console.log(`Config OK: ${context.window.PTIT_LOCATIONS.length} locations, ${context.window.PTIT_SIDEBAR_GROUPS.length} sidebar groups.`);
if (result.warnings.length) console.warn(result.warnings.join("\n"));
