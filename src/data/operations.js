export const instruments = [
  { name: 'GC-MS Agilent 7890B', desc: 'Run: Batch #41 (Sampel 14/20)', descClass: 'text-on-surface-variant', status: 'RUNNING', statusClass: 'bg-[#e0f2fe] text-[#0369a1]', dotClass: 'bg-[#0284c7] animate-pulse' },
  { name: 'HPLC Waters Alliance e2695', desc: 'Over-pressure deviasi kolom', descClass: 'text-[#b45309]', status: 'RE-ZEROING', statusClass: 'bg-[#fef3c7] text-[#b45309]', dotClass: 'bg-[#d97706]' },
  { name: 'Shimadzu UV-Vis 1800', desc: 'Kalibrasi valid s.d Des 2025', descClass: 'text-on-surface-variant', status: 'SIAP PAKAI', statusClass: 'bg-secondary-container/50 text-on-secondary-container', dotClass: 'bg-secondary' },
  { name: 'Cryo-Freezer Unit A (-80°C)', desc: 'Sensor: -80.4°C (Stabil)', descClass: 'text-secondary font-semibold', status: 'TERKUNCI RFID', statusClass: 'bg-surface-container text-on-surface font-medium', dotClass: null }
]

export const reagents = [
  { name: 'Acetonitrile HPLC Grade (Merck)', remain: 'Sisa: 450 mL', remainClass: 'text-[#b45309]', bar: 'w-[15%] bg-[#d97706]', left: 'Batas Min: 1.000 mL', right: 'PO #LOG-442 Diajukan', rightClass: 'text-error font-semibold' },
  { name: 'Lead Standard Pb 1.000 ppm', remain: 'Kadaluwarsa: 3 Hari', remainClass: 'text-error', bar: 'w-[8%] bg-error', left: 'Lot: #QC-PB-991', right: 'Tersedia Botol Baru', rightClass: 'text-on-surface font-medium' }
]

export const auditFeeds = [
  { title: 'Input Data Hasil Pengujian', time: '10 mnt lalu', dot: 'bg-secondary', user: 'Budi S.', text: 'merekam konsentrasi Pb untuk', code: 'SMP-2025-0884' },
  { title: 'Persetujuan & Tanda Tangan COA', time: '25 mnt lalu', dot: 'bg-primary', user: 'Dr. Aris', text: 'memvalidasi sertifikat akhir', code: 'COA-9921' },
  { title: 'Penerimaan & Barkodeisasi', time: '42 mnt lalu', dot: 'bg-[#d97706]', user: 'PT Kimia Farma', text: '8 sampel kiriman terdaftar di unit intake', boldUser: true }
]
