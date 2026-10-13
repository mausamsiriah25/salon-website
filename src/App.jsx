import { useState, useCallback } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import StylistSection from './components/StylistSection'
import Gallery from './components/Gallery'
import Location from './components/Location'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import BookingModal from './components/BookingModal'

export default function App() {
  const [booking, setBooking] = useState({ open: false, service: '' })
  const openBooking = useCallback((service = '') => setBooking({ open: true, service }), [])
  const close = useCallback(() => setBooking((b) => ({ ...b, open: false })), [])
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Navbar onBook={() => openBooking()} />
      <main id="main">
        <Hero onBook={() => openBooking()} />
        <About />
        <Services onBook={openBooking} />
        <StylistSection />
        <Gallery />
        <Location />
        <FinalCTA onBook={() => openBooking()} />
      </main>
      <Footer />
      <BookingModal open={booking.open} service={booking.service} onClose={close} />
    </>
  )
}
