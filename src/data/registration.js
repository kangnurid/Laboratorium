export const storageUnits = [
  { id: 'chiller-b1', name: 'Chiller B1', temp: '4.1°C', desc: '2°C - 8°C • 64% Terisi' },
  { id: 'cryo-80', name: 'Cryo Ultra -80°', temp: '-78.9°C', desc: 'Bio-Arsip • 82% Terisi' },
  { id: 'inkubator-37', name: 'Inkubator 37°', temp: '36.8°C', desc: 'Kultur Mikrobiologi' },
  { id: 'arsip-room', name: 'Arsip Suhu Kamar', temp: '21.5°C', desc: 'Histologi Blok Parafin' }
]

export const matrixTests = [
  { id: 'kimia', name: 'Panel Kimia Lengkap', meta: 'SOP-PK-002 • 1.5 Jam', mins: 90 },
  { id: 'glukosa', name: 'Glukosa Darah Puasa', meta: 'Hexokinase • 30 Mnt', mins: 30 },
  { id: 'hba1c', name: 'HbA1c (HPLC)', meta: 'SOP-BIO-109 • 1.0 Jam', mins: 60 },
  { id: 'lipid', name: 'Profil Lipid Lengkap', meta: 'Kolest, HDL, LDL, TG', mins: 60 },
  { id: 'elektrolit', name: 'Elektrolit Serum (ISE)', meta: 'Na+, K+, Cl-', mins: 45 },
  { id: 'ginjal', name: 'Fungsi Ginjal (Ureum/Creat)', meta: 'Jaffe Kinetic', mins: 45 }
]

export const ROWS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
export const COLS = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10']

export const TARGET_CELL = { row: 'E', col: '07' }
export const CITO_CELLS = ['B-03', 'B-04', 'D-08', 'G-05']

const EMPTY_CELLS = [
  'A-06', 'A-07', 'A-10', 'B-07', 'B-08', 'B-09', 'C-01', 'C-02',
  'C-06', 'C-09', 'C-10', 'D-04', 'D-05', 'F-03', 'F-07', 'F-10',
  'G-01', 'G-09', 'G-10', 'H-02', 'H-05', 'H-08', 'I-04', 'I-07',
  'I-10', 'J-01', 'J-06', 'J-10'
]

export function cellKey(row, col) {
  return `${row}-${col}`
}

export function getCellState(row, col) {
  const key = cellKey(row, col)
  if (row === TARGET_CELL.row && col === TARGET_CELL.col) return 'target'
  if (CITO_CELLS.includes(key)) return 'cito'
  if (EMPTY_CELLS.includes(key)) return 'empty'
  return 'filled'
}
