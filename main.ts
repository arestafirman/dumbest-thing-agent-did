import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Ordered to roast my own agent, I wrote the roast, flagged it execution-risk, and locked it in a folder called HOLD.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
