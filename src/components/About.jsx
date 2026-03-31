import './About.css'

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container about-grid">
        {/* Image side */}
        <div className="about-image-wrap">
          <div className="about-img-main">
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80"
              alt="Construction site"
            />
          </div>
          <div className="about-img-accent">
            <img
              src="https://images.unsplash.com/photo-1590725140246-20acdee442be?auto=format&fit=crop&w=400&q=80"
              alt="Building interior"
            />
          </div>
          <div className="about-experience-badge">
            <span className="badge-number">15+</span>
            <span className="badge-text">Years of<br />Experience</span>
          </div>
        </div>

        {/* Text side */}
        <div className="about-content">
          <p className="section-subtitle">Who We Are</p>
          <h2 className="section-title">WE DELIVER LANDMARK PROJECTS</h2>
          <div className="section-divider" />
          <p className="about-body">
            The Sustainable Construction Corporation for Contracting was established in 2008
            and specialized in construction, finishing works, architectural design, interior
            design, supervision and implementation of projects.
          </p>
          <p className="about-body">
            The foundation aims to preserve the Saudi architectural style and integrate it
            with the tremendous development in modern building technology towards green and
            sustainable architecture.
          </p>

          <div className="about-pillars">
            <div className="pillar">
              <div className="pillar-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <div>
                <h4>WE'VE REPUTATION FOR EXCELLENCE</h4>
                <p>Delivering quality outcomes on every project, every time.</p>
              </div>
            </div>
            <div className="pillar">
              <div className="pillar-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              </div>
              <div>
                <h4>WE BUILD PARTNERSHIPS</h4>
                <p>Long-term relationships built on trust and shared success.</p>
              </div>
            </div>
            <div className="pillar">
              <div className="pillar-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
              </div>
              <div>
                <h4>GUIDED BY COMMITMENT</h4>
                <p>Accountable deliverables and professional project management.</p>
              </div>
            </div>
          </div>

          <a href="#contact" className="btn btn-primary">Contact Us</a>
        </div>
      </div>
    </section>
  )
}
