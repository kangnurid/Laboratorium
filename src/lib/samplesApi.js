import { supabase, isSupabaseConfigured } from './supabase'

const TABLE = 'samples'

function localKey() {
  return 'synthalims:samples:local'
}

function readLocal() {
  try {
    return JSON.parse(localStorage.getItem(localKey()) || '[]')
  } catch {
    return []
  }
}

function writeLocal(rows) {
  localStorage.setItem(localKey(), JSON.stringify(rows))
}

export async function listSamples() {
  if (!isSupabaseConfigured || !supabase) {
    return { data: readLocal(), demo: true }
  }
  const { data, error } = await supabase
    .from(TABLE)
    .select('*')
    .order('created_at', { ascending: false })
  if (error) throw error
  return { data: data || [], demo: false }
}

export async function createSample(payload) {
  const row = {
    ...payload,
    status: payload.status || 'registered'
  }
  if (!isSupabaseConfigured || !supabase) {
    const now = new Date().toISOString()
    const local = readLocal()
    const withMeta = {
      id: `local-${Date.now()}`,
      created_at: now,
      updated_at: now,
      location_code: `LOC-${String(row.storage_unit || '').toUpperCase().replace(/-/g, '')}-T04-${row.rack_row}${row.rack_col}`,
      ...row
    }
    writeLocal([withMeta, ...local])
    return { data: withMeta, demo: true }
  }
  const { data, error } = await supabase
    .from(TABLE)
    .insert(row)
    .select()
    .single()
  if (error) throw error
  return { data, demo: false }
}

export async function deleteSample(id) {
  if (!isSupabaseConfigured || !supabase) {
    writeLocal(readLocal().filter((r) => r.id !== id))
    return { demo: true }
  }
  const { error } = await supabase.from(TABLE).delete().eq('id', id)
  if (error) throw error
  return { demo: false }
}
