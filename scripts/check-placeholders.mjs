#!/usr/bin/env node
/**
 * Runs before every production build (see "build" in package.json).
 *
 * Fails the build when:
 * - any [bracketed placeholder] is left in the site copy (src/content/*.ts), or
 * - SITE_URL, the site's public address, is not set.
 *
 * For a preview build that may still contain placeholders, run `npm run build:preview`.
 */
import { readdirSync, readFileSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(fileURLToPath(import.meta.url), "..", "..");
const contentDir = join(root, "src", "content");
const STRING = /"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'|`(?:[^`\\]|\\.)*`/g;
const PLACEHOLDER = /\[[^\]\n]+\]/g;

const problems = [];

for (const name of readdirSync(contentDir).filter((f) => f.endsWith(".ts"))) {
  const file = join(contentDir, name);
  const lines = readFileSync(file, "utf8").split("\n");
  lines.forEach((line, i) => {
    for (const literal of line.match(STRING) ?? []) {
      for (const found of literal.match(PLACEHOLDER) ?? []) {
        problems.push(`  ${relative(root, file)}:${i + 1}  ${found}`);
      }
    }
  });
}

if (!process.env.SITE_URL) {
  problems.push("  SITE_URL is not set. Set it to the site's public address, e.g. https://example.org");
}

if (problems.length > 0) {
  console.error("\nThe production build is blocked until these are filled in:\n");
  console.error(problems.join("\n"));
  console.error(`\n${problems.length} item(s) to resolve. Use "npm run build:preview" for a preview build.\n`);
  process.exit(1);
}

console.log("Placeholder check passed: no placeholders remain.");
