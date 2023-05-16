import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { LatLngExpression } from 'leaflet'

function Map(props: { center: LatLngExpression; hasMarker: boolean }) {
  const { center, hasMarker } = props

  return (
    <MapContainer center={center} zoom={20} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ChangeView center={center} zoom={20} />
      {hasMarker && (
        <Marker position={center}>
          <Popup>This was the last location of the truck.</Popup>
        </Marker>
      )}
    </MapContainer>
  )
}

function ChangeView(props: { center: LatLngExpression; zoom: number }) {
  const map = useMap()
  map.setView(props.center, props.zoom)
  return null
}

export default Map
