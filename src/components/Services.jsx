import { useState } from 'react'
import SmartImg from './SmartImg'
import { services } from '../data/services'

export default function Services({ onBook }) {
  const [active, setActive] = useState(services[0].id)
  const current = services.find((s) => s.id === active)
  return (
    <section id="services" className="section services" aria-labelledby="svc-h">
      <header className="sec-head">
        <h2 id="svc-h">Find Your Signature.</h2>
        <p>Thoughtful styling. Personal expression. Made for you.</p>
      </header>
      <div className="svc-grid">
        <ul className="svc-list">
          {services.map((s) => (
            <li key={s.id} className={s.id === active ? 'on' : ''} onMouseEnter={() => setActive(s.id)} onFocus={() => setActive(s.id)} onClick={() => setActive(s.id)}>
              <div className="svc-main">
                <h3>{s.name}</h3>
                <p>{s.desc}</p>
                <small>{s.duration}</small>
              </div>
              <div className="svc-side">
                <span className="price">{s.price}</span>
                <button className="link-btn" onClick={() => onBook(s.name)} aria-label={`Enquire about ${s.name}`}>Enquire</button>
              </div>
            </li>
          ))}
        </ul>
        <div className="svc-preview" aria-hidden="true"><SmartImg key={current.id} src={current.img} alt="" width="1000" height="1200" /></div>
      </div>
    </section>
  )
}
