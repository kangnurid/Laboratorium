import { useState } from 'react'
import { storageUnits } from '../../data/registration'

export default function StorageUnits({ unit, onUnit }) {
  const [active, setActive] = useState(unit || 'chiller-b1')
  const pick = (id) => { setActive(id); if (onUnit) onUnit(id) }
  return (
    <div className="grid grid-cols-2 gap-space-xs mb-space-md">
      {storageUnits.map((u) => {
        const on = active === u.id
        return (
          <button key={u.id} onClick={() => pick(u.id)} type="button"
            className={on ? 'flex flex-col p-2.5 rounded bg-primary text-on-primary text-left shadow-sm' : 'flex flex-col p-2.5 rounded bg-surface-container-low hover:bg-surface-container text-left'}>
            <span className="flex items-center justify-between w-full">
              <span className={`font-body-md leading-tight ${on ? 'font-bold' : 'font-semibold text-on-surface-variant'}`}>{u.name}</span>
              <span className={`font-data-mono-sm font-bold ${on ? 'text-secondary-fixed' : 'text-on-surface-variant'}`}>{u.temp}</span>
            </span>
            <span className={`font-data-mono-sm text-[11px] ${on ? 'text-on-primary-container' : 'text-on-surface-variant'}`}>{u.desc}</span>
          </button>
        )
      })}
    </div>
  )
}
