import { useMemo, useState } from 'react'
import { matrixTests } from '../../data/registration'

export default function SectionD({ onCount }) {
  const [sel, setSel] = useState(['kimia', 'glukosa', 'hba1c'])
  const toggle = (id) => setSel((p) => {
    const n = p.includes(id) ? p.filter((x) => x !== id) : [...p, id]
    if (onCount) onCount(n.length)
    return n
  })
  const total = useMemo(() => matrixTests.filter((t) => sel.includes(t.id)).reduce((a, b) => a + b.mins, 0), [sel])
  const hrs = Math.floor(total / 60)
  const mins = total % 60
  return (
    <section className="bg-surface-container-lowest rounded-lg p-space-lg shadow-sm">
      <div className="flex items-center justify-between pb-space-sm mb-space-md">
        <div className="flex items-center gap-space-xs">
          <span className="flex items-center justify-center w-6 h-6 rounded bg-primary-fixed text-on-primary-fixed font-data-mono-sm font-bold">D</span>
          <h2 className="font-headline-md text-headline-md font-semibold">Penugasan Uji &amp; Parameter</h2>
        </div>
        <span className="font-data-mono-sm text-on-surface-variant">{sel.length} DARI {matrixTests.length} DIPILIH</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-space-xs mb-space-md">
        {matrixTests.map((t) => {
          const on = sel.includes(t.id)
          return (
            <label key={t.id} className={`flex items-start gap-2 p-space-sm rounded cursor-pointer ${on ? 'bg-surface-container' : 'bg-surface-container-low hover:bg-surface-container'}`}>
              <input checked={on} onChange={() => toggle(t.id)} className="mt-1 w-4 h-4 accent-primary" type="checkbox" />
              <span className="flex flex-col">
                <span className={`font-body-md ${on ? 'font-semibold' : 'font-medium text-on-surface-variant'}`}>{t.name}</span>
                <span className="font-data-mono-sm text-on-surface-variant">{t.meta}</span>
              </span>
            </label>
          )
        })}
      </div>
      <div className="flex items-center justify-between p-space-sm rounded bg-surface-container-low">
        <span className="flex items-center gap-space-xs">
          <span className="material-symbols-outlined text-secondary text-[20px]">timelapse</span>
          <span className="font-body-sm font-medium">Estimasi Durasi Kerja Analis:</span>
        </span>
        <span className="font-data-mono-md font-bold text-primary">{hrs} Jam {String(mins).padStart(2, '0')} Menit ({sel.length} Parameter Aktif)</span>
      </div>
    </section>
  )
}
