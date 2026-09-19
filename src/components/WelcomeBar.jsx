export default function WelcomeBar() {
  return (
    <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-space-md bg-surface-container-lowest p-space-lg rounded shadow-sm">
      <div className="flex flex-col space-y-space-2xs">
        <div className="flex items-center gap-space-sm">
          <span className="inline-flex items-center justify-center p-1.5 rounded bg-secondary-container text-on-secondary-container">
            <span className="material-symbols-outlined text-[20px]">science</span>
          </span>
          <h1 className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight">Selamat Pagi, Dr. Aris!</h1>
          <span className="inline-flex items-center px-space-xs py-0.5 rounded text-data-mono-sm font-data-mono-sm bg-surface-container text-secondary font-semibold">
            KONTROL UTAMA AKTIF
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-space-md text-on-surface-variant font-body-sm text-body-sm">
          <span className="flex items-center gap-space-2xs">
            <span className="material-symbols-outlined text-[16px] text-outline">schedule</span>
            Rabu, 22 Oktober 2025 &bull; 09:42 WIB
          </span>
          <span className="h-3 w-px bg-outline-variant/50"></span>
          <span className="flex items-center gap-space-2xs">
            <span className="material-symbols-outlined text-[16px] text-secondary">badge</span>
            Shift Pagi (08:00 &ndash; 16:00 WIB)
          </span>
          <span className="h-3 w-px bg-outline-variant/50"></span>
          <span className="flex items-center gap-space-2xs">
            <span className="h-1.5 w-1.5 rounded-full bg-secondary"></span>
            Supervisi 14 Analis Terjadwal
          </span>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-space-sm">
        <button className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded bg-surface-container-low text-on-surface hover:bg-surface-container transition-colors shadow-sm font-body-md text-body-md font-medium" type="button">
          <span className="material-symbols-outlined text-[18px] text-on-surface-variant">qr_code_scanner</span>
          <span>Scan Barcode Cepat</span>
          <kbd className="ml-space-2xs px-1 py-0.2 rounded bg-surface-container-high text-on-surface font-data-mono-sm text-data-mono-sm">&#8984;B</kbd>
        </button>
        <button className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded bg-surface-container-low text-on-surface hover:bg-surface-container transition-colors shadow-sm font-body-md text-body-md font-medium" type="button">
          <span className="material-symbols-outlined text-[18px] text-on-surface-variant">file_download</span>
          <span>Export Rekap Harian</span>
        </button>
        <button className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded bg-primary text-on-primary hover:bg-primary-container transition-colors shadow-sm font-body-md text-body-md font-semibold" type="button">
          <span className="material-symbols-outlined text-[18px]">add_box</span>
          <span>+ Registrasi Sampel Baru</span>
        </button>
      </div>
    </div>
  )
}
