# Presentation Workspace

這個目錄現在採用「**多份簡報共用根目錄依賴**」的架構：

- 每一份簡報放在自己的子資料夾（例如 `開發了一款分帳 APP/`）
- 所有 `node_modules` 集中在根目錄
- 統一在根目錄執行同一組指令，透過 `--deck` 指定要編譯哪一份簡報

---

## 目錄結構建議

```text
Presentation/
├─ package.json              # 共用依賴與共用指令
├─ node_modules/             # 只在根目錄
├─ scripts/
│  └─ slidev-run.mjs         # 共用執行器
├─ 開發了一款分帳 APP/
│  ├─ slides.md
│  ├─ style.css
│  ├─ assets/
│  └─ dist/                  # build 後輸出
└─ 另一份簡報/
   ├─ slides.md
   ├─ style.css
   ├─ assets/
   └─ dist/
```

---

## 第一次設定

在根目錄執行一次安裝：

```bash
npm install
```

> 不需要在每個簡報資料夾重複安裝。

---

## 指令用法（都在根目錄執行）

先查看有哪些簡報可用：

```bash
npm run list
```

啟動某份簡報的開發模式：

```bash
npm run dev -- --deck="開發了一款分帳 APP"
```

建置某份簡報為靜態網站（輸出到該簡報資料夾內的 `dist/`）：

```bash
npm run build -- --deck="開發了一款分帳 APP"
```

匯出某份簡報為 PDF（輸出到該簡報資料夾內的 `slides-export.pdf`）：

```bash
npm run export -- --deck="開發了一款分帳 APP"
```

也可用位置參數（不使用 `--deck`）：

```bash
npm run build -- "開發了一款分帳 APP"
```

---

## 新增一份簡報

1. 在根目錄新增資料夾，例如 `我的新簡報/`
2. 放入至少以下檔案：
   - `slides.md`
   - `style.css`（可選）
   - `assets/`（可選）
3. 回到根目錄執行：
   - `npm run list`（確認被偵測到）
   - `npm run dev -- --deck="我的新簡報"`

---

## 從舊架構遷移（每份簡報各自 node_modules）

如果你之前在簡報子資料夾內已經有 `package.json` / `node_modules`，可逐步整理為：

1. 保留內容檔：`slides.md`、`style.css`、`assets/`
2. 改用根目錄的 `package.json` 與共用指令
3. 確認新流程正常後，再刪除子資料夾舊的 `node_modules` 與 `package.json`

---

## GitHub Pages 自動部署（所有簡報）

已內建 workflow：`.github/workflows/deploy-pages.yml`，會在 `main` 分支推送後自動：

1. 安裝根目錄依賴
2. 掃描所有包含 `slides.md` 的子資料夾
3. 將每份簡報 build 到 Pages 輸出（`.pages-dist/<簡報資料夾>/`）
4. 產生首頁 `index.html`（列出所有簡報連結）
5. 部署到 GitHub Pages

你需要在 GitHub 倉庫設定中確認：

- `Settings` → `Pages` → `Source` 設為 `GitHub Actions`

本機可先模擬 Pages 打包：

```bash
npm run pages:build
```

---

更多語法與功能可參考 [Slidev 官方文件](https://sli.dev/)。
