#!/usr/bin/env node

import { readdirSync, existsSync } from "node:fs";
import { join, resolve } from "node:path";
import { spawn } from "node:child_process";

const workspaceRoot = process.cwd();
const [, , command, ...args] = process.argv;

const validCommands = new Set(["list", "dev", "build", "export"]);
if (!validCommands.has(command)) {
  printUsage();
  process.exit(1);
}

const deckName = getDeckName(args);
const decks = findDecks(workspaceRoot);

if (command === "list") {
  printDecks(decks);
  process.exit(0);
}

if (decks.length === 0) {
  console.error("找不到任何簡報。請先建立包含 slides.md 的子資料夾。");
  process.exit(1);
}

const targetDeck = selectDeck(deckName, decks);
if (!targetDeck) {
  console.error(`找不到簡報資料夾: ${deckName}`);
  printDecks(decks);
  process.exit(1);
}

const entry = join(targetDeck.path, "slides.md");

switch (command) {
  case "dev":
    runSlidev(["slidev", entry]);
    break;
  case "build":
    runSlidev(["slidev", "build", entry, "--base", "./", "--out", join(targetDeck.path, "dist")]);
    break;
  case "export":
    runSlidev([
      "slidev",
      "export",
      entry,
      "--output",
      join(targetDeck.path, "slides-export.pdf"),
    ]);
    break;
  default:
    printUsage();
    process.exit(1);
}

function getDeckName(inputArgs) {
  const deckFlag = inputArgs.find((arg) => arg.startsWith("--deck="));
  if (deckFlag) return deckFlag.slice("--deck=".length);

  const positional = inputArgs.find((arg) => !arg.startsWith("-"));
  return positional ?? "";
}

function findDecks(root) {
  return readdirSync(root, { withFileTypes: true })
    .filter((entryDir) => entryDir.isDirectory())
    .map((entryDir) => {
      const path = resolve(root, entryDir.name);
      return {
        name: entryDir.name,
        path,
        hasSlides: existsSync(join(path, "slides.md")),
      };
    })
    .filter((deck) => deck.hasSlides)
    .sort((a, b) => a.name.localeCompare(b.name, "zh-Hant"));
}

function selectDeck(name, decks) {
  if (name) return decks.find((deck) => deck.name === name);
  if (decks.length === 1) return decks[0];
  console.error("偵測到多份簡報，請指定 --deck=<資料夾名稱>。");
  printDecks(decks);
  return null;
}

function printDecks(decks) {
  if (decks.length === 0) {
    console.log("目前沒有任何簡報資料夾。");
    return;
  }
  console.log("可用簡報：");
  for (const deck of decks) {
    console.log(`- ${deck.name}`);
  }
}

function runSlidev(cliArgs) {
  const child = spawn("npx", cliArgs, {
    stdio: "inherit",
    cwd: workspaceRoot,
    shell: process.platform === "win32",
  });

  child.on("exit", (code) => {
    process.exit(code ?? 1);
  });
}

function printUsage() {
  console.log(`用法:
  npm run list
  npm run dev -- --deck="開發了一款分帳 APP"
  npm run build -- --deck="開發了一款分帳 APP"
  npm run export -- --deck="開發了一款分帳 APP"

也可用位置參數:
  npm run build -- "開發了一款分帳 APP"
`);
}
