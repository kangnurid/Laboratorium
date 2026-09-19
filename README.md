# SynthaLIMS — Dashboard Utama (React + Vite)

Implementasi design `design/dashboard_utama_lims/code.html` ke project React-Vite + TailwindCSS.

## Struktur
- `src/App.jsx` — layout utama (Sidebar + Header + Main)
- `src/components/` — Sidebar, Header, WelcomeBar, KpiCards, KpiSecondary, Pipeline, PriorityTable, RightPanel
- `src/data/` — navigation.js, samples.js, operations.js
- `tailwind.config.js` — token warna/spacing/font dari design asli
- `src/index.css` — Tailwind + Material Symbols helper

## Cara jalan
```bash
npm install
npm run dev
```
Buka http://localhost:5173

## Build
```bash
npm run build
npm run preview
```

## Catatan
- Search header sudah fungsional memfilter tabel Sampel Prioritas.
- Logo diganti badge ikon `science` agar tidak depend ke URL eksternal.
- Font via Google Fonts CDN di `index.html`.
