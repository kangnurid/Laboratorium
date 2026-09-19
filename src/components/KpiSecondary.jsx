export default function KpiSecondary() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-space-md">
      <div className="bg-surface-container-lowest p-space-md rounded shadow-sm flex flex-col justify-between space-y-space-sm md:col-span-1 xl:col-span-2">
        <div className="flex items-start justify-between">
          <div className="flex flex-col">
            <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider font-semibold">Akurasi Validasi QC</span>
            <div className="flex items-baseline gap-space-xs mt-space-2xs">
              <span className="font-headline-xl text-headline-xl text-on-surface font-bold tracking-tight">99.2%</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">Batch Lulus</span>
            </div>
          </div>
          <span className="inline-flex items-center px-space-xs py-0.5 rounded text-data-mono-sm font-data-mono-sm bg-surface-container text-on-surface-variant font-semibold">ISO 17025</span>
        </div>
        <div className="flex items-center gap-space-xs bg-surface-container-low px-space-sm py-1 rounded">
          <span className="material-symbols-outlined text-[16px] text-[#d97706]">warning</span>
          <span className="font-body-sm text-body-sm text-on-surface truncate">1 Instrumen HPLC minta re-kalibrasi</span>
        </div>
      </div>
      <div className="bg-surface-container-lowest p-space-md rounded shadow-sm flex flex-col justify-between space-y-space-sm md:col-span-1 xl:col-span-2">
        <div className="flex items-start justify-between">
          <div className="flex flex-col">
            <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider font-semibold">Peringatan Lab</span>
            <div className="flex items-baseline gap-space-xs mt-space-2xs">
              <span className="font-headline-xl text-headline-xl text-error font-bold tracking-tight">4</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">Isu Perhatian</span>
            </div>
          </div>
          <span className="inline-flex items-center gap-space-2xs px-space-xs py-0.5 rounded-full bg-error-container text-on-error-container font-data-mono-sm text-data-mono-sm font-semibold">
            <span className="h-1.5 w-1.5 rounded-full bg-error animate-ping"></span> URGENT
          </span>
        </div>
        <div className="flex items-center justify-between text-body-sm font-body-sm text-on-surface-variant pt-1">
          <span>2 Reagen Kritis</span><span className="text-outline">&bull;</span><span>1 Overdue</span><span className="text-outline">&bull;</span><span>1 Deviasi Suhu</span>
        </div>
      </div>
    </div>
  )
}
