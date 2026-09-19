import { COLS, ROWS, TARGET_CELL, cellKey, getCellState } from '../../data/registration'

function cls(state, selected) {
  if (state === 'target' || selected) return 'h-6 rounded bg-secondary text-on-secondary flex items-center justify-center text-[10px] font-bold animate-pulse cursor-pointer'
  if (state === 'cito') return 'h-6 rounded bg-error text-on-error flex items-center justify-center text-[10px] cursor-pointer'
  if (state === 'filled') return 'h-6 rounded bg-primary text-on-primary flex items-center justify-center text-[10px]'
  return 'h-6 rounded bg-surface-container-lowest hover:bg-secondary-fixed/50 cursor-pointer flex items-center justify-center text-[10px]'
}

export default function RackMatrix({ value, onPick }) {
  return (
    <div className="bg-surface-container-low rounded-lg p-space-md">
      <div className="grid grid-cols-11 gap-1 text-center text-[10px] font-bold text-on-surface-variant mb-1">
        <span className="text-on-surface-variant/40">#</span>
        {COLS.map((c) => (<span key={c}>{c}</span>))}
      </div>
      {ROWS.map((r) => (
        <div key={r} className="grid grid-cols-11 gap-1 text-center items-center mb-1">
          <span className={`font-data-mono-sm font-bold ${r === TARGET_CELL.row ? 'text-secondary' : 'text-on-surface-variant'}`}>{r}</span>
          {COLS.map((c) => {
            const key = cellKey(r, c)
            const state = getCellState(r, c)
            const selected = value && value.row === r && value.col === c
            const label = state === 'cito' ? '!' : state === 'filled' ? '•' : state === 'target' ? 'E7' : ''
            return (
              <div key={key} title={key} onClick={() => state !== 'filled' && state !== 'cito' && onPick && onPick({ row: r, col: c })}
                className={cls(state, selected)}>{label}</div>
            )
          })}
        </div>
      ))}
      <div className="flex flex-wrap items-center justify-between gap-space-xs mt-space-md pt-space-xs">
        <span className="flex items-center gap-1.5 font-data-mono-sm text-on-surface-variant"><span className="w-3 h-3 rounded bg-surface-container-lowest shadow-sm"></span>Kosong (28)</span>
        <span className="flex items-center gap-1.5 font-data-mono-sm text-on-surface-variant"><span className="w-3 h-3 rounded bg-primary"></span>Terisi (67)</span>
        <span className="flex items-center gap-1.5 font-data-mono-sm text-error font-semibold"><span className="w-3 h-3 rounded bg-error"></span>Cito (4)</span>
        <span className="flex items-center gap-1.5 font-data-mono-sm text-secondary font-bold"><span className="w-3 h-3 rounded bg-secondary animate-pulse"></span>Target: E-07</span>
      </div>
    </div>
  )
}
