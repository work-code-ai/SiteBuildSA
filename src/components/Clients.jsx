import './Clients.css'

const clients = [
  { id: 1, name: 'Imtenan', color: '#2a7f4f' },
  { id: 2, name: 'Civil Group', color: '#1a4b8a' },
  { id: 3, name: 'Nawa', color: '#8b2020' },
  { id: 4, name: 'SBG', color: '#1a1a2e' },
  { id: 5, name: 'Advance', color: '#c9a84c' },
  { id: 6, name: 'Blanca', color: '#444' },
]

export default function Clients() {
  return (
    <section className="clients">
      <div className="container">
        <div className="clients-header">
          <p className="section-subtitle">Our Partners</p>
          <h2 className="section-title">SOME OF OUR CLIENTS</h2>
          <div className="section-divider center" />
        </div>

        <div className="clients-track-wrap">
          <div className="clients-track">
            {[...clients, ...clients].map((c, i) => (
              <div key={`${c.id}-${i}`} className="client-logo">
                <div
                  className="client-circle"
                  style={{ borderColor: c.color }}
                >
                  <span style={{ color: c.color }}>{c.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
