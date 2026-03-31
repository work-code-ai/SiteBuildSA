import { useState } from 'react'
import './Portfolio.css'

const categories = ['SHOW ALL', 'REAL ESTATE', 'COMMERCIAL', 'RESIDENTIAL', 'INTERIOR DESIGN', 'MEGA PROJECTS', 'HOTELS']

const projects = [
  {
    id: 1,
    title: 'REAL ESTATE',
    type: '3D PERSPECTIVE',
    cat: 'REAL ESTATE',
    img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=75',
  },
  {
    id: 2,
    title: 'REAL ESTATE',
    type: '3D PERSPECTIVE',
    cat: 'REAL ESTATE',
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=600&q=75',
  },
  {
    id: 3,
    title: 'COMMERCIAL',
    type: '3D PERSPECTIVE',
    cat: 'COMMERCIAL',
    img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=75',
  },
  {
    id: 4,
    title: 'COMMERCIAL',
    type: '3D PERSPECTIVE',
    cat: 'COMMERCIAL',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=75',
  },
  {
    id: 5,
    title: 'RESIDENTIAL',
    type: '3D PERSPECTIVE',
    cat: 'RESIDENTIAL',
    img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=75',
  },
  {
    id: 6,
    title: 'RESIDENTIAL',
    type: '3D PERSPECTIVE',
    cat: 'RESIDENTIAL',
    img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=75',
  },
  {
    id: 7,
    title: 'INTERIOR DESIGN',
    type: '3D PERSPECTIVE',
    cat: 'INTERIOR DESIGN',
    img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=75',
  },
  {
    id: 8,
    title: 'MEGA PROJECT',
    type: '3D PERSPECTIVE',
    cat: 'MEGA PROJECTS',
    img: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=600&q=75',
  },
  {
    id: 9,
    title: 'HOTELS',
    type: '3D PERSPECTIVE',
    cat: 'HOTELS',
    img: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=600&q=75',
  },
]

export default function Portfolio() {
  const [active, setActive] = useState('SHOW ALL')

  const filtered = active === 'SHOW ALL'
    ? projects
    : projects.filter((p) => p.cat === active)

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="portfolio-header">
          <p className="section-subtitle">Our Work</p>
          <h2 className="section-title">WORK OF EXCELLENCE</h2>
          <div className="section-divider center" />
          <p className="portfolio-sub">OUR RECENT 3D &amp; VR STUDIO PRODUCTION</p>
        </div>

        {/* Filter tabs */}
        <div className="portfolio-filters">
          {categories.map((c) => (
            <button
              key={c}
              className={`filter-btn${active === c ? ' active' : ''}`}
              onClick={() => setActive(c)}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="portfolio-grid">
          {filtered.map((p) => (
            <div key={p.id} className="portfolio-item">
              <div className="portfolio-img">
                <img src={p.img} alt={p.title} loading="lazy" />
              </div>
              <div className="portfolio-info">
                <span className="portfolio-type">{p.type}</span>
                <h4 className="portfolio-title">{p.title}</h4>
                <div className="portfolio-hover">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                    <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="portfolio-footer">
          <a href="#" className="btn btn-primary">View All Projects</a>
        </div>
      </div>
    </section>
  )
}
