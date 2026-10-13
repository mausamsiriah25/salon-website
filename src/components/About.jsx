import SmartImg from './SmartImg'
import { images } from '../data/siteConfig'
const traits = [['Craft', 'Precise technique, every time.'], ['Creativity', 'Looks made around you.'], ['Care', 'Healthy hair comes first.']]
export default function About() {
  return (
    <section id="about" className="section about" aria-labelledby="about-h">
      <div className="about-img"><SmartImg src={images.about} alt="Contemporary salon interior with mirrors and warm lighting" width="1000" height="1250" /></div>
      <div className="about-copy">
        <h2 id="about-h">A space for self-expression.</h2>
        <p>At HairVerses, we believe great hair is more than a look. It's a feeling, a mood, a story. Our approach brings together creativity, thoughtful care, and personal style to help you feel like yourself at your best.</p>
        <dl className="traits">{traits.map(([t, d]) => <div key={t}><dt>{t}</dt><dd>{d}</dd></div>)}</dl>
      </div>
    </section>
  )
}
