import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { site } from '../data/siteConfig'

const links = [['home', 'Home'], ['about', 'About'], ['services', 'Services'], ['gallery', 'Gallery']]

export default function Navbar({ onBook }) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-45% 0px -50% 0px' })
    links.forEach(([id]) => { const el = document.getElementById(id); el && io.observe(el) })
    return () => io.disconnect()
  }, [])
  useEffect(() => {
    const k = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', k); return () => document.removeEventListener('keydown', k)
  }, [])
  return (
    <header className="nav-wrap">
      <nav className="nav glass" aria-label="Primary">
        <a href="#home" className="wordmark" aria-label={`${site.name} home`}>Hair<em>Verses</em></a>
        <ul className="nav-links">
          {links.map(([id, l]) => <li key={id}><a href={`#${id}`} aria-current={active === id ? 'true' : undefined}>{l}</a></li>)}
        </ul>
        <button className="btn btn-sm nav-book" onClick={onBook}>Book Appointment</button>
        <button className="icon-btn nav-toggle" aria-expanded={open} aria-controls="drawer" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X size={20} /> : <Menu size={20} />}</button>
      </nav>
      <div id="drawer" className={`drawer glass ${open ? 'is-open' : ''}`} hidden={!open}>
        {links.map(([id, l]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{l}</a>)}
        <button className="btn" onClick={() => { setOpen(false); onBook() }}>Book Appointment</button>
      </div>
    </header>
  )
}
