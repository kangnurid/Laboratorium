import { navigateTo } from '../hooks/useHashRoute'

const KNOWN = ['dashboard-utama', 'registrasi-sampel']

export default function PlaceholderPage({ route }) {
  const title = route.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
  return (
    <div className="bg-surface-container-lowest rounded-lg p-space-lg shadow-sm max-w-3xl">
      <p className="font-label-caps text-label-caps text-on-surface-variant uppercase">Modul {title}</p>
      <h1 className="font-headline-lg text-headline-lg font-semibold mt-1">{title}</h1>
      <p className="font-body-md text-body-md text-on-surface-variant mt-2">Halaman ini memakai shell Dashboard yang sama. Route aktif: <code className="font-data-mono-sm bg-surface-container px-1 rounded">#{route}</code>. Tambahkan design berikutnya di folder <code className="font-data-mono-sm bg-surface-container px-1 rounded">src/pages</code>.</p>
      <div className="flex flex-wrap gap-space-sm mt-space-md">
        <button onClick={() => navigateTo('dashboard-utama')} type="button" className="px-4 py-2 rounded bg-primary text-on-primary font-body-md font-semibold">Kembali ke Dashboard</button>
        {!KNOWN.includes(route) && <button onClick={() => navigateTo('registrasi-sampel')} type="button" className="px-4 py-2 rounded bg-surface-container font-body-md font-medium">Buka Registrasi Sampel</button>}
      </div>
    </div>
  )
}
