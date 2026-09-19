export default function Header({ query, onQuery }) {
  return (
    <header className="fixed top-0 left-72 right-0 h-16 bg-surface-container-lowest/90 backdrop-blur-md border-b border-outline-variant/25 z-40 px-gutter-lg flex items-center justify-between">
      <div className="flex items-center gap-space-lg flex-1 max-w-2xl">
        <div className="relative w-full">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">search</span>
          <input
            value={query}
            onChange={(e) => onQuery(e.target.value)}
            className="w-full h-9 pl-9 pr-20 bg-surface-container-lowest border border-outline-variant rounded font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/60 focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder="Cari sampel (#SMP-...), barcode, nama klien, atau tes..."
            type="text"
          />
          <div className="absolute right-2.5 top-1/2 -translate-y-1/2 flex items-center gap-space-2xs text-on-surface-variant">
            <span className="material-symbols-outlined text-[16px]">barcode_scanner</span>
            <span className="font-data-mono-sm text-data-mono-sm px-1 py-0.5 rounded bg-surface-container text-on-surface-variant border border-outline-variant/30">&#8984;K</span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-space-md shrink-0">
        <div className="hidden xl:flex items-center gap-space-xs px-space-md py-1 rounded-full bg-surface-container border border-outline-variant/30">
          <span className="h-2 w-2 rounded-full bg-secondary animate-pulse"></span>
          <span className="font-data-mono-sm text-data-mono-sm text-on-surface font-medium">
            Lab Suhu: 20.4&deg;C &bull; Kelembapan: 48% <span className="text-secondary font-semibold">(Optimal)</span>
          </span>
        </div>
        <button className="relative p-space-xs rounded hover:bg-surface-container transition-colors text-on-surface-variant hover:text-on-surface" type="button">
          <span className="material-symbols-outlined text-[22px]">notifications</span>
          <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-error text-on-error font-data-mono-sm text-[10px] font-bold ring-2 ring-surface-container-lowest">3</span>
        </button>
        <div className="h-6 w-px bg-outline-variant/40"></div>
        <div className="flex items-center gap-space-md pl-space-xs">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
          </div>
          <div className="hidden md:flex flex-col text-left">
            <div className="flex items-center gap-space-xs">
              <span className="font-body-md text-body-md font-semibold text-on-surface leading-tight">Dr. Aris Setiawan, M.Si</span>
              <span className="material-symbols-outlined text-[16px] text-on-surface-variant">expand_more</span>
            </div>
            <span className="font-data-mono-sm text-data-mono-sm text-on-surface-variant">Kepala Laboratorium</span>
          </div>
        </div>
      </div>
    </header>
  )
}
