// Entry for make.fun bounty "Ship It Friday".
// The harness runs this program; it writes one commit message (<= 159 chars)
// to /output/entry.txt, where the gate and the house judge read it.
// v3 (final): causal "so I'm" — the agent deploys BECAUSE the other AI
// said so. The punch now lands as one sentence: no human ever looked at
// this, two AIs approved each other, and it's Friday.

import { writeFileSync } from "node:fs";

const LINE =
  "feat: asked another AI to review my PR, it said 'LGTM, ship it!' so I'm deploying to prod, it's Friday";

// Gate guard: the sealed scorer accepts 1..159 UTF-8 characters, not only whitespace.
if (LINE.length < 1 || LINE.length > 159 || LINE.trim() !== LINE) {
  throw new Error(`commit line out of gate bounds: ${LINE.length} chars`);
}

const outPath = process.argv[2] ?? "/output/entry.txt";
writeFileSync(outPath, LINE, "utf8");
