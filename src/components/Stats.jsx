import { useEffect, useRef, useState } from 'react'
import './Stats.css'

const stats = [
  {
    icon: '🏗️',
    number: 320,
    label: 'TOTAL PROJECTS',
    suffix: '+',
  },
  {
    icon: '👷',
    number: 150,
    label: 'STAFF MEMBERS',
    suffix: '+',
  },
  {
    icon: '⏱️',
    number: 50000,
    label: 'HOURS OF WORK',
    suffix: '+',
  },
  {
    icon: '📅',
    number: 15,
    label: 'YEARS OF EXPERIENCE',
    suffix: '+',
  },
]

function useCountUp(target, duration = 2000, started = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!started) return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [target, duration, started])

  return count
}

function StatItem({ stat, started }) {
  const count = useCountUp(stat.number, 2200, started)
  return (
    <div className="stat-item">
      <div className="stat-icon">{stat.icon}</div>
      <div className="stat-number">
        {count.toLocaleString()}
        <span className="stat-suffix">{stat.suffix}</span>
      </div>
      <div className="stat-label">{stat.label}</div>
    </div>
  )
}

export default function Stats() {
  const sectionRef = useRef(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="stats" ref={sectionRef}>
      <div
        className="stats-bg"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?auto=format&fit=crop&w=1600&q=60)',
        }}
      />
      <div className="stats-overlay" />
      <div className="container stats-grid">
        {stats.map((s) => (
          <StatItem key={s.label} stat={s} started={started} />
        ))}
      </div>
    </section>
  )
}
