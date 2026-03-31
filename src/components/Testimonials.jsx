import { useState, useEffect, useCallback } from 'react'
import './Testimonials.css'

const quotes = [
  {
    id: 1,
    text: 'Most people talk; we do things. They plan; we achieve. They hesitate; we move ahead. We are living proof that when human beings have the courage and commitment to transform a dream into reality, there is nothing that can stop them.',
    author: 'H.H. SHEIKH MOHAMMED BIN RASHID AL MAKTOUM',
    role: 'Vice President and Prime Minister of the United Arab Emirates',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
  },
  {
    id: 2,
    text: 'In the middle of every difficulty lies opportunity. Building is not just about raising structures — it is about elevating communities, creating legacies, and inspiring generations to come.',
    author: 'VISION 2030',
    role: 'Kingdom of Saudi Arabia National Transformation Program',
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&q=80',
  },
  {
    id: 3,
    text: 'Sustainability is no longer about doing less harm. It\'s about doing more good — for the environment, for communities, for the future of our planet and the people who inhabit it.',
    author: 'SUSTAINABLE CONSTRUCTION ETHOS',
    role: 'Sustainviro – Core Philosophy',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)

  const goTo = useCallback((i) => {
    if (animating) return
    setAnimating(true)
    setTimeout(() => {
      setCurrent(i)
      setAnimating(false)
    }, 350)
  }, [animating])

  useEffect(() => {
    const t = setInterval(() => goTo((current + 1) % quotes.length), 7000)
    return () => clearInterval(t)
  }, [current, goTo])

  const q = quotes[current]

  return (
    <section className="testimonials">
      <div
        className="testimonials-bg"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1600&q=60)',
        }}
      />
      <div className="testimonials-overlay" />
      <div className="container">
        <div className="testimonials-header">
          <p className="section-subtitle" style={{ color: '#c9a84c' }}>Inspiration</p>
          <h2 className="section-title" style={{ color: '#fff' }}>LEADERSHIP QUOTES</h2>
          <div className="section-divider center" />
        </div>

        <div className={`testimonial-body${animating ? ' fade-out' : ' fade-in'}`}>
          <div className="quote-mark">"</div>
          <p className="quote-text">{q.text}</p>
          <div className="quote-author-wrap">
            <img src={q.img} alt={q.author} className="quote-avatar" />
            <div>
              <strong className="quote-author">— {q.author}</strong>
              <span className="quote-role">{q.role}</span>
            </div>
          </div>
        </div>

        <div className="testimonial-dots">
          {quotes.map((_, i) => (
            <button
              key={i}
              className={`t-dot${i === current ? ' active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Quote ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
