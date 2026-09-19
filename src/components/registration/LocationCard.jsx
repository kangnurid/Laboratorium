export default function LocationCard({ cell }) {
  const col = cell ? cell.col : '07'
  const row = cell ? cell.row : 'E'
  return (
    <div className="bg-surface-container-lowest rounded-lg p-space-lg shadow-sm">
      <div className="flex items-center justify-between mb-space-sm">
        <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Lokasi Cold-Chain Terkunci</span>
        <span className="font-data-mono-sm px-2 py-0.5 rounded bg-secondary-container/40 text-on-secondary-container font-semibold">VALIDASI RUANG OK</span>
      </div>
      <div className="p-space-md rounded bg-surface-container-low mb-space-md flex flex-col gap-space-xs">
        <div className="flex items-center gap-space-xs font-data-mono-md font-bold text-primary flex-wrap">
          <span className="px-2 py-1 rounded bg-surface-container-lowest shadow-sm">CHILLER-B1</span>
          <span className="text-on-surface-variant">&gt;</span>
          <span className="px-2 py-1 rounded bg-surface-container-lowest shadow-sm">TRAY-04</span>
          <span className="text-on-surface-variant">&gt;</span>
          <span className="px-2 py-1 rounded bg-surface-container-lowest shadow-sm">BARIS {row}</span>
          <span className="text-on-surface-variant">&gt;</span>
          <span className="px-2.5 py-1 rounded bg-secondary text-on-secondary shadow-sm">KOLOM {col}</span>
        </div>
        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Posisi terdekat dari akses pintu tengah Chiller B1. Sesuai matriks stabilitas Darah EDTA (≤48 jam pada 2-8°C).</p>
      </div>
      <div className="flex items-center justify-between p-space-sm rounded bg-surface-container mb-space-md">
        <div className="flex flex-col">
          <span className="text-[10px] text-on-surface-variant uppercase">Barcode Verifikasi Posisi Rak</span>
          <span className="font-data-mono-md font-bold text-primary tracking-wider">LOC-CHB1-T04-{row}{col}</span>
        </div>
        <div className="flex items-center gap-space-xs">
          <svg className="w-8 h-8 text-on-surface" fill="currentColor" viewBox="0 0 24 24">
            <path d="M2 2h8v8H2V2zm2 2v4h4V4H4zm10-2h8v8h-8V2zm2 2v4h4V4h-4zM2 14h8v8H2v-8zm2 2v4h4v-4H4zm14-2h4v2h-4v-2zm-4 0h2v4h-2v-4zm2 4h4v4h-4v-4zm-2 2h2v2h-2v-2z"></path>
          </svg>
          <button className="p-2 rounded bg-surface-container-lowest hover:bg-surface-container-high" title="Cetak Barcode Rak" type="button">
            <span className="material-symbols-outlined text-[18px]">print</span>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-space-sm">
        <button className="py-2.5 px-3 rounded bg-surface-container hover:bg-surface-container-high font-body-sm font-semibold flex items-center justify-center gap-1" type="button">
          <span className="material-symbols-outlined text-[16px]">lock</span><span>Kunci Alokasi Posisi</span>
        </button>
        <button className="py-2.5 px-3 rounded bg-secondary-fixed hover:bg-secondary-fixed-dim text-on-secondary-fixed font-body-sm font-semibold flex items-center justify-center gap-1" type="button">
          <span className="material-symbols-outlined text-[16px]">magic_button</span><span>Rekomendasi Ulang</span>
        </button>
      </div>
    </div>
  )
}
