import { ChevronDown, MapPin } from 'lucide-react'
import SmartImg from './SmartImg'
import { images } from '../data/siteConfig'

// Hair strands drawn as lines of verse: they trace once on load, then rest.
const strands = [
  'M-20 520C180 380 260 640 460 470S720 250 900 380 1160 560 1260 300',
  'M-20 580C200 450 300 700 500 530S760 320 940 450 1180 640 1280 380',
  'M-20 640C220 520 340 760 540 590S800 390 980 520 1200 720 1300 460',
  'M-20 700C240 590 380 820 580 650S840 460 1020 590 1220 800 1320 540',
]

export default function Hero({ onBook }) {
  return (
    <section id="home" className="hero" aria-labelledby="hero-h">
      <SmartImg className="hero-img" src={images.hero} alt="Stylist-finished hair with soft waves in warm light" eager width="1800" height="1200" />
      <div className="hero-shade" aria-hidden="true" />
      <svg className="strands" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        {strands.map((d, i) => <path key={i} d={d} pathLength="1" style={{ '--i': i }} />)}
      </svg>
      <div className="hero-copy">
        <p className="eyebrow">UNISEX HAIR ATELIER</p>
        <h1 id="hero-h"><span>Your Hair.</span> <em>Your Verses.</em></h1>
        <p className="lede">Discover your style. Express your story.</p>
        <div className="row">
          <button className="btn" onClick={onBook}>Book Appointment</button>
          <a className="btn btn-ghost" href="#services">Explore Services</a>
        </div>
      </div>
      <div className="hero-meta glass" aria-label="Salon experience">
        <MapPin size={16} aria-hidden="true" /><span>Walk-ins welcome, bookings preferred</span>
      </div>
      <a className="scroll-cue" href="#about" aria-label="Scroll to About"><ChevronDown size={20} /></a>
    </section>
  )
}
