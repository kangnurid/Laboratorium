import { useEffect, useState } from 'react'
import { isSupabaseConfigured } from '../lib/supabase'
import { listSamples, deleteSample } from '../lib/samplesApi'

function fmtDate(v) {
  if (!v) return '-'
  try {
    return new Date(v).toLocaleString('id-ID', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' })
  } catch {
    return v
  }
}

export default function SampleList({ refreshKey, highlightId, onDeleted }) {
  const [rows, setRows] = useState([])
  const [demo, setDemo] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [q, setQ] = useState('')

  async function load() {
    setLoading(true)
    setError('')
    try {
      const res = await listSamples()
      setRows(res.data)
      setDemo(res.demo)
    } catch (e) {
      setError(e.message || 'Gagal memuat data')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { load() }, [refreshKey])

  async function onDelete(id) {
    if (!confirm('Hapus sampel ini?')) return
    try {
      await deleteSample(id)
      if (onDeleted) onDeleted()
      else load()
    } catch (e) {
      alert(e.message)
    }
  }

  const s = q.trim().toLowerCase()
  const filtered = !s ? rows : rows.filter((r) =>
    [r.code, r.subject, r.sender, r.matrix, r.status].filter(Boolean).some((v) => String(v).toLowerCase().includes(s))
  )
