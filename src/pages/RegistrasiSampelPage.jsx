import { useState } from 'react'
import RegHeader from '../components/registration/RegHeader.jsx'
import SectionA from '../components/registration/SectionA.jsx'
import SectionB from '../components/registration/SectionB.jsx'
import SectionC2 from '../components/registration/SectionC2.jsx'
import SectionD2 from '../components/registration/SectionD2.jsx'
import StorageUnits from '../components/registration/StorageUnits.jsx'
import RackMatrix from '../components/registration/RackMatrix.jsx'
import LocationCard from '../components/registration/LocationCard.jsx'
import RegSummary from '../components/registration/RegSummary.jsx'
import SampleList from '../components/registration/SampleList.jsx'
import { TARGET_CELL } from '../data/registration'
import { createSample } from '../lib/samplesApi'

function nextCode() {
  const n = 1043 + Math.floor(Math.random() * 900)
  return `#SMP-2025-${n}`
}

const INIT_SENDER = {
  client_category: 'Fasilitas Kesehatan / RS',
  sender: 'RS Siloam Lippo Village - Paviliun Umum',
  ref_no: 'REF-SLM-9920198-PK',
  subject: 'Tn. Hendra Gunawan',
  sampling_time: '22/10 08:15 WIB',
  received_time: '22/10 09:45 WIB'
}

const INIT_COND = {
  volume_ml: '4.5',
  intake_temp_c: '3.8',
  visual: 'Jernih (Non-Hemolisis)',
  check_sealed: true,
  check_leak_free: true,
  check_label_clear: true,
  intake_note: 'Spesimen diantar kurir medik khusus RS Siloam dalam coolbox bersegel QC.'
}

export default function RegistrasiSampelPage() {
  const [code, setCode] = useState('#SMP-2025-1043')
  const [matrix, setMatrix] = useState('Darah Vena EDTA (Tutup Ungu K2EDTA)')
  const [prior, setPrior] = useState('rutin')
  const [senderForm, setSenderForm] = useState(INIT_SENDER)
  const [condition, setCondition] = useState(INIT_COND)
  const [tests, setTests] = useState(['kimia', 'glukosa', 'hba1c'])
  const [unit, setUnit] = useState('chiller-b1')
  const [cell, setCell] = useState(TARGET_CELL)
  const [saving, setSaving] = useState(false)
  const [savedMsg, setSavedMsg] = useState('')
  const [saveError, setSaveError] = useState('')
  const [refreshKey, setRefreshKey] = useState(0)
  const [highlightId, setHighlightId] = useState(null)

  const toggleTest = (id) => setTests((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]))

  async function handleSave(status) {
    if (tests.length === 0) {
      setSaveError('Pilih minimal 1 parameter uji.')
      return
    }
    setSaving(true)
    setSavedMsg('')
    setSaveError('')
    try {
      const payload = {
        code, matrix, priority: prior,
        client_category: senderForm.client_category,
        sender: senderForm.sender,
        ref_no: senderForm.ref_no,
        subject: senderForm.subject,
        sampling_time: senderForm.sampling_time,
        received_time: senderForm.received_time,
        volume_ml: condition.volume_ml === '' ? null : Number(String(condition.volume_ml).replace(',', '.')),
        intake_temp_c: condition.intake_temp_c === '' ? null : Number(String(condition.intake_temp_c).replace(',', '.')),
        visual: condition.visual,
        check_sealed: !!condition.check_sealed,
        check_leak_free: !!condition.check_leak_free,
        check_label_clear: !!condition.check_label_clear,
        intake_note: condition.intake_note,
        tests, storage_unit: unit,
        rack_row: cell.row, rack_col: cell.col,
        status
      }
      const res = await createSample(payload)
      setHighlightId(res.data.id)
      setRefreshKey((k) => k + 1)
      setSavedMsg(`Tersimpan ${res.demo ? '(demo lokal)' : '(Supabase)'}: ${res.data.code}`)
      setCode(nextCode())
    } catch (e) {
      setSaveError(e.message || 'Gagal menyimpan')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="pb-24">
      <RegHeader />
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg items-start">
        <div className="xl:col-span-7 flex flex-col gap-space-lg">
          <SectionA code={code} onRegen={() => setCode(nextCode())} matrix={matrix} onMatrix={setMatrix} prior={prior} onPrior={setPrior} />
          <SectionB form={senderForm} onChange={setSenderForm} />
          <SectionC2 form={condition} onChange={setCondition} />
          <SectionD2 selected={tests} onToggle={toggleTest} />
          <SampleList refreshKey={refreshKey} highlightId={highlightId} onDeleted={() => setRefreshKey((k) => k + 1)} />
        </div>
        <div className="xl:col-span-5 flex flex-col gap-space-lg">
          <div className="bg-surface-container-lowest rounded-lg p-space-lg shadow-sm">
            <div className="flex items-center justify-between pb-space-xs mb-space-md">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-secondary text-[22px]">ac_unit</span>
                <h2 className="font-headline-md text-headline-md font-semibold">Matriks Kompartemen Rak</h2>
              </div>
              <span className="font-data-mono-sm px-2 py-0.5 rounded bg-surface-container text-primary font-semibold">TRAY 04 : 100 SLOTS</span>
            </div>
            <StorageUnits unit={unit} onUnit={setUnit} />
            <div className="p-space-sm rounded bg-surface-container flex items-center justify-between mb-space-md">
              <div className="flex items-center gap-space-xs">
                <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse"></span>
                <span className="font-body-sm font-semibold">Chiller B1 Sensor IoT #SENS-CH-04</span>
              </div>
              <span className="font-data-mono-sm text-secondary font-bold">72 / 100 Slot Digunakan</span>
            </div>
            <RackMatrix value={cell} onPick={setCell} />
          </div>
          <LocationCard cell={cell} />
        </div>
      </div>
      <RegSummary
        code={code}
        testCount={tests.length}
        cell={cell}
        subject={senderForm.subject}
        sender={senderForm.sender}
        saving={saving}
        savedMsg={savedMsg}
        saveError={saveError}
        onSave={() => handleSave('registered')}
        onDraft={() => handleSave('draft')}
      />
    </div>
  )
}
