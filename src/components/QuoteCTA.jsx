import './QuoteCTA.css'

export default function QuoteCTA() {
  return (
    <section className="quote-cta" id="contact">
      <div
        className="quote-cta-bg"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=60)',
        }}
      />
      <div className="quote-cta-overlay" />

      <div className="container quote-cta-grid">
        {/* Left: Info */}
        <div className="quote-info">
          <p className="section-subtitle" style={{ color: '#c9a84c' }}>Let's Discuss</p>
          <h2 className="section-title" style={{ color: '#fff' }}>
            NEED A QUOTATION,<br />WE CAN HELP.
          </h2>
          <div className="section-divider" />
          <p className="quote-desc">
            Please send us your project requirements and one of our specialists
            will get in touch with you shortly.
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                </svg>
              </div>
              <div>
                <span className="contact-label">Call Us</span>
                <a href="tel:+966503327344" className="contact-value">(+966) 503-327-344</a>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div>
                <span className="contact-label">Email Us</span>
                <a href="mailto:info@sustainviro.com" className="contact-value">info@sustainviro.com</a>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <line x1="3" y1="9" x2="21" y2="9"/>
                  <line x1="9" y1="21" x2="9" y2="9"/>
                </svg>
              </div>
              <div>
                <span className="contact-label">Register Certificate</span>
                <span className="contact-value">4030195746</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div className="quote-form-wrap">
          <h3 className="form-title">REQUEST A QUOTE</h3>
          <form
            className="quote-form"
            onSubmit={(e) => {
              e.preventDefault()
              alert('Thank you! We will be in touch shortly.')
              e.target.reset()
            }}
          >
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input type="text" id="name" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input type="tel" id="phone" placeholder="+966 5XX XXX XXXX" required />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input type="email" id="email" placeholder="your@email.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="service">Service Required</label>
              <select id="service">
                <option value="">Select a Service</option>
                <option>Finishing Works</option>
                <option>Construction</option>
                <option>Shop Drawings</option>
                <option>3D &amp; VR Studio</option>
                <option>Special Works</option>
                <option>Wood Work</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Project Details</label>
              <textarea id="message" rows="5" placeholder="Describe your project requirements..." />
            </div>
            <button type="submit" className="btn btn-primary form-submit">
              Send Request
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
