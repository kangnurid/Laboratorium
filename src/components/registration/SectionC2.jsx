export default function SectionC({ form, onChange }) {
  const labels = ['Tabung Utuh & Tersegel', 'Tidak Ada Kebocoran Fisik', 'Label Barcode Pengirim Klir']
  const keys = ['check_sealed', 'check_leak_free', 'check_label_clear']
  return (
    <section className="bg-surface-container-lowest rounded-lg p-space-lg shadow-sm">
      <div className="flex items-center justify-between pb-space-sm mb-space-md">
        <div className="flex items-center gap-space-xs">
          <span className="flex items-center justify-center w-6 h-6 rounded bg-primary-fixed text-on-primary-fixed font-data-mono-sm font-bold">C</span>
          <h2 className="font-headline-md text-headline-md font-semibold">Verifikasi Kondisi Fisik &amp; Integritas</h2>
        </div>
        <span className="font-data-mono-sm px-2 py-0.5 rounded bg-secondary-fixed-dim text-on-secondary-fixed font-semibold">LULUS UJI INTAKE</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md mb-space-md">
        <div className="p-space-sm rounded bg-surface-container-low flex flex-col gap-1">
          <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Volume Diterima</span>
          <div className="flex items-baseline gap-1">
            <input value={form.volume_ml} onChange={(e) => onChange({ ...form, volume_ml: e.target.value })} className="w-20 h-8 px-2 rounded bg-surface-container-lowest text-primary font-data-mono-lg font-bold" type="text" />
            <span className="font-body-md font-semibold">mL</span>
          </div>
          <span className="font-data-mono-sm text-secondary font-semibold">Cukup (Min: 3.0 mL)</span>
        </div>
        <div className="p-space-sm rounded bg-surface-container-low flex flex-col gap-1">
          <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Suhu IR Intake</span>
          <div className="flex items-baseline gap-1">
            <input value={form.intake_temp_c} onChange={(e) => onChange({ ...form, intake_temp_c: e.target.value })} className="w-20 h-8 px-2 rounded bg-surface-container-lowest text-primary font-data-mono-lg font-bold" type="text" />
            <span className="font-body-md font-semibold">°C</span>
          </div>
          <span className="font-data-mono-sm text-secondary font-semibold">Optimal Cold-Box (2-8°C)</span>
        </div>
        <div className="p-space-sm rounded bg-surface-container-low flex flex-col gap-1">
          <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Penampakan Visual</span>
          <select value={form.visual} onChange={(e) => onChange({ ...form, visual: e.target.value })} className="w-full h-8 px-2 rounded bg-surface-container-lowest font-body-sm font-semibold">
            <option>Jernih (Non-Hemolisis)</option>
            <option>Hemolisis Ringan (+)</option>
            <option>Ikterik Berat</option>
            <option>Lipemik / Keruh</option>
            <option>Terdapat Bekuan Beku</option>
          </select>
          <span className="font-data-mono-sm text-on-surface-variant">Indeks HIL: 0 / 0 / 0</span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-space-sm mb-space-md">
        {labels.map((l, i) => (
          <label key={l} className="flex items-center gap-2 p-2.5 rounded bg-surface-container-low/60 cursor-pointer hover:bg-surface-container-low">
            <input checked={!!form[keys[i]]} onChange={() => onChange({ ...form, [keys[i]]: !form[keys[i]] })} className="w-4 h-4 accent-secondary" type="checkbox" />
            <span className="font-body-sm font-medium">{l}</span>
          </label>
        ))}
      </div>
      <div className="flex flex-col gap-space-xs">
        <label className="font-label-caps text-label-caps text-on-surface-variant uppercase">Catatan Petugas Intake</label>
        <input value={form.intake_note} onChange={(e) => onChange({ ...form, intake_note: e.target.value })} className="w-full h-9 px-3 rounded bg-surface-container-low font-body-sm focus:outline-none focus:ring-1 focus:ring-primary" type="text" />
      </div>
    </section>
  )
}
