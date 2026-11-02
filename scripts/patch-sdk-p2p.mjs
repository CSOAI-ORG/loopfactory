// Patches the published @meok-labs/ai-sdk dist for build-time resolution:
// its dist/p2p/client.js uses dynamic require() of libp2p packages, which are
// ESM-only in every published version, so webpack/turbopack cannot resolve
// them and `next build` fails. All estate sites run with P2P disabled
// (enableP2P: false), so the requires never execute at runtime — stub them.
// If the SDK upstream fixes its dist, this becomes a no-op.
import { readFileSync, writeFileSync } from "node:fs";

const p = "node_modules/@meok-labs/ai-sdk/dist/p2p/client.js";
let s;
try {
  s = readFileSync(p, "utf8");
} catch {
  console.log("SDK dist not found — nothing to patch");
  process.exit(0);
}
const stub =
  "const libp2pMod = { createLibp2p: () => { throw new Error('P2P disabled in this deployment'); } };\n" +
  "        const wsMod = {}; const rtcMod = {}; const noiseMod = {}; const mplexMod = {};";
const re =
  /const libp2pMod = await Promise\.resolve\(\)[\s\S]*?const mplexMod = await Promise\.resolve\(\)[\s\S]*?;/;
if (re.test(s)) {
  writeFileSync(p, s.replace(re, stub));
  console.log("p2p requires patched");
} else {
  console.log("p2p pattern not found (already patched or fixed upstream)");
}
