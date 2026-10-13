import { useEffect, useRef, useState } from 'react'
import { X } from 'lucide-react'
import { site } from '../data/siteConfig'
import { services } from '../data/services'

const Field = ({ id, label, err, children }) => (
  <div className="field"><label htmlFor={id}>{label}</label>{children}{err && <span className="err" id={`${id}-e`}>{err}</span>}</div>
)

const empty = { name: '', phone: '', service: '', date: '', time: '', message: '' }

export default function BookingModal({ open, service, onClose }) {
  const [f, setF] = useState(empty)
  const [errs, setErrs] = useState({})
  const [sent, setSent] = useState(false)
  const first = useRef(null), box = useRef(null), prev = useRef(null)

  useEffect(() => {
    if (!open) return
    prev.current = document.activeElement
    setF({ ...empty, service: service || '' }); setErrs({}); setSent(false)
    document.body.style.overflow = 'hidden'
    setTimeout(() => first.current?.focus(), 30)
    const key = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'Tab') { // keep focus inside dialog
        const els = box.current.querySelectorAll('button,input,select,textarea,a[href]')
        const a = els[0], z = els[els.length - 1]
        if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus() }
        else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus() }
      }
    }
    document.addEventListener('keydown', key)
    return () => { document.removeEventListener('keydown', key); document.body.style.overflow = ''; prev.current?.focus?.() }
  }, [open, service])

  if (!open) return null
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })
  const submit = (e) => {
    e.preventDefault()
    const x = {}
    if (f.name.trim().length < 2) x.name = 'Enter your name.'
    if (!/^[+\d][\d\s-]{6,}$/.test(f.phone.trim())) x.phone = 'Enter a valid phone number.'
    if (!f.service) x.service = 'Choose a service.'
    if (!f.date) x.date = 'Pick a preferred date.'
    if (!f.time) x.time = 'Pick a preferred time.'
    setErrs(x)
    if (Object.keys(x).length) return
    if (!site.whatsapp) return setSent('unconfigured')
    const text = `Booking inquiry for ${site.name}\nName: ${f.name}\nPhone: ${f.phone}\nService: ${f.service}\nDate: ${f.date}\nTime: ${f.time}${f.message ? `\nNote: ${f.message}` : ''}`
    window.open(`https://api.whatsapp.com/send?phone=${site.whatsapp}&text=${encodeURIComponent(text)}`, '_blank', 'noopener')
    setSent('ok')
  }
  return (
    <div className="modal-bg" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal glass" role="dialog" aria-modal="true" aria-labelledby="bk-h" ref={box}>
        <button className="icon-btn m-close" onClick={onClose} aria-label="Close booking form"><X size={20} /></button>
        <h2 id="bk-h">Booking inquiry</h2>
        <p className="muted">This sends a request only. The salon will confirm your appointment.</p>
        {sent ? (
          <div role="status" className="sent">
            {sent === 'ok' ? <p>WhatsApp opened with your inquiry. Send the message to complete it. Your appointment is confirmed only after the salon replies.</p>
              : <p>WhatsApp booking is not set up yet. Add the salon's number in <code>siteConfig.js</code> to enable it.</p>}
            <button className="btn btn-sm" onClick={onClose}>Close</button>
          </div>
        ) : (
          <form onSubmit={submit} noValidate>
            <Field id="b-name" label="Name" err={errs.name}><input ref={first} id="b-name" value={f.name} onChange={set('name')} autoComplete="name" aria-invalid={!!errs.name} aria-describedby={errs.name ? 'b-name-e' : undefined} /></Field>
            <Field id="b-phone" label="Phone number" err={errs.phone}><input id="b-phone" type="tel" value={f.phone} onChange={set('phone')} autoComplete="tel" aria-invalid={!!errs.phone} aria-describedby={errs.phone ? 'b-phone-e' : undefined} /></Field>
            <Field id="b-service" label="Service" err={errs.service}>
              <select id="b-service" value={f.service} onChange={set('service')} aria-invalid={!!errs.service}><option value="">Select a service</option>{services.map((s) => <option key={s.id}>{s.name}</option>)}</select>
            </Field>
            <div className="two">
              <Field id="b-date" label="Preferred date" err={errs.date}><input id="b-date" type="date" min={new Date().toISOString().slice(0, 10)} value={f.date} onChange={set('date')} aria-invalid={!!errs.date} /></Field>
              <Field id="b-time" label="Preferred time" err={errs.time}><input id="b-time" type="time" value={f.time} onChange={set('time')} aria-invalid={!!errs.time} /></Field>
            </div>
            <Field id="b-msg" label="Message (optional)"><textarea id="b-msg" rows="3" value={f.message} onChange={set('message')} /></Field>
            <button className="btn" type="submit">Send inquiry</button>
          </form>
        )}
      </div>
    </div>
  )
}
