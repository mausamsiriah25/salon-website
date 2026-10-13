import { lazy, Suspense } from 'react'
import { Phone, Navigation } from 'lucide-react'
import { site } from '../data/siteConfig'
const MapView = lazy(() => import('./MapView'))

export default function Location() {
  const dir = `https://www.openstreetmap.org/directions?to=${site.map.lat}%2C${site.map.lng}`
  return (
    <section id="location" className="section location" aria-labelledby="loc-h">
      <div className="loc-info">
        <h2 id="loc-h">Find Your Way to Us.</h2>
        <address>{site.address}</address>
        <dl className="hours">{site.hours.map(([d, h]) => <div key={d}><dt>{d}</dt><dd>{h}</dd></div>)}</dl>
        <p>{site.phone || 'Phone number: add in siteConfig.js'}</p>
        <div className="row">
          <a className="btn btn-sm" href={dir} target="_blank" rel="noreferrer"><Navigation size={16} /> Get Directions</a>
          {site.phone && <a className="btn btn-sm btn-ghost" href={`tel:${site.phone.replace(/[^\d+]/g, '')}`}><Phone size={16} /> Call Salon</a>}
        </div>
      </div>
      <Suspense fallback={<div className="map-box map-load">Loading map…</div>}><MapView /></Suspense>
    </section>
  )
}
