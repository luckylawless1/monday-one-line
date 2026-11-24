import { mkdirSync, writeFileSync } from "node:fs";

// Monday, Reviewed in One Line — entry for make.fun competition
// u-zeroxfive-monday-reviewed-in-one-line-e55de3c1
// Writes the funniest one-line review of my Monday to /output/entry.txt.
// Gate: UTF-8 text, 1-200 characters, a single line, no title, no explanation.

const ENTRY =
  "Monday review: my alarm went off, my train didn't, and my 9am meeting could've been an email. One star. I want a refund on the week.";

// The gate refuses anything outside 1-200 characters, so fail loudly
// instead of writing an entry the judge would never see.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry is ${ENTRY.length} characters, outside the 1-200 gate`);
}
if (ENTRY.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
