export const navSections = [
  {
    title: 'Overview & Intake',
    items: [
      { label: 'Dashboard Utama', icon: 'dashboard', path: 'dashboard-utama', badge: 'LIVE', badgeClass: 'bg-surface-container-high text-on-surface font-medium', active: true },
      { label: 'Pelacakan Sampel', icon: 'qr_code_scanner', path: 'pelacakan-sampel' },
      { label: 'Registrasi Sampel', icon: 'note_add', path: 'registrasi-sampel' }
    ]
  },
  {
    title: 'Testing & Workflow',
    items: [
      { label: 'Antrean Pengujian', icon: 'hourglass_top', path: 'antrean-pengujian', badge: '14', badgeClass: 'bg-surface-container text-on-surface' },
      { label: 'Workspace Analis', icon: 'biotech', path: 'workspace-analis' },
      { label: 'Manajemen SOP', icon: 'description', path: 'manajemen-sop' }
    ]
  },
  {
    title: 'Quality & Compliance',
    items: [
      { label: 'Validasi & Persetujuan', icon: 'verified', path: 'validasi-persetujuan', badge: '3', badgeClass: 'bg-error-container text-on-error-container font-semibold' },
      { label: 'Kontrol Kualitas / QC', icon: 'monitoring', path: 'kontrol-kualitas-qc-chart' },
      { label: 'Jejak Audit', icon: 'history', path: 'jejak-audit' }
    ]
  },
  {
    title: 'Logistics & Admin',
    items: [
      { label: 'Stok Reagen & Kimia', icon: 'inventory_2', path: 'stok-reagen-bahan-kimia' },
      { label: 'Kalibrasi Alat', icon: 'build_circle', path: 'kalibrasi-alat-instrumen' },
      { label: 'Laporan & COA', icon: 'assignment_turned_in', path: 'laporan-sertifikat-coa' },
      { label: 'Pengguna & Klien', icon: 'manage_accounts', path: 'manajemen-pengguna-klien' }
    ]
  }
]

export const pipelineSteps = [
  { no: '01', label: 'Registrasi', icon: 'move_to_inbox', value: 24, unit: 'Sampel', bar: 'w-[65%] bg-primary', iconClass: 'text-on-surface-variant' },
  { no: '02', label: 'Preparasi', icon: 'science', value: 38, unit: 'Sampel', bar: 'w-[80%] bg-[#0284c7]', iconClass: 'text-on-surface-variant' },
  { no: '03', label: 'Pengujian Alat', icon: 'biotech', value: 46, unit: 'Aktif', bar: 'w-[90%] bg-secondary', iconClass: 'text-secondary', valueClass: 'text-secondary' },
  { no: '04', label: 'Validasi Lab', icon: 'fact_check', value: 28, unit: 'Menunggu', bar: 'w-[50%] bg-[#d97706]', iconClass: 'text-[#d97706]', valueClass: 'text-[#d97706]' },
  { no: '05', label: 'Terbit COA', icon: 'verified', value: 12, unit: 'Selesai', bar: 'w-full bg-secondary', iconClass: 'text-secondary', valueClass: 'text-secondary', span: true }
]
