// Exports the Entertainment "database" to public/data/entertainment.json
// so it can be consumed outside the React bundle.
//   node scripts/build-entertainment-db.mjs
import { writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, resolve } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const base = resolve(root, "src/components/entertainment/data");

const { services, ORIGIN } = await import(pathToFileURL(resolve(base, "services.js")));
const { shortCodes } = await import(pathToFileURL(resolve(base, "shortcodes.js")));
const { details } = await import(pathToFileURL(resolve(base, "details/index.js")));

const out = {
  source: `${ORIGIN}/hy/entertainment/`,
  generatedAt: new Date().toISOString(),
  services,
  details,
  shortCodes,
};

const dir = resolve(root, "public/data");
mkdirSync(dir, { recursive: true });
writeFileSync(resolve(dir, "entertainment.json"), JSON.stringify(out, null, 2));
console.log(`services: ${services.length}, details: ${details.length}, shortCodes: ${shortCodes.length}`);
