import './Services.css'

const services = [
  {
    id: 1,
    title: 'FINISHING WORKS',
    href: '#portfolio',
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    desc: 'We are specialist to lead brand store chains for a complete solution starting from design up to delivery within your tightest time schedules.',
  },
  {
    id: 2,
    title: 'CONSTRUCTION',
    href: '#portfolio',
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
        <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>
      </svg>
    ),
    desc: 'We delivered many government projects on time, serving different sectors such as electrical works, civil works, building renovation and more.',
  },
  {
    id: 3,
    title: 'SHOP DRAWINGS',
    href: '#portfolio',
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
    desc: 'Our technical office consists of professional teams ready to produce mass production of project shop drawings — civil, structural, plumbing, architectural and more.',
  },
  {
    id: 4,
    title: '3D & VR STUDIO',
    href: '#portfolio',
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
        <polygon points="12 2 2 7 12 12 22 7 12 2"/>
        <polyline points="2 17 12 22 22 17"/>
        <polyline points="2 12 12 17 22 12"/>
      </svg>
    ),
    desc: '3D architectural & VR visualization presents a graphical representation of the design concept, allowing you to evaluate the future structure before construction begins.',
  },
  {
    id: 5,
    title: 'SPECIAL WORKS',
    href: '#portfolio',
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.07 4.93l-1.41 1.41M5.34 18.66l-1.41 1.41M19.07 19.07l-1.41-1.41M5.34 5.34L3.93 3.93M21 12h-2M5 12H3M12 3V1M12 23v-2"/>
      </svg>
    ),
    desc: 'We have professional experience in special works: concrete coring, concrete screed & self-levelling, pulling cables, metal work and wood work.',
  },
  {
    id: 6,
    title: 'WOOD WORK',
    href: '#portfolio',
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
        <path d="M8 22V12h8v10"/>
      </svg>
    ),
    desc: 'Building high quality wood furniture and decor is our real passion — starting from design phase to production, up to installation and delivery.',
  },
]

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services-header">
          <p className="section-subtitle">What We Do</p>
          <h2 className="section-title">WE ARE SPECIALISTS IN</h2>
          <div className="section-divider center" />
          <p className="services-intro">
            From concept to completion — Sustainviro delivers integrated construction and design
            services across the Kingdom of Saudi Arabia.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <a key={s.id} href={s.href} className="service-card" style={{ '--delay': `${i * 0.08}s` }}>
              <div className="service-icon">{s.icon}</div>
              <div className="service-num">0{s.id}</div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
              <div className="service-arrow">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Center image overlay */}
      <div className="services-center-img">
        <img
          src="https://images.unsplash.com/photo-1574359411659-15573a27fd0c?auto=format&fit=crop&w=600&q=80"
          alt="Construction work"
        />
      </div>
    </section>
  )
}
