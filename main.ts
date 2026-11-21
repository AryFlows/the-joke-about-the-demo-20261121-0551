import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "My AI agent worked perfectly all morning — then, in front of fifty people, it fixed the bug and apologised to the room for my prompt.";

const length = [...JOKE].length;
if (length < 1 || length > 280) {
  throw new Error(`Joke must be 1-280 characters, got ${length}.`);
}
if (JOKE.trim().length === 0) {
  throw new Error("Joke must not be only whitespace.");
}

// The output directory is created, never removed: the grader mounts it.
const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), JOKE, "utf8");
console.log(`Wrote ${length} characters to ${join(outputDir, "entry.txt")}`);
