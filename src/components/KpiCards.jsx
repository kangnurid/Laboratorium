export default function KpiCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-space-md">
      <div className="bg-surface-container-lowest p-space-md rounded shadow-sm flex flex-col justify-between space-y-space-sm">
        <div className="flex items-start justify-between">
          <div className="flex flex-col">
            <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider font-semibold">Total Sampel Aktif</span>
            <div className="flex items-baseline gap-space-xs mt-space-2xs">
              <span className="font-headline-xl text-headline-xl text-on-surface font-bold tracking-tight">148</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">Batch Berjalan</span>
            </div>
          </div>
          <span className="inline-flex items-center gap-space-2xs px-space-xs py-0.5 rounded-full bg-secondary-container/40 text-on-secondary-container font-data-mono-sm text-data-mono-sm font-semibold">
            <span className="material-symbols-outlined text-[12px]">trending_up</span> +12% mg lalu
          </span>
        </div>
        <div className="space-y-space-2xs">
          <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden flex">
            <div className="bg-[#d97706] h-full" style={{ width: '23%' }}></div>
            <div className="bg-[#0284c7] h-full" style={{ width: '42%' }}></div>
            <div className="bg-secondary h-full" style={{ width: '35%' }}></div>
          </div>
          <div className="flex items-center justify-between text-data-mono-sm font-data-mono-sm text-on-surface-variant">
            <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-[#d97706]"></span>34 Antre</span>
            <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-[#0284c7]"></span>62 Pengujian</span>
            <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-secondary"></span>52 Validasi</span>
          </div>
        </div>
      </div>
      <div className="bg-surface-container-lowest p-space-md rounded shadow-sm flex flex-col justify-between space-y-space-sm">
        <div className="flex items-start justify-between">
          <div className="flex flex-col">
            <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider font-semibold">Rata-rata Waktu TAT</span>
            <div className="flex items-baseline gap-space-xs mt-space-2xs">
              <span className="font-headline-xl text-headline-xl text-on-surface font-bold tracking-tight">26.4</span>
              <span className="font-data-mono-md text-data-mono-md text-on-surface">Jam</span>
            </div>
          </div>
          <span className="inline-flex items-center px-space-xs py-0.5 rounded text-data-mono-sm font-data-mono-sm bg-secondary-container/40 text-on-secondary-container font-semibold">
            TARGET &lt;36 Jam
          </span>
        </div>
        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm">
            <span className="material-symbols-outlined text-[16px] text-secondary">check_circle</span>
            <span>Efisiensi: <strong>+9.6 Jam</strong></span>
          </div>
          <svg className="h-6 w-20 stroke-secondary fill-none" viewBox="0 0 80 24">
            <path d="M 0 18 Q 15 20, 25 12 T 50 10 T 80 4" strokeLinecap="round" strokeWidth="2"></path>
          </svg>
        </div>
      </div>
    </div>
  )
}
