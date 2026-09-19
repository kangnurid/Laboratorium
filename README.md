# SynthaLIMS (React + Vite + Supabase)

## 1. Setup Supabase
1. Buat project di https://supabase.com/dashboard
2. Buka **SQL Editor**, jalankan isi `supabase/schema.sql` (tabel `public.samples` + RLS + seed).
3. Buka **Project Settings > API**, salin:
   - Project URL → `VITE_SUPABASE_URL`
   - anon public key → `VITE_SUPABASE_ANON_KEY`
4. Isi file `.env` di root:
```bash
VITE_SUPABASE_URL=https://xyzcompany.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOi...
```
5. Install & jalan:
```bash
npm install
npm run dev
```

Tanpa `.env` yang valid, aplikasi otomatis **mode demo lokal** (localStorage) agar form tetap bisa dicoba.

## 2. Skema database (`supabase/schema.sql`)
Tabel `public.samples`:
- `id uuid PK default gen_random_uuid()`
- `code text unique not null` — UID LIMS mis. `#SMP-2025-1043`
- `matrix text`, `priority text (rutin|cito|investigasi)`
- `client_category, sender, ref_no, subject, sampling_time, received_time`
- `volume_ml numeric, intake_temp_c numeric, visual text`
- `check_sealed, check_leak_free, check_label_clear boolean`
- `intake_note text`, `tests text[]`
- `storage_unit text`, `rack_row text`, `rack_col text`
- `location_code text GENERATED` — `LOC-<UNIT>-T04-<ROW><COL>`
- `status text (draft|registered|queued|testing|validated|coa)`
- `created_at, updated_at timestamptz` + trigger auto-update
- Index: code, created_at desc, status
- RLS enabled + policy public read/insert/update/delete (demo; ketatkan untuk produksi)

## 3. Alur registrasi → database
- `src/lib/supabase.js` — client dari `.env`
- `src/lib/samplesApi.js` — `listSamples/createSample/deleteSample` (+ fallback localStorage)
- `src/pages/RegistrasiSampelPage.jsx` — state terpusat semua section, tombol summary:
  - `Daftarkan & Masukkan Antrean Analis` → status `registered`
  - `Simpan Draft Sementara` → status `draft`
  - sukses → list refresh + highlight + generate kode baru
- `src/components/registration/SampleList.jsx` — tabel tambah & lihat data: cari, badge SUPABASE LIVE / MODE DEMO LOKAL, hapus baris.


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

