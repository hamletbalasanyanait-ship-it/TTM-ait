// Downloads the original media of the Entertainment page.
//   node scripts/download-entertainment-media.mjs
// Needs network access. Files land in public/media/entertainment/original/.
import { mkdirSync, writeFileSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, resolve, basename } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const { media } = await import(
  pathToFileURL(resolve(root, "src/components/entertainment/data/media.js"))
);

const out = resolve(root, "public/media/entertainment/original");
mkdirSync(out, { recursive: true });

const remotes = [media.sectionIcon, media.smsPremiumCover, media.share]
  .map((m) => m.remote)
  .filter(Boolean);

let failed = 0;
for (const url of remotes) {
  const name = basename(new URL(url).pathname) || "file";
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    writeFileSync(resolve(out, name), Buffer.from(await res.arrayBuffer()));
    console.log("saved", name);
  } catch (e) {
    failed++;
    console.error("failed", url, String(e.message || e));
  }
}
process.exit(failed ? 1 : 0);
