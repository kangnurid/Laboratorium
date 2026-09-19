# SynthaLIMS (React + Vite)

Implementasi design HTML ke project React-Vite + TailwindCSS.

## Routes (hash-based, tanpa dependency router)
- `#/dashboard-utama` — dari `design/dashboard_utama_lims/code.html`
- `#/registrasi-sampel` — dari `design/registrasi_sampel_manajemen_lokasi_penyimpanan/code.html`
- route lain menampilkan placeholder memakai shell yang sama

## Struktur
- `src/App.jsx` — layout utama (AppSidebar + Header + Main + routing hash)
- `src/pages/DashboardPage.jsx` — dashboard utama
- `src/pages/RegistrasiSampelPage.jsx` — registrasi sampel + alokasi penyimpanan
- `src/pages/PlaceholderPage.jsx` — fallback modul lain
- `src/components/` — AppSidebar, Header, WelcomeBar, KpiCards, KpiSecondary, Pipeline, PriorityTable, RightPanel
- `src/components/registration/` — RegHeader, SectionA/B/C/D, StorageUnits, RackMatrix, LocationCard, RegSummary
- `src/data/` — navigation.js, samples.js, operations.js, registration.js
- `src/hooks/useHashRoute.js` — hash router ringan
- `tailwind.config.js` — token warna/spacing/font dari design asli

## Cara jalan
```bash
npm install
npm run dev
```
Buka http://localhost:5173 — default `#/dashboard-utama`, klik sidebar `Registrasi Sampel` untuk `#/registrasi-sampel`.

## Build
```bash
npm run build
npm run preview
```

## Catatan
- Search header memfilter tabel Sampel Prioritas di dashboard.
- Registrasi interaktif: regenerasi UID, prioritas SLA, kategori klien, checklist integritas, pilih parameter uji (estimasi durasi otomatis), pilih unit cold-chain, klik slot kosong matriks rak (default E-07), summary bar live.
- Logo diganti badge ikon `science` agar tidak depend ke URL eksternal.
- Font via Google Fonts CDN di `index.html`.

