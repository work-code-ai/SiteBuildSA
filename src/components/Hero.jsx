import { useState, useEffect, useCallback } from 'react'
import './Hero.css'

const slides = [
  {
    id: 1,
    tag: 'Excellence in Every Detail',
    title: 'FINISHING\nWORKS',
    subtitle: 'WHEN SERVICE MATTERS',
    description:
      'We lead brand store chains with a complete solution — from design to delivery, within your tightest schedules.',
    cta: { label: 'Our Services', href: '#services' },
    bg: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 2,
    tag: 'Smart Decisions',
    title: 'YOUR CHOICE\nIS SIMPLE',
    subtitle: 'QUALITY YOU CAN TRUST',
    description:
      'Sustainable Construction Corporation — your partner for landmark construction projects across the Kingdom.',
    cta: { label: 'Learn More', href: '#about' },
    bg: 'https://images.unsplash.com/photo-1590879130426-6e9b1f0ccdb5?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 3,
    tag: 'Building Tomorrow',
    title: 'WE UNDERSTAND\nYOUR NEEDS',
    subtitle: 'IN CONSTRUCTION',
    description:
      'From civil works and architectural design to supervisory excellence — we build with integrity.',
    cta: { label: 'Contact Us', href: '#contact' },
    bg: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 4,
    tag: 'Green Architecture',
    title: 'SUSTAINABLE\nBUILDING',
    subtitle: 'FOR A GREENER FUTURE',
    description:
      'Integrating Saudi architectural heritage with modern green building technology towards sustainable architecture.',
    cta: { label: 'View Portfolio', href: '#portfolio' },
    bg: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1600&q=80',
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)

  const goTo = useCallback((index) => {
    if (animating) return
    setAnimating(true)
    setTimeout(() => {
      setCurrent(index)
      setAnimating(false)
    }, 400)
  }, [animating])

  const next = useCallback(() => {
    goTo((current + 1) % slides.length)
  }, [current, goTo])

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  const slide = slides[current]

  return (
    <section className="hero" id="home">
      <div
        className={`hero-bg${animating ? ' fade-out' : ' fade-in'}`}
        style={{ backgroundImage: `url(${slide.bg})` }}
      />
      <div className="hero-overlay" />

      <div className="container hero-content">
        <div className={`hero-text${animating ? ' slide-out' : ' slide-in'}`}>
          <span className="hero-tag">{slide.tag}</span>
          <h1 className="hero-title">{slide.title.split('\n').map((l, i) => (
            <span key={i}>{l}<br /></span>
          ))}</h1>
          <p className="hero-subtitle">{slide.subtitle}</p>
          <div className="hero-divider" />
          <p className="hero-desc">{slide.description}</p>
          <div className="hero-actions">
            <a href={slide.cta.href} className="btn btn-primary">{slide.cta.label}</a>
            <a href="#contact" className="btn btn-outline">Get a Quote</a>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="hero-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero-dot${i === current ? ' active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Arrows */}
      <button
        className="hero-arrow hero-arrow--prev"
        onClick={() => goTo((current - 1 + slides.length) % slides.length)}
        aria-label="Previous slide"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button
        className="hero-arrow hero-arrow--next"
        onClick={() => goTo((current + 1) % slides.length)}
        aria-label="Next slide"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Scroll hint */}
      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}
