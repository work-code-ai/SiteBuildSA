import './RecentProjects.css'

const projects = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=75',
    title: 'NAWA PATIO LOUNGE IS A UNIQUE PROJECT, THIS BRANCH IS CONSIDERED AS PILOT LOUNGE FOR CLIENT COMMERCIAL CHAIN IN KINGDOM.',
    year: '2022',
    href: '#',
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=75',
    title: 'BLANCA PIZZERIA IS THE FIRST BRANCH FROM BLANCA PIZZERIA AT JEDDAH.',
    year: '2022',
    href: '#',
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=75',
    title: 'SUSTAINABLE CONTRACTING CO. HAD DELIVERED THREE BRANCHES FOR IMTENAN HEALTH SHOP CHAIN AT JEDDAH.',
    year: '2021',
    href: '#',
  },
]

export default function RecentProjects() {
  return (
    <section className="recent-projects" id="projects">
      <div className="container">
        <div className="rp-header">
          <p className="section-subtitle">Track Record</p>
          <h2 className="section-title">RECENT PROJECTS</h2>
          <div className="section-divider center" />
        </div>

        <div className="rp-grid">
          {projects.map((p) => (
            <a key={p.id} href={p.href} className="rp-card">
              <div className="rp-img-wrap">
                <img src={p.img} alt={p.title} loading="lazy" />
                <div className="rp-year">{p.year}</div>
              </div>
              <div className="rp-info">
                <p className="rp-title">{p.title}</p>
                <span className="rp-read-more">
                  Read More
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="rp-footer">
          <a href="#portfolio" className="btn btn-primary">See All Projects</a>
        </div>
      </div>
    </section>
  )
}
