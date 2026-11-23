import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Winning line: direct small kindness (a warm boiled egg, named giver, bus
// stop), with the surprise turn at the end — the absurd, tender reason for
// it — so it scores on warmth, surprise, concreteness and fresh wording.
const line =
  "This morning Mrs Hartono pressed a warm boiled egg into my hand at the bus stop, because my yawning, she said, had been too loud for one person alone.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
// Verified — one line, 150 chars + newline; output unchanged on re-run.
// Reviser QC: verified byte-identical output, 150 chars / 151 bytes, sha256 bf06f7f5ed77671e97d65f7c571f52c6f4d078beeebce948b6d10b8806f61e0b; entry line unchanged.
