import { useEffect, useRef, useState } from 'react'
import { X } from 'lucide-react'
import SmartImg from './SmartImg'
import { gallery } from '../data/gallery'

export default function Gallery() {
  const [sel, setSel] = useState(null)
  const trigger = useRef(null)
  const closeBtn = useRef(null)
  useEffect(() => {
    if (sel === null) return
    closeBtn.current?.focus()
    const k = (e) => e.key === 'Escape' && close()
    document.addEventListener('keydown', k); document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', k); document.body.style.overflow = '' }
  }, [sel])
  const close = () => { setSel(null); trigger.current?.focus() }
  return (
    <section id="gallery" className="section gallery" aria-labelledby="gal-h">
      <header className="sec-head"><h2 id="gal-h">A Glimpse of Our World.</h2></header>
      <ul className="gal-grid">
        {gallery.map((g, i) => (
          <li key={i} className={`g-${g.span || 'sq'}`}>
            <button onClick={(e) => { trigger.current = e.currentTarget; setSel(i) }} aria-label={`Enlarge: ${g.alt}`}>
              <SmartImg src={g.img} alt={g.alt} width="1000" height="1000" />
            </button>
          </li>
        ))}
      </ul>
      {sel !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Image viewer" onClick={close}>
          <button ref={closeBtn} className="icon-btn lb-close" onClick={close} aria-label="Close image"><X size={22} /></button>
          <figure onClick={(e) => e.stopPropagation()}><SmartImg src={gallery[sel].img} alt={gallery[sel].alt} /><figcaption>{gallery[sel].alt}</figcaption></figure>
        </div>
      )}
    </section>
  )
}
