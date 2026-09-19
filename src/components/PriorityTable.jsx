export default function PriorityTable({ rows }) {
  return (
    <div className="bg-surface-container-lowest rounded shadow-sm overflow-hidden flex flex-col flex-1">
      <div className="p-space-md flex flex-wrap items-center justify-between gap-space-sm bg-surface-container-low/60">
        <div className="flex items-center gap-space-sm">
          <span className="h-2.5 w-2.5 rounded-full bg-error animate-pulse"></span>
          <div>
            <h2 className="font-headline-md text-headline-md text-on-surface font-semibold">Sampel Prioritas</h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant">TAT kritis di bawah 6 jam</p>
          </div>
        </div>
        <div className="flex items-center gap-space-xs">
          <span className="font-data-mono-sm text-on-error-container bg-error-container px-space-sm py-1 rounded font-bold">{rows.length} Butuh Aksi</span>
          <button className="p-1 rounded text-on-surface-variant hover:bg-surface-container" type="button">
            <span className="material-symbols-outlined text-[18px]">filter_list</span>
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-container-low font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">
              <th className="py-space-sm px-space-md">Kode</th>
              <th className="py-space-sm px-space-md">Matriks / Klien</th>
              <th className="py-space-sm px-space-md">Parameter</th>
              <th className="py-space-sm px-space-md">Simpan</th>
              <th className="py-space-sm px-space-md text-right">TAT</th>
              <th className="py-space-sm px-space-md">Analis</th>
              <th className="py-space-sm px-space-md text-center">Aksi</th>
            </tr>
          </thead>
          <tbody className="text-body-sm font-body-sm">
            {rows.map((r) => (
              <tr key={r.code} className="hover:bg-surface-container-low">
                <td className="py-space-sm px-space-md whitespace-nowrap">
                  <div className="flex items-center gap-space-xs">
                    <span className={`material-symbols-outlined text-[16px] ${r.iconClass}`}>{r.icon}</span>
                    <span className="font-data-mono-md font-semibold text-primary">{r.code}</span>
                  </div>
                  <span className={`font-data-mono-sm block mt-0.5 ${r.tagClass}`}>{r.tag}</span>
                </td>
                <td className="py-space-sm px-space-md">
                  <div className="font-semibold text-on-surface">{r.matrix}</div>
                  <div className="text-on-surface-variant">{r.client}</div>
                </td>
                <td className="py-space-sm px-space-md"><span className="px-space-xs py-0.5 rounded bg-surface-container text-on-surface">{r.param}</span></td>
                <td className="py-space-sm px-space-md whitespace-nowrap">
                  <div className="inline-flex rounded overflow-hidden">
                    <span className="px-1.5 py-0.5 bg-primary text-[#38BDF8] font-data-mono-sm">{r.storageA}</span>
                    <span className="px-1.5 py-0.5 bg-surface-container font-data-mono-sm">{r.storageB}</span>
                  </div>
                </td>
                <td className="py-space-sm px-space-md text-right whitespace-nowrap">
                  <span className={`inline-flex items-center gap-1 font-data-mono-sm font-bold px-space-xs py-0.5 rounded ${r.tatClass}`}>
                    <span className="material-symbols-outlined text-[14px]">timer</span>{r.tat}
                  </span>
                </td>
                <td className="py-space-sm px-space-md whitespace-nowrap">
                  <div className="flex items-center gap-space-xs">
                    <div className={`h-6 w-6 rounded-full flex items-center justify-center text-data-mono-sm font-bold ${r.avatarClass}`}>{r.initials}</div>
                    <span className="font-medium">{r.analyst}</span>
                  </div>
                </td>
                <td className="py-space-sm px-space-md text-center">
                  <button className="p-1 rounded hover:bg-surface-container text-primary" type="button"><span className="material-symbols-outlined text-[18px]">chevron_right</span></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-space-sm bg-surface-container-low/40 flex items-center justify-between font-data-mono-sm text-on-surface-variant">
        <span>Menampilkan {rows.length} dari 148 aktif</span>
        <a className="inline-flex items-center gap-1 text-secondary font-semibold hover:underline" href="#" onClick={(e) => e.preventDefault()}>Lihat Antrean <span className="material-symbols-outlined text-[14px]">arrow_forward</span></a>
      </div>
    </div>
  )
}
