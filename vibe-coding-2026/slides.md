---
theme: default
colorSchema: dark
highlighter: shiki
lineNumbers: false
transition: slide-left
title: 2026 AI Agentic Development 實戰操作指南
info: |
  從產品設計到部署的規格驅動開發完整流程
drawings:
  persist: false
fonts:
  sans: Noto Sans TC
  mono: Fira Code
---

<div class="h-full flex flex-col justify-center items-center text-center">

<div class="text-6xl font-black mb-2 pb-4" style="background: linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
  AI Agentic Development
</div>

<div class="text-2xl font-semibold text-gray-300 mb-2">實戰操作指南</div>
<div class="text-lg text-gray-400 mb-8">從產品設計到部署的規格驅動開發完整流程</div>

<div class="flex gap-6 text-sm">
  <div class="px-4 py-2 rounded-full border border-purple-500/40 bg-purple-500/10 text-purple-300">
    課程：人本資訊系統與互動經驗設計
  </div>
  <div class="px-4 py-2 rounded-full border border-pink-500/40 bg-pink-500/10 text-pink-300">
    分享的人：念誠
  </div>
</div>

<div class="mt-10 text-gray-500 text-sm italic">
  「現階段規格是最重要的！一開始規格列得好，後面開發上會節省非常多時間。」
</div>

</div>

---
layout: default
transition: fade
---

# 念誠自我介紹

<div class="text-sm text-gray-400 mb-5">這一年多用 AI 做了幾個小專案，這次來分享我從中整理出來的流程。</div>

<div class="grid grid-cols-3 gap-3">

<a href="https://github.com/ncchen99/Tuckin" target="_blank" class="rounded-xl p-3 block transition-all hover:scale-[1.02]" style="background: rgba(99,102,241,0.1); border: 1px solid rgba(99,102,241,0.25); text-decoration: none;">
  <div class="flex items-center gap-2 mb-2">
    <span class="text-lg">🥕</span>
    <div>
      <div class="text-sm font-bold text-gray-200">Tuckin</div>
      <div class="text-xs text-indigo-400">2025.03</div>
    </div>
  </div>
  <div class="text-xs text-gray-400 mb-2">學生聚餐配對平台</div>
  <div class="flex gap-1 flex-wrap">
    <span class="text-xs px-1.5 py-0.5 rounded bg-gray-800 text-gray-400">Flutter</span>
    <span class="text-xs px-1.5 py-0.5 rounded bg-gray-800 text-gray-400">Supabase</span>
  </div>
</a>

<a href="https://github.com/ncchen99/InkSync" target="_blank" class="rounded-xl p-3 block transition-all hover:scale-[1.02]" style="background: rgba(139,92,246,0.1); border: 1px solid rgba(139,92,246,0.25); text-decoration: none;">
  <div class="flex items-center gap-2 mb-2">
    <span class="text-lg">🖼️</span>
    <div>
      <div class="text-sm font-bold text-gray-200">InkSync</div>
      <div class="text-xs text-purple-400">2025.12</div>
    </div>
  </div>
  <div class="text-xs text-gray-400 mb-2">分散式多裝置 E-Paper 控制系統</div>
  <div class="flex gap-1 flex-wrap">
    <span class="text-xs px-1.5 py-0.5 rounded bg-gray-800 text-gray-400">ESP32</span>
    <span class="text-xs px-1.5 py-0.5 rounded bg-gray-800 text-gray-400">Flutter</span>
  </div>
</a>

<a href="https://github.com/ncchen99/Campus-Shift-Scheduler" target="_blank" class="rounded-xl p-3 block transition-all hover:scale-[1.02]" style="background: rgba(245,158,11,0.1); border: 1px solid rgba(245,158,11,0.25); text-decoration: none;">
  <div class="flex items-center gap-2 mb-2">
    <span class="text-lg">📅</span>
    <div>
      <div class="text-sm font-bold text-gray-200">排班王</div>
      <div class="text-xs text-amber-400">2025.12</div>
    </div>
  </div>
  <div class="text-xs text-gray-400 mb-2">工讀生排班管理系統</div>
  <div class="flex gap-1 flex-wrap">
    <span class="text-xs px-1.5 py-0.5 rounded bg-gray-800 text-gray-400">React</span>
    <span class="text-xs px-1.5 py-0.5 rounded bg-gray-800 text-gray-400">Firebase</span>
  </div>
</a>

<a href="https://github.com/ncchen99/HMSSTC-Web" target="_blank" class="rounded-xl p-3 block transition-all hover:scale-[1.02]" style="background: rgba(16,185,129,0.1); border: 1px solid rgba(16,185,129,0.25); text-decoration: none;">
  <div class="flex items-center gap-2 mb-2">
    <span class="text-lg">🚀</span>
    <div>
      <div class="text-sm font-bold text-gray-200">HMSSTC</div>
      <div class="text-xs text-emerald-400">2026.02</div>
    </div>
  </div>
  <div class="text-xs text-gray-400 mb-2">夏漢民太空科技中心官方網站</div>
  <div class="flex gap-1 flex-wrap">
    <span class="text-xs px-1.5 py-0.5 rounded bg-gray-800 text-gray-400">Astro</span>
  </div>
</a>

<a href="https://github.com/ncchen99/NCKU-CA" target="_blank" class="rounded-xl p-3 block transition-all hover:scale-[1.02]" style="background: rgba(59,130,246,0.1); border: 1px solid rgba(59,130,246,0.25); text-decoration: none;">
  <div class="flex items-center gap-2 mb-2">
    <span class="text-lg">🎓</span>
    <div>
      <div class="text-sm font-bold text-gray-200">NCKU-CA</div>
      <div class="text-xs text-blue-400">2026.03</div>
    </div>
  </div>
  <div class="text-xs text-gray-400 mb-2">成大社聯會官方網站</div>
  <div class="flex gap-1 flex-wrap">
    <span class="text-xs px-1.5 py-0.5 rounded bg-gray-800 text-gray-400">Next.js</span>
    <span class="text-xs px-1.5 py-0.5 rounded bg-gray-800 text-gray-400">Firebase</span>
  </div>
</a>

<a href="https://github.com/ncchen99/Zplit" target="_blank" class="rounded-xl p-3 block transition-all hover:scale-[1.02]" style="background: rgba(236,72,153,0.1); border: 1px solid rgba(236,72,153,0.25); text-decoration: none;">
  <div class="flex items-center gap-2 mb-2">
    <span class="text-lg">💸</span>
    <div>
      <div class="text-sm font-bold text-gray-200">Zplit</div>
      <div class="text-xs text-pink-400">2026.04</div>
    </div>
  </div>
  <div class="text-xs text-gray-400 mb-2">固定朋友圈長期分帳平台</div>
  <div class="flex gap-1 flex-wrap">
    <span class="text-xs px-1.5 py-0.5 rounded bg-gray-800 text-gray-400">TypeScript</span>
    <span class="text-xs px-1.5 py-0.5 rounded bg-gray-800 text-gray-400">Firebase</span>
  </div>
</a>

</div>

<div class="mt-4 text-xs text-gray-600 text-center">許若仁董事長提過：『我們在專案中累積的，不應著重於技術和知識，而是該領域的見聞和想法。』</div>

---
layout: default
transition: fade
---

# 開發者角色的轉變

<div class="flex gap-12 items-center justify-center h-4/5">

<div class="text-center">
  <div class="text-5xl mb-4">💻</div>
  <div class="text-xl font-bold text-gray-400 mb-2">過去</div>
  <div class="text-2xl font-black text-gray-300">代碼執行者</div>
  <div class="mt-3 text-sm text-gray-500">專注於「怎麼寫」</div>
  <div class="text-sm text-gray-500">逐行撰寫代碼</div>
  <div class="text-sm text-gray-500">手動管理所有細節</div>
</div>

<div class="text-5xl text-purple-400">→</div>

<div class="text-center">
  <div class="text-5xl mb-4">🏛️</div>
  <div class="text-xl font-bold text-purple-400 mb-2">現在</div>
  <div class="text-2xl font-black text-purple-300">架構指揮官</div>
  <div class="mt-3 text-sm text-gray-400">專注於「做什麼」</div>
  <div class="text-sm text-gray-400">定義規格與邊界</div>
  <div class="text-sm text-gray-400">監督 AI 產出品質</div>
</div>

</div>

---
layout: default
transition: slide-up
---

# 完整流程總覽

<div class="grid grid-cols-4 gap-3 mt-4">

<v-click>
<div class="rounded-xl p-4 text-center" style="background: rgba(99,102,241,0.15); border: 1px solid rgba(99,102,241,0.4)">
  <div class="text-2xl mb-2">📁</div>
  <div class="text-xs text-indigo-400 font-bold mb-1">準備</div>
  <div class="text-sm font-semibold text-gray-200">資料夾結構</div>
</div>
</v-click>

<v-click>
<div class="rounded-xl p-4 text-center" style="background: rgba(139,92,246,0.15); border: 1px solid rgba(139,92,246,0.4)">
  <div class="text-2xl mb-2">📝</div>
  <div class="text-xs text-purple-400 font-bold mb-1">階段一</div>
  <div class="text-sm font-semibold text-gray-200">需求文件</div>
</div>
</v-click>

<v-click>
<div class="rounded-xl p-4 text-center" style="background: rgba(168,85,247,0.15); border: 1px solid rgba(168,85,247,0.4)">
  <div class="text-2xl mb-2">⚙️</div>
  <div class="text-xs text-violet-400 font-bold mb-1">階段二</div>
  <div class="text-sm font-semibold text-gray-200">技術選型</div>
</div>
</v-click>

<v-click>
<div class="rounded-xl p-4 text-center" style="background: rgba(236,72,153,0.15); border: 1px solid rgba(236,72,153,0.4)">
  <div class="text-2xl mb-2">🏗️</div>
  <div class="text-xs text-pink-400 font-bold mb-1">階段三</div>
  <div class="text-sm font-semibold text-gray-200">系統架構</div>
</div>
</v-click>

<v-click>
<div class="rounded-xl p-4 text-center" style="background: rgba(245,158,11,0.15); border: 1px solid rgba(245,158,11,0.4)">
  <div class="text-2xl mb-2">🎨</div>
  <div class="text-xs text-amber-400 font-bold mb-1">階段四</div>
  <div class="text-sm font-semibold text-gray-200">設計稿生成</div>
</div>
</v-click>

<v-click>
<div class="rounded-xl p-4 text-center" style="background: rgba(16,185,129,0.15); border: 1px solid rgba(16,185,129,0.4)">
  <div class="text-2xl mb-2">🔗</div>
  <div class="text-xs text-emerald-400 font-bold mb-1">階段五</div>
  <div class="text-sm font-semibold text-gray-200">設計整合</div>
</div>
</v-click>

<v-click>
<div class="rounded-xl p-4 text-center" style="background: rgba(59,130,246,0.15); border: 1px solid rgba(59,130,246,0.4)">
  <div class="text-2xl mb-2">🤖</div>
  <div class="text-xs text-blue-400 font-bold mb-1">階段六</div>
  <div class="text-sm font-semibold text-gray-200">AI 代理開發</div>
</div>
</v-click>

<v-click>
<div class="rounded-xl p-4 text-center" style="background: rgba(20,184,166,0.15); border: 1px solid rgba(20,184,166,0.4)">
  <div class="text-2xl mb-2">📋</div>
  <div class="text-xs text-teal-400 font-bold mb-1">階段七</div>
  <div class="text-sm font-semibold text-gray-200">部署應用程式</div>
</div>
</v-click>

</div>

---
layout: section
transition: slide-left
---

<div class="text-center">
  <div class="text-6xl mb-4">📁</div>
  <div class="text-4xl font-black text-indigo-400">專案資料夾結構規範</div>
  <div class="text-lg text-gray-400 mt-3">上下文工程（Context Engineering）的基礎</div>
</div>

---
layout: default
transition: fade
---

# 標準資料夾結構

<div class="mt-4">

```bash {all|1-6|7-11|12-14}
my-project/
├── specs/                    # 所有規格文件放這裡
│   ├── requirements.md       # 需求文件（做什麼＋驗收標準）
│   ├── SPEC.md               # 技術規格（數據模型、API 設計）
│   ├── AGENTS.md             # AI 代理人角色指令與行為約束
│   └── tasks.md              # AI 規劃後產生的任務清單（待確認）
├── designs/                  # 所有設計資產放這裡
│   ├── DESIGN.md             # 設計系統規格（色彩、字體、間距）
│   ├── wireframes/           # 線框圖描述文字檔
│   └── stitches/             # Stitches 導出的 HTML/CSS/JS 檔案
├── figma/                    # Figma 相關資源（專業流程使用）
└── src/                      # 源代碼
```

</div>

<div class="mt-4 px-4 py-3 rounded-lg text-sm" style="background: rgba(99,102,241,0.1); border: 1px solid rgba(99,102,241,0.3)">
  💡 這個結構讓 AI 代理人能夠<span class="text-indigo-300 font-bold">跨檔案梳理邏輯</span>，是規格驅動開發的核心基礎。
</div>

---
layout: section
transition: slide-left
---

<div class="text-center">
  <div class="text-5xl mb-3">📝</div>
  <div class="text-xl text-purple-400 font-semibold mb-1">第一階段</div>
  <div class="text-4xl font-black text-gray-100">明確功能與需求文件</div>
  <div class="text-lg text-gray-400 mt-3">讓 AI 完全理解專案的靈魂與邊界</div>
</div>

---
layout: default
transition: fade
---

# 步驟 1.1 — 反覆討論，聚焦需求

<div class="mt-2 mb-4 text-gray-400 text-sm">關鍵：定義產品的<span class="text-purple-300">影響力</span>與<span class="text-purple-300">核心價值</span>，而非列功能清單</div>

<div class="grid grid-cols-2 gap-4">

<div>
<v-clicks>

<div class="mb-3 p-3 rounded-lg" style="background: rgba(139,92,246,0.1); border-left: 3px solid #8b5cf6">
  <div class="text-sm font-bold text-purple-300">🎯 核心問題</div>
  <div class="text-sm text-gray-300 mt-1">這個服務解決什麼問題？</div>
</div>

<div class="mb-3 p-3 rounded-lg" style="background: rgba(139,92,246,0.1); border-left: 3px solid #8b5cf6">
  <div class="text-sm font-bold text-purple-300">👥 使用者</div>
  <div class="text-sm text-gray-300 mt-1">主要使用者是誰？</div>
</div>

<div class="mb-3 p-3 rounded-lg" style="background: rgba(139,92,246,0.1); border-left: 3px solid #8b5cf6">
  <div class="text-sm font-bold text-purple-300">⭐ 優先功能</div>
  <div class="text-sm text-gray-300 mt-1">最重要的 3 個功能是什麼？</div>
</div>

<div class="p-3 rounded-lg" style="background: rgba(236,72,153,0.1); border-left: 3px solid #ec4899">
  <div class="text-sm font-bold text-pink-300">🚫 邊界定義</div>
  <div class="text-sm text-gray-300 mt-1">哪些事情是這個產品<strong>絕對不做</strong>的？</div>
</div>

</v-clicks>
</div>

<div>
<v-click>
<div class="p-4 rounded-xl h-full" style="background: rgba(17,24,39,0.8); border: 1px solid rgba(99,102,241,0.3)">
  <div class="text-xs text-indigo-400 font-bold mb-2">💬 範例提問方式</div>
  <div class="text-xs text-gray-400 italic leading-relaxed">
    「我想打造一個充滿正向交流的社群平台，請幫我釐清：什麼樣的機制能引導良性互動、減少負面情緒擴散？」
  </div>
</div>
</v-click>
</div>

</div>

---
layout: default
transition: fade
---

# 步驟 1.2 — 選擇 AI 工具整理想法

<div class="mt-4">

| 情境 | 推薦工具 | 原因 |
|------|----------|------|
| 快速發散、腦力激盪 | ChatGPT、Gemini | 通用型 LLM，回應速度快 |
| 複雜文件整理、長上下文 | Claude | 比較不會忘東忘西，Markdown 編輯能力卓越 |
| 大型專案、跨檔案梳理 | Cursor / Claude Code | Code Agent，支援跨檔案推理 |

</div>

<v-click>
<div class="mt-6">

### 步驟 1.3 — 產出 `requirements.md` 的 Prompt 範本

```md
請根據我們的討論，幫我整理一份完整的需求文件（requirements.md）。
格式要求：
- 產品背景與核心價值（為什麼要做這個？）
- 目標使用者描述
- 核心功能清單（按優先級排序）
- 各功能的驗收標準（Acceptance Criteria）
- 邊界情況與錯誤處理方式
- 明確的「不做清單」（Out of Scope）
請使用 Markdown 格式，確保邏輯嚴謹。
```

</div>
</v-click>

---
layout: center
---

<img src="/assets/1.3.png" class="rounded-lg shadow-xl h-4/5 object-contain" />

---
layout: section
transition: slide-left
---

<div class="text-center">
  <div class="text-5xl mb-3">⚙️</div>
  <div class="text-xl text-violet-400 font-semibold mb-1">第二階段</div>
  <div class="text-4xl font-black text-gray-100">技術選型</div>
  <div class="text-lg text-gray-400 mt-3">基於需求文件的數據導向決策</div>
</div>

---
layout: default
transition: fade
---

# 後端方案參考對照

<div class="mt-4">

| 方案 | 特點 | 2026 預估月費（10萬用戶） | 適用場景 |
|------|------|:---:|------|
| **Supabase** (PostgreSQL) | 關係型、可自託管、定額收費 | $25–$90 | SaaS、Web 應用、複雜關係數據 |
| **Firebase** (NoSQL) | 文檔型、Google 生態整合、按操作收費 | $500–$2,000 | 行動 App、快速原型、即時同步 |
| **Custom** (K8s/Go) | 完全控制、高維護成本 | $1,500+ | 企業核心系統、極高性能需求 |

</div>

<v-click>
<div class="mt-5 p-4 rounded-xl" style="background: rgba(16,185,129,0.1); border: 1px solid rgba(16,185,129,0.3)">
  <div class="text-emerald-400 font-bold text-sm mb-1">💡 2026 年建議</div>
  <div class="text-gray-300 text-sm">
    在高頻操作的應用中，Supabase 通常比 Firebase <span class="text-emerald-300 font-bold">便宜 80%–95%</span>。<br>
    初學者與小型專案優先考慮 <span class="text-emerald-300 font-bold">Supabase</span>。
  </div>
</div>
</v-click>

---
layout: default
transition: fade
---

# 技術選型的 AI Prompt 範本

```md {all|2|3-8}
請根據 specs/requirements.md 中的需求，推薦最適合的技術架構。
請說明：
1. 前端框架選擇及原因
2. 後端方案選擇及原因（含至少兩個方案的比較）
3. 資料庫選型及原因
4. 第三方服務建議（身份驗證、儲存等）
5. 每個選擇的優缺點與取捨

請特別考量：開發速度、維護成本、團隊學習曲線。
```

<v-click>
<div class="mt-4 p-3 rounded-lg text-sm" style="background: rgba(168,85,247,0.1); border: 1px solid rgba(168,85,247,0.3)">
  📌 確認技術選型後，請 AI 根據 <code>requirements.md</code> 擴充產生 <code>specs/SPEC.md</code>，
  內容包含技術堆疊、API 路由設計、資料庫 Schema 草稿。
</div>
</v-click>

---
layout: section
transition: slide-left
---

<div class="text-center">
  <div class="text-5xl mb-3">🏗️</div>
  <div class="text-xl text-pink-400 font-semibold mb-1">第三階段</div>
  <div class="text-4xl font-black text-gray-100">系統架構與介面規劃</div>
  <div class="text-lg text-gray-400 mt-3">建立系統骨架</div>
</div>

---
layout: default
transition: fade
---

# 架構規模選型指引

<div class="grid grid-cols-3 gap-4 mt-4">

<v-click>
<div class="rounded-xl p-4" style="background: rgba(16,185,129,0.1); border: 1px solid rgba(16,185,129,0.3)">
  <div class="text-emerald-400 font-bold mb-2">🌱 輕量 / 敏捷</div>
  <div class="text-sm text-gray-300 mb-3">前端直接接 BaaS</div>
  <div class="text-xs bg-gray-800 rounded px-2 py-1 font-mono text-emerald-300">React/Vue + Supabase</div>
</div>
</v-click>

<v-click>
<div class="rounded-xl p-4" style="background: rgba(99,102,241,0.1); border: 1px solid rgba(99,102,241,0.3)">
  <div class="text-indigo-400 font-bold mb-2">🏢 中型專案</div>
  <div class="text-sm text-gray-300 mb-3">有輕量後端</div>
  <div class="text-xs bg-gray-800 rounded px-2 py-1 font-mono text-indigo-300">Next.js + Edge Functions</div>
</div>
</v-click>

<v-click>
<div class="rounded-xl p-4" style="background: rgba(236,72,153,0.1); border: 1px solid rgba(236,72,153,0.3)">
  <div class="text-pink-400 font-bold mb-2">🏭 企業系統</div>
  <div class="text-sm text-gray-300 mb-3">完整微服務</div>
  <div class="text-xs bg-gray-800 rounded px-2 py-1 font-mono text-pink-300">K8s + Kafka + 自定義服務</div>
</div>
</v-click>

</div>

<v-click>
<div class="mt-5">

### 前端元件拆分：原子設計（Atomic Design）

<div class="flex gap-2 mt-3 text-sm">
  <div class="flex-1 text-center rounded-lg py-2 px-3" style="background: rgba(99,102,241,0.15)">
    <div class="text-indigo-400 font-bold text-xs">Atoms</div>
    <div class="text-gray-400 text-xs mt-1">Button, Input, Badge</div>
  </div>
  <div class="text-gray-500 self-center">→</div>
  <div class="flex-1 text-center rounded-lg py-2 px-3" style="background: rgba(139,92,246,0.15)">
    <div class="text-purple-400 font-bold text-xs">Molecules</div>
    <div class="text-gray-400 text-xs mt-1">SearchBar, UserCard</div>
  </div>
  <div class="text-gray-500 self-center">→</div>
  <div class="flex-1 text-center rounded-lg py-2 px-3" style="background: rgba(168,85,247,0.15)">
    <div class="text-violet-400 font-bold text-xs">Organisms</div>
    <div class="text-gray-400 text-xs mt-1">Header, Sidebar</div>
  </div>
  <div class="text-gray-500 self-center">→</div>
  <div class="flex-1 text-center rounded-lg py-2 px-3" style="background: rgba(236,72,153,0.15)">
    <div class="text-pink-400 font-bold text-xs">Pages</div>
    <div class="text-gray-400 text-xs mt-1">路由 + 頁面元件</div>
  </div>
</div>

</div>
</v-click>

---
layout: section
transition: slide-left
---

<div class="text-center">
  <div class="text-5xl mb-3">🎨</div>
  <div class="text-xl text-amber-400 font-semibold mb-1">第四階段</div>
  <div class="text-4xl font-black text-gray-100">前端頁面與設計稿生成</div>
  <div class="text-lg text-gray-400 mt-3">工具：Google Stitch</div>
</div>

---
layout: default
transition: fade
---

# Google Stitch 四種模式

<div class="grid grid-cols-2 gap-4 mt-4">

<v-click>
<div class="rounded-xl p-4" style="background: rgba(99,102,241,0.1); border: 1px solid rgba(99,102,241,0.3)">
  <div class="flex items-center gap-2 mb-2">
    <div class="text-xl">🧠</div>
    <div class="font-bold text-indigo-300">Thinking</div>
  </div>
  <div class="text-xs text-gray-400">底層：Gemini Pro</div>
  <div class="text-sm text-gray-300 mt-1">追求精細排版、複雜頁面</div>
</div>
</v-click>

<v-click>
<div class="rounded-xl p-4" style="background: rgba(245,158,11,0.1); border: 1px solid rgba(245,158,11,0.3)">
  <div class="flex items-center gap-2 mb-2">
    <div class="text-xl">⚡</div>
    <div class="font-bold text-amber-300">3 Flash</div>
  </div>
  <div class="text-xs text-gray-400">底層：Gemini Flash</div>
  <div class="text-sm text-gray-300 mt-1">追求速度、快速原型</div>
</div>
</v-click>

<v-click>
<div class="rounded-xl p-4" style="background: rgba(16,185,129,0.1); border: 1px solid rgba(16,185,129,0.3)">
  <div class="flex items-center gap-2 mb-2">
    <div class="text-xl">🖼️</div>
    <div class="font-bold text-emerald-300">Redesign</div>
  </div>
  <div class="text-xs text-gray-400">圖像反向工程</div>
  <div class="text-sm text-gray-300 mt-1">上傳設計圖仿照風格</div>
</div>
</v-click>

<v-click>
<div class="rounded-xl p-4" style="background: rgba(236,72,153,0.1); border: 1px solid rgba(236,72,153,0.3)">
  <div class="flex items-center gap-2 mb-2">
    <div class="text-xl">💡</div>
    <div class="font-bold text-pink-300">Ideate</div>
  </div>
  <div class="text-xs text-gray-400">解決方案導向</div>
  <div class="text-sm text-gray-300 mt-1">有問題、尚未有視覺概念時</div>
</div>
</v-click>

</div>

<v-click>
<div class="mt-4 p-3 rounded-lg" style="background: rgba(245,158,11,0.1); border: 1px solid rgba(245,158,11,0.3)">
  <div class="text-amber-400 font-bold text-sm">⭐ 鎖定主視圖策略</div>
  <div class="text-gray-300 text-sm mt-1">
    只需生成 <strong>1–3 個核心頁面</strong>確立設計語言，其餘頁面由 AI 代碼代理人延展。<br>
    <span class="text-gray-400 text-xs">少量高質量 > 大量不一致</span>
  </div>
</div>
</v-click>

---
layout: default
transition: fade
---

# 從 Dribbble 到 Stitch 的工作流

<div class="mt-2 text-gray-400 text-sm mb-4">方案 B：指定設計風格生成（推薦）</div>

<div class="grid grid-cols-3 gap-3">

<div class="text-center">
  <div class="rounded-xl p-4" style="background: rgba(99,102,241,0.1); border: 1px solid rgba(99,102,241,0.3)">
    <div class="text-3xl mb-2">🎨</div>
    <div class="text-sm font-bold text-indigo-300">Step 1</div>
    <div class="text-xs text-gray-400 mt-1">從 Dribbble 找靈感截圖</div>
  </div>
</div>

<div class="text-center">
  <div class="rounded-xl p-4" style="background: rgba(139,92,246,0.1); border: 1px solid rgba(139,92,246,0.3)">
    <div class="text-3xl mb-2">🤖</div>
    <div class="text-sm font-bold text-purple-300">Step 2</div>
    <div class="text-xs text-gray-400 mt-1">AI 解析設計系統參數<br>存入 DESIGN.md</div>
  </div>
</div>

<div class="text-center">
  <div class="rounded-xl p-4" style="background: rgba(236,72,153,0.1); border: 1px solid rgba(236,72,153,0.3)">
    <div class="text-3xl mb-2">✨</div>
    <div class="text-sm font-bold text-pink-300">Step 3</div>
    <div class="text-xs text-gray-400 mt-1">以設計規格約束 Stitch<br>生成高保真頁面</div>
  </div>
</div>

</div>

<v-click>
<div class="mt-4">

```md
請分析這張設計稿的設計系統，輸出以下參數：
- 主色 / 輔助色 / 背景色（以 HEX 值標示）
- 字體系統（標題字重、內文字重、字級比例）
- 圓角大小（px）、間距系統（基礎單位）
- 陰影風格
- 整體設計語言關鍵字（如：minimalist, glassmorphism）
```

</div>
</v-click>

---
layout: section
transition: slide-left
---

<div class="text-center">
  <div class="text-5xl mb-3">🔗</div>
  <div class="text-xl text-emerald-400 font-semibold mb-1">第五階段</div>
  <div class="text-4xl font-black text-gray-100">設計整合與導出</div>
  <div class="text-lg text-gray-400 mt-3">選擇適合你的工作流程</div>
</div>

---
layout: two-cols
transition: fade
---

# 方案一：專業流程

**Figma + MCP**

適合：中大型專案、長期維護、設計師協作

<div class="mt-3 space-y-2">
<div class="p-2 rounded text-sm" style="background: rgba(16,185,129,0.1)">
  ✅ Stitch 導出 → 匯入 Figma
</div>
<div class="p-2 rounded text-sm" style="background: rgba(16,185,129,0.1)">
  ✅ 設定 Figma MCP Server
</div>
<div class="p-2 rounded text-sm" style="background: rgba(16,185,129,0.1)">
  ✅ IDE 連接 MCP，AI 讀取設計數據
</div>
</div>

<div class="mt-4 p-3 rounded-lg text-sm" style="background: rgba(16,185,129,0.1); border: 1px solid rgba(16,185,129,0.3)">
  <div class="text-emerald-400 font-bold text-xs mb-1">MCP 核心優勢</div>
  <div class="text-gray-300 text-xs">AI 精準抓取設計數據，而非猜測截圖。Code Connect 確保代碼使用已有設計系統元件。</div>
</div>

::right::

# 方案二：敏捷流程

**直接打包**

適合：小型專案、課堂練習、快速原型

<div class="mt-3 space-y-2">
<div class="p-2 rounded text-sm" style="background: rgba(99,102,241,0.1)">
  ✅ Stitch Export → Download as HTML
</div>
<div class="p-2 rounded text-sm" style="background: rgba(99,102,241,0.1)">
  ✅ 解壓縮 → <code>designs/stitches/</code>
</div>
<div class="p-2 rounded text-sm" style="background: rgba(99,102,241,0.1)">
  ✅ 作為 AI 的視覺規格參考
</div>
</div>

<div class="mt-4 p-3 rounded-lg text-sm" style="background: rgba(99,102,241,0.1); border: 1px solid rgba(99,102,241,0.3)">
  <div class="text-indigo-400 font-bold text-xs mb-1">⚠️ 注意</div>
  <div class="text-gray-300 text-xs">HTML/CSS 是<strong>視覺規格參考</strong>，非生產元件。AI 後續會重構為正式 React/Vue 元件。</div>
</div>

---
layout: section
transition: slide-left
---

<div class="text-center">
  <div class="text-5xl mb-3">🤖</div>
  <div class="text-xl text-blue-400 font-semibold mb-1">第六階段</div>
  <div class="text-4xl font-black text-gray-100">AI 代理人開發實踐</div>
  <div class="text-lg text-gray-400 mt-3">以規格與設計稿驅動 AI 完成實作</div>
</div>

---
layout: default
transition: fade
---

# 工具選型

<div class="mt-4">

| 功能 | Cursor (2026) | Google Antigravity (2026) |
|------|:---:|:---:|
| 核心技術 | VS Code Fork + Deep Indexing | Agent-first + Gemini 3 |
| 特色模式 | Composer（多檔案編輯） | Plan Mode + Artifacts |
| 異步處理 | 支援背景代理任務 | Manager 視圖監控多代理 |
| 定價 | $20/月（Pro） | 預覽期免費（含額度） |

</div>

<v-click>
<div class="mt-5 p-4 rounded-xl text-center" style="background: linear-gradient(135deg, rgba(59,130,246,0.2), rgba(99,102,241,0.2)); border: 1px solid rgba(99,102,241,0.4)">
  <div class="text-2xl mb-1">🎓</div>
  <div class="text-blue-300 font-bold">課堂統一使用：Google Antigravity</div>
  <div class="text-gray-400 text-sm mt-1">同學都有 Google 學生帳號 Pro 權限</div>
</div>
</v-click>

---
layout: default
transition: fade
---

# 步驟 6.2 — 終極 Prompt 範本

```md {all|1-5|7-13|15-19}
請你參考以下資料夾內的所有文件，協助打造這項產品：

📁 specs/requirements.md — 產品需求與驗收標準
📁 specs/SPEC.md — 技術規格，包含技術選型與 API 設計
📁 designs/DESIGN.md — 設計系統（色彩、字體、間距規則）
📁 designs/stitches/ — 代表性頁面的視覺參考（HTML/CSS）
📁 designs/wireframes/ — 各頁面線框圖規格

請嚴格按照以下順序進行：

1. 先仔細閱讀所有文件，理解整體系統
2. 規劃頁面清單、Component 設計、資料庫資料流安排
3. 將規劃結果輸出為 specs/tasks.md，等待確認後再撰寫程式碼
4. 確認後，依照 stitches/ 的代表性頁面建立設計語言，
   其餘頁面參考 wireframes/ 的規格一起生成
```

---
layout: default
transition: fade
---

# 步驟 6.3 & 6.4 — 確認計畫 + 安全性

<div class="grid grid-cols-2 gap-5 mt-3">

<div>
<div class="text-sm font-bold text-blue-400 mb-2">✅ 人工審查清單</div>

<v-clicks>

<div class="text-sm p-2 rounded mb-2" style="background: rgba(59,130,246,0.1)">
  確認任務順序是否合理
</div>
<div class="text-sm p-2 rounded mb-2" style="background: rgba(59,130,246,0.1)">
  確認沒有遺漏的功能點
</div>
<div class="text-sm p-2 rounded mb-2" style="background: rgba(59,130,246,0.1)">
  確認技術選型與 SPEC.md 一致
</div>
<div class="text-sm p-2 rounded" style="background: rgba(59,130,246,0.1)">
  如有問題，直接在對話中批注修正
</div>

</v-clicks>
</div>

<div>
<v-click>
<div class="text-sm font-bold text-red-400 mb-2">🔒 AGENTS.md 安全規則</div>

```md
## 最小權限原則
- 讀取代理：僅具備 read 權限
- 寫入代理：僅特定資料表 write
- 禁止 admin 或全局刪除權限

## 決策邊界
- Schema 修改：必須人工確認
- 環境變數：禁止硬編碼

## 授權框架
- 使用 OAuth 2.1
- 細粒度 Scope（read:transactions）
```

</v-click>
</div>

</div>

---
layout: section
transition: slide-left
---

<div class="text-center">
  <div class="text-5xl mb-3">📋</div>
  <div class="text-xl text-teal-400 font-semibold mb-1">附錄</div>
  <div class="text-4xl font-black text-gray-100">規格文件命名規範與模板</div>
</div>

---
layout: default
transition: fade
---

# 文件命名規則

<div class="mt-4">

| 文件 | 路徑 | 說明 |
|------|------|------|
| 需求文件 | `specs/requirements.md` | 定義「做什麼」與驗收標準 |
| 技術規格 | `specs/SPEC.md` | 技術選型、API 設計、資料模型 |
| 代理人規範 | `specs/AGENTS.md` | 代理人角色指令與行為約束 |
| 任務清單 | `specs/tasks.md` | AI 生成的任務規劃（待人工確認） |
| 設計系統 | `designs/DESIGN.md` | 色彩、字體、間距、元件規則 |

</div>

<v-click>
<div class="mt-5">

### `requirements.md` P0 / P1 / P2 優先級結構

```md
### 🔴 P0 — 必須有（MVP）
- [ ] 功能一：[說明] | 驗收標準：[如何確認完成]

### 🟡 P1 — 應該有
- [ ] 功能三：[說明]

### 🟢 P2 — 有更好（未來規劃）
- [ ] 功能四：[說明]
```

</div>
</v-click>

---
layout: default
transition: fade
---

# 快速檢查清單

<div class="grid grid-cols-3 gap-3 mt-3 text-xs">

<div class="rounded-xl p-3" style="background: rgba(139,92,246,0.1); border: 1px solid rgba(139,92,246,0.3)">
  <div class="text-purple-400 font-bold mb-2 text-sm">階段 1–2</div>
  <div class="space-y-1 text-gray-300">
    <div>☐ requirements.md 存在</div>
    <div>☐ 功能按優先級排序</div>
    <div>☐ 邊界情況已定義</div>
    <div>☐ 技術選型已確認</div>
    <div>☐ SPEC.md 含 API 設計</div>
  </div>
</div>

<div class="rounded-xl p-3" style="background: rgba(236,72,153,0.1); border: 1px solid rgba(236,72,153,0.3)">
  <div class="text-pink-400 font-bold mb-2 text-sm">階段 3–4</div>
  <div class="space-y-1 text-gray-300">
    <div>☐ 系統架構圖已產生</div>
    <div>☐ 元件按原子設計拆分</div>
    <div>☐ 至少 1 個設計稿</div>
    <div>☐ DESIGN.md 含設計系統</div>
  </div>
</div>

<div class="rounded-xl p-3" style="background: rgba(59,130,246,0.1); border: 1px solid rgba(59,130,246,0.3)">
  <div class="text-blue-400 font-bold mb-2 text-sm">階段 5–6</div>
  <div class="space-y-1 text-gray-300">
    <div>☐ 設計稿已導出</div>
    <div>☐ stitches/ 或 Figma 就緒</div>
    <div>☐ tasks.md 已人工確認</div>
    <div>☐ AI 代理人開始執行</div>
  </div>
</div>

</div>

---
layout: center
transition: fade
---

<div class="text-center">

<div class="text-4xl font-black mb-6" style="background: linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
  開始你的 Vibe Coding 之旅
</div>

<div class="text-lg text-gray-400 max-w-xl mx-auto mb-8 italic">
  「沒有任何時間比現在更早開始。即使不是完美的方法，我們也必須努力應用在專案上，畢竟改善世界才是專案的目標。」
</div>

<div class="flex gap-4 justify-center flex-wrap">
  <div class="px-4 py-2 rounded-full text-sm" style="background: rgba(99,102,241,0.2); border: 1px solid rgba(99,102,241,0.4); color: #a5b4fc">
    📁 建立資料夾結構
  </div>
  <div class="px-4 py-2 rounded-full text-sm" style="background: rgba(139,92,246,0.2); border: 1px solid rgba(139,92,246,0.4); color: #c4b5fd">
    📝 寫下第一份需求
  </div>
  <div class="px-4 py-2 rounded-full text-sm" style="background: rgba(236,72,153,0.2); border: 1px solid rgba(236,72,153,0.4); color: #f9a8d4">
    🤖 讓 AI 開始工作
  </div>
</div>

<div class="mt-8 text-gray-600 text-xs">
  2026 Vibe Coding 實戰操作指南 · 適用上半年
</div>

</div>
