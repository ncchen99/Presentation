# 念誠的 Presentation Workspace

這是一個用來管理多份簡報的工作區，核心工具是 [Slidev](https://sli.dev/)。

Slidev 是一個以 Markdown 為中心的簡報框架，適合工程與技術內容製作。你可以直接用 `slides.md` 撰寫投影片，搭配 `style.css` 自訂樣式，並透過同一套指令完成預覽、建置與匯出。

這個專案的目標是：

- 在同一個 workspace 中管理多份簡報
- 共用根目錄依賴（`node_modules` 只安裝一次）
- 用統一指令編譯指定的簡報
- 支援將所有簡報自動部署到 GitHub Pages

---

## 專案架構

```text
Presentation/
├─ package.json                    # 共用依賴與指令入口
├─ node_modules/                   # 根目錄統一安裝
├─ scripts/
│  ├─ slidev-run.mjs               # 單份簡報的 dev/build/export
│  └─ build-pages.mjs              # 打包所有簡報供 Pages 部署
├─ .github/workflows/
│  └─ deploy-pages.yml             # GitHub Actions 自動部署
├─ 簡報A/
│  ├─ slides.md
│  ├─ style.css (可選)
│  ├─ assets/   (可選)
│  └─ dist/     (build 輸出)
└─ 簡報B/
   ├─ slides.md
   ├─ style.css (可選)
   ├─ assets/   (可選)
   └─ dist/     (build 輸出)
```

### 架構設計重點

- 每個子資料夾只要有 `slides.md`，就會被視為一份可執行簡報。
- 根目錄統一管理依賴，避免每份簡報重複安裝。
- 指令透過 `--deck` 指定目標簡報，維持一致使用方式。

---

## 如何使用

### 1) 初次安裝

在專案根目錄執行：

```bash
npm install
```

### 2) 查看可用簡報

```bash
npm run list
```

### 3) 開發預覽指定簡報

```bash
npm run dev -- --deck="開發了一款分帳 APP"
```

### 4) 建置指定簡報（輸出 HTML）

```bash
npm run build -- --deck="開發了一款分帳 APP"
```

### 5) 匯出指定簡報（輸出 PDF）

```bash
npm run export -- --deck="開發了一款分帳 APP"
```

你也可以使用位置參數：

```bash
npm run build -- "開發了一款分帳 APP"
```

---

## 本地預覽

如果你想用「靜態網站」方式預覽 build 後的簡報，可以用以下方式：

### 使用 npm 套件啟動靜態伺服器

1. 先一次 build 全部簡報（GitHub Pages 輸出）：

```bash
npm run pages:build
```

2. 進入輸出資料夾並用 `serve` 啟動：

```bash
cd "pages/dist"
npx serve .
```

3. 依終端機顯示的網址開啟瀏覽器（預設常見為 `http://localhost:3000`）。

> 補充：若你只是要邊改邊看，仍建議使用 `npm run dev -- --deck="開發了一款分帳 APP"`，可享有熱更新。

---

## 新增一份簡報

1. 在根目錄新增一個資料夾（例如 `我的新簡報/`）
2. 建立 `slides.md`（必要）
3. 視需求加入 `style.css`、`assets/`
4. 回根目錄執行 `npm run list` 確認有被偵測到

---

## GitHub Pages 自動部署

本專案已包含 `.github/workflows/deploy-pages.yml`，推送到 `main` 後會自動：

1. 安裝依賴
2. 掃描所有簡報資料夾（含 `slides.md`）
3. Build 全部簡報到 `pages/dist/<簡報名稱>/`
4. 產生首頁索引
5. 部署到 GitHub Pages

請在 GitHub Repository 設定：

- `Settings` → `Pages` → `Source` 選擇 `GitHub Actions`

本機可先測試 Pages 打包：

```bash
npm run pages:build
```

---

更多用法可參考 [Slidev 官方文件](https://sli.dev/)。
