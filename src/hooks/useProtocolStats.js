import { useEffect, useState } from 'react'
import { fetchProtocolStats } from '../chain.js'

export function useProtocolStats() {
  const [stats, setStats] = useState(null)
  const [now, setNow] = useState(() => Math.floor(Date.now() / 1000))

  useEffect(() => {
    let cancelled = false
    const load = () =>
      fetchProtocolStats()
        .then((data) => { if (!cancelled) setStats(data) })
        .catch(() => { if (!cancelled) setStats(null) })

    load()
    const poll = setInterval(load, 60_000)
    const tick = setInterval(() => setNow(Math.floor(Date.now() / 1000)), 1000)
    return () => {
      cancelled = true
      clearInterval(poll)
      clearInterval(tick)
    }
  }, [])

  return { stats, now }
}
