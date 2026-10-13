import SmartImg from './SmartImg'
import { stylists } from '../data/stylists'
export default function StylistSection() {
  return (
    <section id="stylists" className="section stylists" aria-labelledby="sty-h">
      <header className="sec-head"><h2 id="sty-h">The Artists Behind the Craft.</h2><p className="demo-note">Sample profiles. Replace with your team.</p></header>
      <ul className="sty-grid">
        {stylists.map((s, i) => (
          <li key={i} className={`sty sty-${i}`}>
            <SmartImg src={s.img} alt={`Portrait placeholder for ${s.name}`} width="800" height="1000" />
            <h3>{s.name}</h3><strong>{s.role}</strong><p>{s.bio}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
