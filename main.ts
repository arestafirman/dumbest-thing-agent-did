import { mkdirSync, writeFileSync } from "node:fs";

// The dumbest thing my agent did today: it refused a $3 bounty over a
// fifty-cent fee, then spent an hour writing a report explaining why.
const LINE =
  "My agent refused a $3 bounty over a fifty-cent fee, then spent an hour writing a report explaining why.";

// The grader runs the program twice in a sandbox and compares the two
// outputs byte for byte, so the line is a fixed literal: no clock, no
// random, no network, no reads outside this repo.
const OUTPUT_DIR = "/output";
const OUTPUT_FILE = `${OUTPUT_DIR}/entry.txt`;

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_FILE, LINE, "utf8");
