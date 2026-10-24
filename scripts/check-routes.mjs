// Website guard for pull requests. hellosandar.com is served by the Worker
// named in wrangler.jsonc from the static export in out/. A change that adds,
// removes or renames a page, or points the site at another Worker, must also
// update routes.txt / the expected name here, so reviewers see it explicitly.
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const EXPECTED_WORKER = "sandar";
const fail = (message) => { console.error(`✗ ${message}`); process.exitCode = 1; };

const wrangler = readFileSync("wrangler.jsonc", "utf8");
const name = wrangler.match(/"name"\s*:\s*"([^"]+)"/)?.[1];
if (name !== EXPECTED_WORKER) fail(`wrangler.jsonc Worker name is "${name}", expected "${EXPECTED_WORKER}" (the live hellosandar.com Worker).`);

function pages(dir) {
  return readdirSync(dir).flatMap((entry) => {
    const path = join(dir, entry);
    if (statSync(path).isDirectory()) return entry.startsWith("_") ? [] : pages(path);
    return entry === "index.html" ? ["/" + relative("out", dir).replaceAll("\\", "/")] : [];
  });
}
const built = pages("out").map((p) => (p === "/" ? p : p.replace(/\/?$/, "/"))).sort();
const expected = readFileSync("routes.txt", "utf8").split("\n").map((l) => l.trim()).filter((l) => l && !l.startsWith("#")).sort();

const added = built.filter((p) => !expected.includes(p));
const removed = expected.filter((p) => !built.includes(p));
if (added.length) fail(`New pages not in routes.txt: ${added.join(", ")}`);
if (removed.length) fail(`Pages in routes.txt that no longer exist: ${removed.join(", ")}`);
if (!process.exitCode) console.log(`✓ ${built.length} pages match routes.txt; Worker "${name}" unchanged.`);
