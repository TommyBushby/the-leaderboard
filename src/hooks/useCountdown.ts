import { useEffect, useState } from 'react'

const KICKOFF = new Date('2026-06-11T19:00:00Z').getTime()

function getRemaining(target: number) {
  const diff = Math.max(0, target - Date.now())
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
    done: diff <= 0,
  }
}

export function useCountdown(targetMs = KICKOFF) {
  const [remaining, setRemaining] = useState(() => getRemaining(targetMs))

  useEffect(() => {
    const id = window.setInterval(() => setRemaining(getRemaining(targetMs)), 1000)
    return () => window.clearInterval(id)
  }, [targetMs])

  return remaining
}

export function pad2(n: number) {
  return String(n).padStart(2, '0')
}
