import { useEffect, useState } from 'react'

export function getHashRoute(fallback = 'dashboard-utama') {
  const raw = window.location.hash.replace('#/', '').trim()
  return raw || fallback
}

export function navigateTo(path) {
  window.location.hash = `#/${path}`
}

export default function useHashRoute(fallback = 'dashboard-utama') {
  const [route, setRoute] = useState(() => getHashRoute(fallback))
  useEffect(() => {
    const onChange = () => setRoute(getHashRoute(fallback))
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [fallback])
  return route
}

