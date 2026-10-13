import SmartImg from './SmartImg'
import { images } from '../data/siteConfig'
export default function FinalCTA({ onBook }) {
  return (
    <section className="cta" aria-labelledby="cta-h">
      <SmartImg src={images.cta} alt="" width="1600" height="900" />
      <div className="cta-shade" aria-hidden="true" />
      <div className="cta-copy">
        <h2 id="cta-h">Ready for your next chapter?</h2>
        <p>Let's find a style that feels like you.</p>
        <button className="btn" onClick={onBook}>Book Your Appointment</button>
      </div>
    </section>
  )
}
