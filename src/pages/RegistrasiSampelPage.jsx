import { useState } from 'react'
import RegHeader from '../components/registration/RegHeader.jsx'
import SectionA from '../components/registration/SectionA.jsx'
import SectionB from '../components/registration/SectionB.jsx'
import SectionC from '../components/registration/SectionC.jsx'
import SectionD from '../components/registration/SectionD.jsx'
import StorageUnits from '../components/registration/StorageUnits.jsx'
import RackMatrix from '../components/registration/RackMatrix.jsx'
import LocationCard from '../components/registration/LocationCard.jsx'
import RegSummary from '../components/registration/RegSummary.jsx'
import { TARGET_CELL } from '../data/registration'

export default function RegistrasiSampelPage() {
  const [code, setCode] = useState('#SMP-2025-1043')
  const [tests, setTests] = useState(3)
  const [unit, setUnit] = useState('chiller-b1')
  const [cell, setCell] = useState(TARGET_CELL)
  const regen = () => {
    const n = 1043 + Math.floor(Math.random() * 40) + 1
    setCode(`#SMP-2025-${n}`)
  }
  return (
    <div className="pb-24">
      <RegHeader />
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg items-start">
        <div className="xl:col-span-7 flex flex-col gap-space-lg">
          <SectionA code={code} onRegen={regen} />
          <SectionB />
          <SectionC />
          <SectionD onCount={setTests} />
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
      <RegSummary code={code} testCount={tests} cell={cell} />
    </div>
  )
}
