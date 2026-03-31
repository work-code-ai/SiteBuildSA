import './Values.css'

const values = [
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
      </svg>
    ),
    title: 'CONSTRUCT WITH INTEGRITY',
    desc: 'Integrity demands honesty. To Construct with Integrity, we must be open and forthright, even when doing so is difficult. Truthful conversations create opportunities for better analysis and decisions. Honesty builds trust. Trust builds relationships that lead to success.',
    color: '#c9a84c',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
      </svg>
    ),
    title: 'SAFETY',
    desc: 'We are constantly focused on production while maintaining an unwavering commitment to the safety and well-being of every worker and stakeholder on every project.',
    color: '#2a7f4f',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
      </svg>
    ),
    title: 'UNITY',
    desc: 'One team, one mission. We believe that unified purpose and collective action is the foundation of every successful project and lasting partnership.',
    color: '#1a4b8a',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
      </svg>
    ),
    title: 'QUALITY',
    desc: 'We are committed to excellence in every detail — from materials selection to final finishing — because quality is not a checkbox but a culture.',
    color: '#8b2020',
  },
]

export default function Values() {
  return (
    <section className="values">
      <div className="values-bg" />
      <div className="container">
        <div className="values-header">
          <p className="section-subtitle" style={{ color: '#c9a84c' }}>What Drives Us</p>
          <h2 className="section-title" style={{ color: '#fff' }}>OUR VALUES</h2>
          <div className="section-divider center" />
          <p className="values-intro">
            Integrity and honesty — We do what we say we will do. Accountable and responsible —
            We achieve results. Motivated and professional — We are problem solvers.
          </p>
        </div>

        <div className="values-grid">
          {values.map((v) => (
            <div className="value-card" key={v.title}>
              <div className="value-icon-wrap" style={{ color: v.color }}>
                {v.icon}
              </div>
              <h3 className="value-title">{v.title}</h3>
              <p className="value-desc">{v.desc}</p>
              <div className="value-bar" style={{ background: v.color }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
