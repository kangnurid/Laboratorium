export default function RegHeader() {
  return (
    <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-space-md mb-space-lg">
      <div className="flex flex-col gap-space-2xs">
        <div className="flex items-center gap-space-xs font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">
          <a className="hover:text-primary" href="#/dashboard-utama">Overview &amp; Intake</a>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <span className="text-secondary font-bold">Registrasi Sampel</span>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <span className="font-data-mono-sm px-1.5 py-0.5 rounded bg-surface-container text-on-surface font-semibold">ISO/IEC 17025 VERIFIED</span>
        </div>
        <h1 className="font-headline-xl text-headline-xl text-primary tracking-tight font-bold">Registrasi Spesimen Baru &amp; Alokasi Penyimpanan</h1>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl">Penerimaan spesimen digital seketika, validasi integritas biologis, cetak label barcode cryo-grade, dan penetapan kompartemen cold-chain presisi IoT.</p>
      </div>
      <div className="flex flex-wrap items-center gap-space-xs shrink-0">
        <button className="inline-flex items-center gap-space-xs px-3 py-2 rounded bg-surface-container-lowest text-on-surface font-body-md font-medium shadow-sm hover:bg-surface-container" type="button">
          <span className="material-symbols-outlined text-[18px] text-secondary">document_scanner</span>
          <span>Scan Dokumen <span className="font-data-mono-sm text-on-surface-variant opacity-70">(Alt+S)</span></span>
        </button>
        <button className="inline-flex items-center gap-space-xs px-3 py-2 rounded bg-surface-container-lowest text-on-surface font-body-md font-medium shadow-sm hover:bg-surface-container" type="button">
          <span className="material-symbols-outlined text-[18px]">upload_file</span><span>Import Manifest</span>
        </button>
        <button className="inline-flex items-center gap-space-xs px-3 py-2 rounded bg-surface-container-lowest text-error font-body-md font-medium shadow-sm hover:bg-error-container hover:text-on-error-container" type="button">
          <span className="material-symbols-outlined text-[18px]">restart_alt</span><span>Reset</span>
        </button>
        <button className="inline-flex items-center gap-space-xs px-4 py-2 rounded bg-primary text-on-primary font-body-md font-semibold shadow-md hover:bg-primary-container" type="button">
          <span className="material-symbols-outlined text-[18px]">print</span><span>Simpan &amp; Cetak Barcode</span>
        </button>
      </div>
    </div>
  )
}
