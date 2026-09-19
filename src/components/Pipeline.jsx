import { pipelineSteps } from '../data/navigation'

export default function Pipeline() {
  return (
    <div className="bg-surface-container-lowest p-space-lg rounded shadow-sm space-y-space-md">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <div className="flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-[20px] text-primary">account_tree</span>
            <h2 className="font-headline-md text-headline-md text-on-surface font-semibold">Alur Progres Sampel Hari Ini (Pipeline)</h2>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Pemantauan transit spesimen real-time melintasi seluruh stasiun kerja</p>
        </div>
        <span className="font-data-mono-sm text-data-mono-sm text-on-surface-variant bg-surface-container px-space-sm py-1 rounded">
          Sinkronisasi: 20 detik lalu
        </span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-space-sm">
        {pipelineSteps.map((s) => (
          <div
            key={s.no}
            className={`flex flex-col p-space-sm rounded bg-surface-container-low space-y-space-xs hover:bg-surface-container-high/40 transition-colors ${s.span ? 'col-span-2 md:col-span-1' : ''}`}
          >
            <div className="flex items-center justify-between">
              <span className="font-data-mono-sm text-data-mono-sm text-outline font-bold">{s.no}</span>
              <span className={`material-symbols-outlined text-[16px] ${s.iconClass}`}>{s.icon}</span>
            </div>
            <span className="font-body-sm text-body-sm text-on-surface font-semibold line-clamp-1">{s.label}</span>
            <div className="flex items-baseline justify-between mt-auto">
              <span className={`font-data-mono-lg text-data-mono-lg font-bold ${s.valueClass ?? 'text-primary'}`}>{s.value}</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">{s.unit}</span>
            </div>
            <div className="h-1 w-full bg-surface-container rounded-full overflow-hidden">
              <div className={`h-full ${s.bar}`}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
