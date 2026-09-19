import { useState } from 'react'

const CATS = ['Fasilitas Kesehatan / RS', 'Rekanan Industri QA/QC', 'Dinas / BPOM / Regulator', 'Rujukan Lab Internal']

export default function SectionB() {
  const [cat, setCat] = useState(CATS[0])
  const [sender, setSender] = useState('RS Siloam Lippo Village - Paviliun Umum')
  const [refNo, setRefNo] = useState('REF-SLM-9920198-PK')
  const [subject, setSubject] = useState('Tn. Hendra Gunawan')
  return (
    <section className="bg-surface-container-lowest rounded-lg p-space-lg shadow-sm">
      <div className="flex items-center justify-between pb-space-sm mb-space-md">
        <div className="flex items-center gap-space-xs">
          <span className="flex items-center justify-center w-6 h-6 rounded bg-primary-fixed text-on-primary-fixed font-data-mono-sm font-bold">B</span>
          <h2 className="font-headline-md text-headline-md font-semibold">Data Asal Pengirim &amp; Klien</h2>
        </div>
        <span className="font-label-caps text-label-caps text-on-surface-variant">FASKES RUJUKAN RESMI</span>
      </div>
      <div className="flex flex-wrap gap-2 mb-space-md p-1 bg-surface-container-low rounded">
        {CATS.map((c) => (
          <button key={c} onClick={() => setCat(c)} type="button"
            className={cat === c ? 'px-3 py-1.5 rounded bg-surface-container-lowest text-primary font-body-sm font-semibold shadow-sm' : 'px-3 py-1.5 rounded text-on-surface-variant hover:text-on-surface font-body-sm font-medium'}>{c}</button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
        <div className="flex flex-col gap-space-xs">
          <label className="font-label-caps text-label-caps text-on-surface-variant uppercase">Instansi Pengirim</label>
          <div className="relative">
            <input value={sender} onChange={(e) => setSender(e.target.value)} className="w-full h-10 px-3 pl-9 rounded bg-surface-container-low font-body-md font-semibold focus:outline-none focus:ring-1 focus:ring-primary" type="text" />
            <span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">local_hospital</span>
          </div>
          <span className="font-data-mono-sm text-on-surface-variant">ID Rekanan: #CLI-SLM-JKT-04</span>
        </div>
        <div className="flex flex-col gap-space-xs">
          <label className="font-label-caps text-label-caps text-on-surface-variant uppercase">No. Rujukan / Surat Pengantar / RM</label>
          <input value={refNo} onChange={(e) => setRefNo(e.target.value)} className="w-full h-10 px-3 rounded bg-surface-container-low font-data-mono-md focus:outline-none focus:ring-1 focus:ring-primary" type="text" />
          <span className="font-body-sm text-secondary">Terautentikasi otomatis via bridging API Siloam</span>
        </div>
        <div className="flex flex-col gap-space-xs">
          <label className="font-label-caps text-label-caps text-on-surface-variant uppercase">Nama Subjek / Pasien / Batch Sample</label>
          <div className="relative">
            <input value={subject} onChange={(e) => setSubject(e.target.value)} className="w-full h-10 px-3 pl-9 rounded bg-surface-container-low font-body-md font-medium focus:outline-none focus:ring-1 focus:ring-primary" type="text" />
            <span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">person</span>
          </div>
          <span className="font-data-mono-sm text-on-surface-variant">NIK/ID: 3174**********02 • Dokter: dr. Randy Sp.PK</span>
        </div>
        <div className="grid grid-cols-2 gap-space-xs">
          <div className="flex flex-col gap-space-xs">
            <label className="font-label-caps text-label-caps text-on-surface-variant uppercase">Waktu Sampling</label>
            <input defaultValue="22/10 08:15 WIB" className="w-full h-10 px-2 rounded bg-surface-container-low font-data-mono-sm" type="text" />
          </div>
          <div className="flex flex-col gap-space-xs">
            <label className="font-label-caps text-label-caps text-on-surface-variant uppercase">Diterima Lab</label>
            <input defaultValue="22/10 09:45 WIB" className="w-full h-10 px-2 rounded bg-surface-container-high font-data-mono-sm font-semibold" type="text" />
          </div>
        </div>
      </div>
    </section>
  )
}
