  return (
    <section className="bg-surface-container-lowest rounded-lg p-space-lg shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-space-sm mb-space-md">
        <div className="flex items-center gap-space-xs">
          <span className="material-symbols-outlined text-secondary text-[22px]">inventory</span>
          <h2 className="font-headline-md text-headline-md font-semibold">Data Sampel Tersimpan</h2>
          <span className="font-data-mono-sm px-2 py-0.5 rounded bg-surface-container font-semibold">{filtered.length} DATA</span>
          {demo && <span className="font-data-mono-sm px-2 py-0.5 rounded bg-[#fef3c7] text-[#b45309] font-bold">MODE DEMO LOKAL</span>}
          {!demo && <span className="font-data-mono-sm px-2 py-0.5 rounded bg-secondary-container/40 text-on-secondary-container font-bold">SUPABASE LIVE</span>}
        </div>
        <div className="flex items-center gap-space-xs">
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Cari kode / pasien / klien..." className="h-9 px-3 rounded bg-surface-container-low font-body-sm focus:outline-none focus:ring-1 focus:ring-primary" />
          <button onClick={load} type="button" className="p-2 rounded bg-surface-container hover:bg-surface-container-high" title="Muat ulang">
            <span className="material-symbols-outlined text-[18px]">refresh</span>
          </button>
        </div>
      </div>
      {!isSupabaseConfigured && (
        <p className="font-body-sm text-[#b45309] bg-[#fef3c7] rounded px-3 py-2 mb-space-md">.env belum diisi — data disimpan di browser (localStorage). Isi VITE_SUPABASE_URL + VITE_SUPABASE_ANON_KEY lalu restart dev server.</p>
      )}
      {loading && <p className="font-body-md text-on-surface-variant">Memuat data...</p>}
      {error && <p className="font-body-md text-error">{error}</p>}
      {!loading && !error && filtered.length === 0 && <p className="font-body-md text-on-surface-variant">Belum ada data. Isi form lalu klik Daftarkan.</p>}
      {!loading && !error && filtered.length > 0 && (
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low font-label-caps text-label-caps text-on-surface-variant uppercase">
                <th className="py-space-sm px-space-md">Kode</th>
                <th className="py-space-sm px-space-md">Subjek / Klien</th>
                <th className="py-space-sm px-space-md">Matriks • Prioritas</th>
                <th className="py-space-sm px-space-md">Uji • Lokasi</th>
                <th className="py-space-sm px-space-md">Status</th>
                <th className="py-space-sm px-space-md">Dibuat</th>
                <th className="py-space-sm px-space-md text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="font-body-sm">
              {filtered.map((r) => (
                <tr key={r.id} className={r.id === highlightId ? 'bg-secondary-container/30' : 'hover:bg-surface-container-low'}>
                  <td className="py-space-sm px-space-md whitespace-nowrap">
                    <span className="font-data-mono-md font-bold text-primary block">{r.code}</span>
                    <span className="font-data-mono-sm text-on-surface-variant">{r.location_code || `${r.storage_unit} ${r.rack_row}${r.rack_col}`}</span>
                  </td>
                  <td className="py-space-sm px-space-md">
                    <span className="font-semibold block">{r.subject || '-'}</span>
                    <span className="text-on-surface-variant">{r.sender || '-'}</span>
                  </td>
                  <td className="py-space-sm px-space-md">
                    <span className="block">{r.matrix}</span>
                    <span className="font-data-mono-sm px-1.5 py-0.5 rounded bg-surface-container">{r.priority}</span>
                  </td>
                  <td className="py-space-sm px-space-md">
                    <span className="block font-data-mono-sm">{Array.isArray(r.tests) ? r.tests.join(', ') : '-'}</span>
                    <span className="font-data-mono-sm text-on-surface-variant">{r.storage_unit} • {r.rack_row}-{r.rack_col}</span>
                  </td>
                  <td className="py-space-sm px-space-md"><span className="font-data-mono-sm px-1.5 py-0.5 rounded bg-surface-container">{r.status}</span></td>
                  <td className="py-space-sm px-space-md whitespace-nowrap font-data-mono-sm text-on-surface-variant">{fmtDate(r.created_at)}</td>
                  <td className="py-space-sm px-space-md text-center">
                    <button onClick={() => onDelete(r.id)} type="button" className="p-1.5 rounded hover:bg-error-container text-on-surface-variant" title="Hapus">
                      <span className="material-symbols-outlined text-[18px]">delete</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}
