import { useMemo } from 'react'
import WelcomeBar from '../components/WelcomeBar.jsx'
import KpiCards from '../components/KpiCards.jsx'
import KpiSecondary from '../components/KpiSecondary.jsx'
import Pipeline from '../components/Pipeline.jsx'
import PriorityTable from '../components/PriorityTable.jsx'
import RightPanel from '../components/RightPanel.jsx'
import { prioritySamples } from '../data/samples.js'

export default function DashboardPage({ query }) {
  const rows = useMemo(() => {
    const q = (query || '').trim().toLowerCase()
    if (!q) return prioritySamples
    return prioritySamples.filter((r) =>
      [r.code, r.matrix, r.client, r.param, r.analyst].some((v) => v.toLowerCase().includes(q))
    )
  }, [query])
  return (
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
  )
}
