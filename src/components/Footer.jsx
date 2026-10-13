import { Instagram, Facebook } from 'lucide-react'
import { site } from '../data/siteConfig'
export default function Footer() {
  const { instagram, facebook } = site.social
  return (
    <footer className="footer">
      <div className="foot-grid">
        <div><a href="#home" className="wordmark">Hair<em>Verses</em></a><p>{site.support}</p></div>
        <nav aria-label="Footer"><a href="#about">About</a><a href="#services">Services</a><a href="#gallery">Gallery</a><a href="#location">Visit</a></nav>
        <div><p>{site.address}</p><p>{site.phone || 'Phone: add in siteConfig.js'}</p>{site.hours.map(([d, h]) => <p key={d}>{d}: {h}</p>)}</div>
        <div className="social">
          {instagram ? <a href={instagram} aria-label="Instagram" target="_blank" rel="noreferrer"><Instagram size={20} /></a> : <span className="muted">Instagram link not set</span>}
          {facebook && <a href={facebook} aria-label="Facebook" target="_blank" rel="noreferrer"><Facebook size={20} /></a>}
        </div>
      </div>
      <p className="copy">© {new Date().getFullYear()} {site.name}. Demo template.</p>
    </footer>
  )
}
