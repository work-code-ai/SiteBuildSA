import './Footer.css'

const workingHours = [
  { day: 'Sunday – Thursday', hours: '09:00 – 17:00' },
  { day: 'Saturday', hours: '10:00 – 15:00' },
  { day: 'Friday & Holidays', hours: 'On Call Only' },
]

const services = [
  { label: 'Finishing & Fitting Out', href: '#services' },
  { label: 'Wood Workshop', href: '#services' },
  { label: '3D & VR Studio', href: '#services' },
  { label: 'Shop Drawings Production', href: '#services' },
  { label: 'Construction Works', href: '#services' },
  { label: 'Special Works', href: '#services' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container footer-grid">
          {/* About */}
          <div className="footer-col footer-about">
            <div className="footer-logo">
              <span className="footer-logo-text">
                SUSTAIN<span>VIRO</span>
              </span>
            </div>
            <p className="footer-about-text">
              The Sustainable Construction Corporation for Contracting was established in 2008 and
              specialized in construction, finishing works, architectural design, interior design,
              supervision and implementation of projects.
            </p>
            <div className="footer-socials">
              <a href="https://facebook.com/sustainviro" target="_blank" rel="noreferrer" aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a href="https://twitter.com/SustainableViro" target="_blank" rel="noreferrer" aria-label="Twitter">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
              </a>
              <a href="https://instagram.com/sustainviro" target="_blank" rel="noreferrer" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="#1a1a2e"/><circle cx="17.5" cy="6.5" r="0.5" fill="#1a1a2e"/></svg>
              </a>
            </div>
          </div>

          {/* Working Hours */}
          <div className="footer-col">
            <h4 className="footer-col-title">WORKING HOURS</h4>
            <p className="footer-hours-note">
              We work 6 days a week, every day excluding major holidays.
              Contact us if you have an emergency.
            </p>
            <ul className="footer-hours-list">
              {workingHours.map((h) => (
                <li key={h.day}>
                  <span className="hours-day">{h.day}</span>
                  <span className="hours-time">{h.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4 className="footer-col-title">SERVICES</h4>
            <ul className="footer-links">
              {services.map((s) => (
                <li key={s.label}>
                  <a href={s.href}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="9 18 15 12 9 6"/>
                    </svg>
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">QUICK LINKS</h4>
            <ul className="footer-links">
              {[
                ['Home', '#home'],
                ['About Us', '#about'],
                ['Services', '#services'],
                ['Portfolio', '#portfolio'],
                ['Recent Projects', '#projects'],
                ['Contact Us', '#contact'],
              ].map(([label, href]) => (
                <li key={label}>
                  <a href={href}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="9 18 15 12 9 6"/>
                    </svg>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>
            Copyright &copy; {new Date().getFullYear()}, All Rights Reserved to{' '}
            <a href="#home">Sustainable Construction Contracting Co.</a>
          </p>
          <p className="footer-bottom-right">
            Sustainable Construction &bull; KSA
          </p>
        </div>
      </div>
    </footer>
  )
}
