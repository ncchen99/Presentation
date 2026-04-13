#!/usr/bin/env node

import { mkdirSync, readdirSync, rmSync, writeFileSync, existsSync } from "node:fs";
import { join, resolve } from "node:path";
import { spawnSync } from "node:child_process";

const workspaceRoot = process.cwd();
const outputRoot = resolve(workspaceRoot, "pages", "dist");
const decks = findDecks(workspaceRoot);
const siteBase = resolveSiteBase(process.env.PAGES_SITE_BASE);

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
  const deckBase = `${siteBase}${encodeURIComponent(deck.name)}/`;

  console.log(`\nBuilding: ${deck.name}`);
  console.log(`Base URL: ${deckBase}`);
  const result = spawnSync(
    "npx",
    ["slidev", "build", entry, "--base", deckBase, "--out", outDir],
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
    .map(
      (deck) => `      <li>
        <a
          href="./${encodeURIComponent(deck.name)}/"
          class="group flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/70 px-5 py-4 transition hover:border-cyan-400/60 hover:bg-slate-800"
        >
          <span class="text-base font-medium text-slate-100 group-hover:text-cyan-300">${escapeHtml(deck.name)}</span>
          <span class="text-sm text-slate-400 group-hover:text-cyan-200">進入簡報 →</span>
        </a>
      </li>`,
    )
    .join("\n");

  return `<!DOCTYPE html>
<html lang="zh-Hant">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <base href="./" />
  <title>簡報列表</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="min-h-screen bg-slate-950 text-slate-100 antialiased">
  <script>
    if (!window.location.pathname.endsWith("/")) {
      window.location.replace(window.location.pathname + "/" + window.location.search + window.location.hash);
    }
  </script>
  <main class="mx-auto flex min-h-screen w-full max-w-4xl flex-col px-6 py-12 sm:px-8">
    <div class="mb-10">
      <p class="mb-3 inline-flex rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 text-xs font-semibold tracking-wide text-cyan-300">
        Presentation Workspace
      </p>
      <h1 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">簡報列表</h1>
      <p class="mt-3 text-sm text-slate-400 sm:text-base">以下是目前可瀏覽的所有簡報，點選即可開啟。</p>
    </div>
    <section class="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 shadow-2xl shadow-slate-950/40 sm:p-6">
      <ul class="space-y-3">
${links}
      </ul>
    </section>
  </main>
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

function resolveSiteBase(rawBase) {
  if (!rawBase) return "/";

  let base = rawBase.trim();
  if (!base) return "/";

  if (!base.startsWith("/")) base = `/${base}`;
  if (!base.endsWith("/")) base = `${base}/`;
  return base;
}
