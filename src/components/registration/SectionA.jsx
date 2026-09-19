export default function SectionA({ code, onRegen, matrix, onMatrix, prior, onPrior }) {
  return (
    <section className="bg-surface-container-lowest rounded-lg p-space-lg shadow-sm">
      <div className="flex items-center justify-between pb-space-sm mb-space-md">
        <div className="flex items-center gap-space-xs">
          <span className="flex items-center justify-center w-6 h-6 rounded bg-primary-fixed text-on-primary-fixed font-data-mono-sm font-bold">A</span>
          <h2 className="font-headline-md text-headline-md font-semibold">Identifikasi Spesimen &amp; Barcode Gen</h2>
        </div>
        <span className="font-data-mono-sm text-secondary bg-secondary-container/40 px-2 py-0.5 rounded-full font-semibold">AUTO-SYNC LIS</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-space-md items-center">
        <div className="md:col-span-7 flex flex-col gap-space-xs">
          <label className="font-label-caps text-label-caps text-on-surface-variant uppercase">Kode Sampel Terkunci (Unique LIMS UID)</label>
          <div className="flex items-center gap-space-xs">
            <div className="flex-1 flex items-center justify-between px-space-md h-10 rounded bg-surface-container-low font-data-mono-lg font-bold text-primary">
              <span>{code}</span>
              <span className="material-symbols-outlined text-[18px] text-secondary">verified</span>
            </div>
            <button className="p-2 rounded bg-surface-container hover:bg-surface-container-high" title="Salin Kode" type="button"><span className="material-symbols-outlined text-[18px]">content_copy</span></button>
            <button onClick={onRegen} className="p-2 rounded bg-surface-container hover:bg-surface-container-high" title="Regenerasi UID Baru" type="button"><span className="material-symbols-outlined text-[18px]">cached</span></button>
          </div>
          <span className="font-body-sm text-body-sm text-on-surface-variant">Batch prefix: Lab Patologi Klinik • Seri 104x</span>
        </div>
        <div className="md:col-span-5 bg-surface-container-low rounded p-space-sm flex flex-col items-center justify-center">
          <div className="w-full bg-surface-container-lowest p-2 rounded flex flex-col items-center justify-center">
            <svg className="w-full h-8 text-on-surface" fill="currentColor" viewBox="0 0 160 30">
              {Array.from({ length: 24 }).map((_, i) => (<rect key={i} height="30" width={(i % 4) + 1} x={i * 6.5} y="0" />))}
            </svg>
            <span className="font-data-mono-sm text-on-surface font-semibold tracking-widest mt-1">*{code.replace('#', '')}-CLIN*</span>
          </div>
          <span className="text-[10px] text-on-surface-variant uppercase tracking-wider mt-1">Format Code128 + DataMatrix 2D</span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md mt-space-md pt-space-md bg-surface-container-low/40 p-space-md rounded">
        <div className="flex flex-col gap-space-xs">
          <label className="font-label-caps text-label-caps text-on-surface-variant uppercase">Matriks &amp; Tipe Spesimen</label>
          <select value={matrix} onChange={(e) => onMatrix && onMatrix(e.target.value)} className="w-full h-10 px-3 rounded bg-surface-container-lowest font-body-md focus:outline-none focus:ring-1 focus:ring-primary">
            {['Darah Vena EDTA (Tutup Ungu K2EDTA)', 'Plasma Heparin (Tutup Hijau Lithium Heparin)', 'Serum Clot Activator (Tutup Merah)', 'Swab Nasofaring (VTM - Viral Media)', 'Air Limbah Industri Effluent', 'Ekstrak Herbal / Pangan Olahan', 'Urin Tampung 24 Jam'].map((m) => (<option key={m}>{m}</option>))}
          </select>
          <div className="flex flex-wrap gap-1 mt-1">
            <span className="font-data-mono-sm px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-semibold">EDTA-K2 3.0 mL</span>
            <span className="font-data-mono-sm px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant">Inversi 8-10x</span>
          </div>
        </div>
        <div className="flex flex-col gap-space-xs">
          <label className="font-label-caps text-label-caps text-on-surface-variant uppercase">Tingkat Prioritas / Cito SLA</label>
          <div className="grid grid-cols-3 gap-1 bg-surface-container-lowest p-1 rounded">
            {[{ id: 'rutin', name: 'Rutin', meta: 'SLA 24 Jam' }, { id: 'cito', name: 'Cito!', meta: '≤ 2 Jam', dot: true }, { id: 'investigasi', name: 'Investigasi', meta: 'Audit/R&D' }].map((p) => (
              <button key={p.id} onClick={() => onPrior(p.id)} type="button"
                className={prior === p.id ? 'py-1.5 px-2 rounded bg-primary text-on-primary font-body-sm font-semibold flex flex-col items-center' : 'py-1.5 px-2 rounded hover:bg-surface-container font-body-sm font-medium flex flex-col items-center text-on-surface-variant'}>
                <span className="flex items-center gap-1">{p.dot && <span className="w-2 h-2 rounded-full bg-error"></span>}{p.name}</span>
                <span className="font-data-mono-sm text-[10px]">{p.meta}</span>
              </button>
            ))}
          </div>
          <span className="font-body-sm text-secondary flex items-center gap-1 mt-1 font-medium">
            <span className="material-symbols-outlined text-[14px]">schedule</span> Estimasi selesai: Besok, 23 Okt 2025 pukul 10:00 WIB
          </span>
        </div>
      </div>
    </section>
  )
}
