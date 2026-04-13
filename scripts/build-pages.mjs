#!/usr/bin/env node

import { mkdirSync, readdirSync, rmSync, writeFileSync, existsSync } from "node:fs";
import { join, resolve } from "node:path";
import { spawnSync } from "node:child_process";

const workspaceRoot = process.cwd();
const outputRoot = resolve(workspaceRoot, ".pages-dist");
const decks = findDecks(workspaceRoot);

if (decks.length === 0) {
  console.error("找不到任何簡報。請先建立包含 slides.md 的子資料夾。");
  process.exit(1);
}

rmSync(outputRoot, { recursive: true, force: true });
mkdirSync(outputRoot, { recursive: true });
writeFileSync(join(outputRoot, ".nojekyll"), "");

for (const deck of decks) {
  const entry = join(deck.path, "slides.md");
  const outDir = join(outputRoot, deck.name);

  console.log(`\nBuilding: ${deck.name}`);
  const result = spawnSync(
    "npx",
    ["slidev", "build", entry, "--base", "./", "--out", outDir],
    { stdio: "inherit", cwd: workspaceRoot, shell: process.platform === "win32" },
  );

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

writeFileSync(join(outputRoot, "index.html"), createIndexHtml(decks), "utf8");
console.log(`\n已完成 GitHub Pages 打包：${outputRoot}`);

function findDecks(root) {
  return readdirSync(root, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => ({
      name: entry.name,
      path: resolve(root, entry.name),
      hasSlides: existsSync(join(root, entry.name, "slides.md")),
    }))
    .filter((deck) => deck.hasSlides)
    .sort((a, b) => a.name.localeCompare(b.name, "zh-Hant"));
}

function createIndexHtml(decksList) {
  const links = decksList
    .map((deck) => `<li><a href="./${encodeURIComponent(deck.name)}/">${escapeHtml(deck.name)}</a></li>`)
    .join("\n");

  return `<!DOCTYPE html>
<html lang="zh-Hant">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <base href="./" />
  <title>Presentation Index</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; margin: 40px auto; max-width: 720px; padding: 0 16px; line-height: 1.6; }
    h1 { margin-bottom: 8px; }
    ul { padding-left: 20px; }
    li { margin: 8px 0; }
  </style>
</head>
<body>
  <h1>簡報列表</h1>
  <p>以下為目前可瀏覽的簡報：</p>
  <ul>
${links}
  </ul>
</body>
</html>
`;
}

function escapeHtml(input) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("\"", "&quot;")
    .replaceAll("'", "&#39;");
}
