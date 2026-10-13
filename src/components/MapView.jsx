import { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { site } from '../data/siteConfig'

const pin = L.divIcon({ className: 'pin', html: '<span></span>', iconSize: [22, 22], iconAnchor: [11, 11] })

export default function MapView() {
  const [err, setErr] = useState(false)
  const { lat, lng, zoom } = site.map
  return (
    <div className="map-box">
      <MapContainer center={[lat, lng]} zoom={zoom} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
        {/* Public OSM tiles: fine for low-traffic sites; heavy traffic should use a tile provider (see README). */}
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" eventHandlers={{ tileerror: () => setErr(true) }} />
        <Marker position={[lat, lng]} icon={pin}><Popup>{site.name} (demo location)</Popup></Marker>
      </MapContainer>
      {err && <p className="map-err" role="status">Map tiles could not load. Use Get Directions instead.</p>}
    </div>
  )
}
