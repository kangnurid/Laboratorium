import { useState } from 'react'
import AppSidebar from './components/AppSidebar.jsx'
import Header from './components/Header.jsx'
import DashboardPage from './pages/DashboardPage.jsx'
import RegistrasiSampelPage from './pages/RegistrasiSampelPage.jsx'
import PlaceholderPage from './pages/PlaceholderPage.jsx'
import useHashRoute from './hooks/useHashRoute'

export default function App() {
  const route = useHashRoute('dashboard-utama')
  const [query, setQuery] = useState('')
  const isRegistrasi = route === 'registrasi-sampel'
  const isDashboard = route === 'dashboard-utama'
  return (
    <div className="bg-surface font-body-md text-on-surface antialiased min-h-screen">
      <AppSidebar activeRoute={route} />
      <div className="pl-72">
        <Header query={query} onQuery={setQuery} />
        <main className="relative pt-16 bg-surface min-h-screen w-full px-gutter-lg py-margin-md">
          {isDashboard && <DashboardPage query={query} />}
          {isRegistrasi && <RegistrasiSampelPage />}
          {!isDashboard && !isRegistrasi && <PlaceholderPage route={route} />}
        </main>
      </div>
    </div>
  )
}

