import { instruments, reagents, auditFeeds } from '../data/operations'

export default function RightPanel() {
  return (
    <div className="xl:col-span-4 space-y-space-lg flex flex-col">
      <div className="bg-surface-container-lowest p-space-lg rounded shadow-sm space-y-space-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-[20px] text-primary">precision_manufacturing</span>
            <h2 className="font-headline-md text-headline-md text-on-surface font-semibold">Telemetri Instrumen Lab</h2>
          </div>
          <span className="h-2 w-2 rounded-full bg-secondary"></span>
        </div>
        <div className="space-y-space-xs">
          {instruments.map((i) => (
            <div key={i.name} className="p-space-sm rounded bg-surface-container-low hover:bg-surface-container flex items-center justify-between">
              <div className="flex flex-col space-y-0.5">
                <span className="font-body-md text-body-md font-semibold text-on-surface">{i.name}</span>
                <span className={`font-data-mono-sm text-data-mono-sm ${i.descClass}`}>{i.desc}</span>
              </div>
              <span className={`inline-flex items-center gap-1 px-space-xs py-0.5 rounded text-data-mono-sm font-data-mono-sm font-semibold ${i.statusClass}`}>
                {i.dotClass && <span className={`h-1.5 w-1.5 rounded-full ${i.dotClass}`}></span>}{i.status}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-surface-container-lowest p-space-lg rounded shadow-sm space-y-space-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-[20px] text-error">inventory_2</span>
            <h2 className="font-headline-md text-headline-md text-on-surface font-semibold">Stok Kritis Reagen</h2>
          </div>
          <span className="font-data-mono-sm text-error font-semibold bg-error-container px-space-xs py-0.5 rounded">2 Kritis</span>
        </div>
        <div className="space-y-space-xs">
          {reagents.map((g) => (
            <div key={g.name} className="p-space-sm rounded bg-surface-container-low space-y-space-2xs">
              <div className="flex items-center justify-between">
                <span className="font-body-sm text-body-sm font-semibold text-on-surface">{g.name}</span>
                <span className={`font-data-mono-sm text-data-mono-sm font-bold ${g.remainClass}`}>{g.remain}</span>
              </div>
              <div className="h-1.5 w-full bg-surface-container rounded-full overflow-hidden">
                <div className={`h-full ${g.bar}`}></div>
              </div>
              <div className="flex items-center justify-between text-data-mono-sm font-data-mono-sm text-on-surface-variant">
                <span>{g.left}</span><span className={g.rightClass}>{g.right}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-surface-container-lowest p-space-lg rounded shadow-sm space-y-space-md flex-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-[20px] text-primary">history</span>
            <h2 className="font-headline-md text-headline-md text-on-surface font-semibold">Jejak Audit Real-time</h2>
          </div>
          <span className="font-data-mono-sm text-on-surface-variant">CFR 21 Part 11</span>
        </div>
        <div className="relative pl-space-md space-y-space-md before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-surface-container-highest">
          {auditFeeds.map((f) => (
            <div key={f.title} className="relative space-y-0.5">
              <span className={`absolute -left-[1.375rem] top-1 h-2.5 w-2.5 rounded-full ${f.dot}`}></span>
              <div className="flex items-center justify-between">
                <span className="font-body-sm text-body-sm font-semibold text-on-surface">{f.title}</span>
                <span className="font-data-mono-sm text-on-surface-variant">{f.time}</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                <strong className="text-on-surface">{f.user}</strong> {f.text} {f.code && <code className="font-data-mono-sm bg-surface-container px-1 rounded text-primary">{f.code}</code>}
              </p>
            </div>
          ))}
        </div>
        <div className="pt-space-xs">
          <a className="block text-center font-data-mono-sm text-secondary hover:underline font-semibold py-1" href="#" onClick={(e) => e.preventDefault()}>Buka Log Keamanan Lengkap</a>
        </div>
      </div>
    </div>
  )
}
