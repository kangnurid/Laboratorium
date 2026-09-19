export default function RegSummary({ code, testCount, cell }) {
  const col = cell ? cell.col : '07'
  return (
    <div className="fixed bottom-0 left-72 right-0 bg-surface-container-lowest/95 backdrop-blur-md shadow-[0_-4px_20px_rgba(0,0,0,0.06)] z-40 px-gutter-lg py-space-sm">
      <div className="flex flex-col md:flex-row items-center justify-between gap-space-md max-w-full mx-auto">
        <div className="flex items-center gap-space-md">
          <div className="w-10 h-10 rounded bg-secondary-container flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-on-secondary-container text-[24px]">biotech</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-space-xs">
              <span className="font-body-md font-bold">{code}</span>
              <span className="font-data-mono-sm px-2 py-0.5 rounded bg-surface-container font-medium">Darah Vena EDTA</span>
              <span className="font-data-mono-sm px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed font-semibold">Chiller B1 [E-{col}] • {testCount} Uji</span>
            </div>
            <span className="font-body-sm text-on-surface-variant">Tn. Hendra Gunawan • Klien: RS Siloam • SLA: 23 Okt 2025, 10:00 WIB</span>
          </div>
        </div>
        <div className="flex items-center gap-space-xs shrink-0">
          <button className="px-3.5 py-2 rounded bg-surface-container font-body-md font-medium hover:bg-surface-container-high" type="button">Simpan Draft Sementara</button>
          <button className="px-3.5 py-2 rounded bg-surface-container font-body-md font-medium hover:bg-surface-container-high flex items-center gap-1.5" type="button">
            <span className="material-symbols-outlined text-[18px]">receipt_long</span><span>Cetak Bukti Tanda Terima</span>
          </button>
          <button className="px-5 py-2 rounded bg-primary text-on-primary font-body-md font-bold hover:bg-primary-container shadow-md flex items-center gap-2" type="button">
            <span className="material-symbols-outlined text-[18px] text-secondary">input</span><span>Daftarkan &amp; Masukkan Antrean Analis</span>
          </button>
        </div>
      </div>
    </div>
  )
}
