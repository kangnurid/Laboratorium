import { useMemo, useState } from 'react'
import Sidebar from './components/Sidebar.jsx'
import Header from './components/Header.jsx'
import WelcomeBar from './components/WelcomeBar.jsx'
import KpiCards from './components/KpiCards.jsx'
import KpiSecondary from './components/KpiSecondary.jsx'
import Pipeline from './components/Pipeline.jsx'
import PriorityTable from './components/PriorityTable.jsx'
import RightPanel from './components/RightPanel.jsx'
import { prioritySamples } from './data/samples.js'

export default function App() {
  const [query, setQuery] = useState('')
  const rows = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return prioritySamples
    return prioritySamples.filter((r) =>
      [r.code, r.matrix, r.client, r.param, r.analyst].some((v) => v.toLowerCase().includes(q))
    )
  }, [query])

  return (
    <div className="bg-surface font-body-md text-on-surface antialiased min-h-screen">
      <Sidebar />
      <div className="pl-72">
        <Header query={query} onQuery={setQuery} />
        <main className="relative pt-16 bg-surface min-h-screen w-full px-gutter-lg py-margin-md">
          <div className="flex flex-col w-full space-y-space-xl">
            <WelcomeBar />
            <KpiCards />
            <KpiSecondary />
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg">
              <div className="xl:col-span-8 space-y-space-lg flex flex-col">
                <Pipeline />
                <PriorityTable rows={rows} />
              </div>
              <RightPanel />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
