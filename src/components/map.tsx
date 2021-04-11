import "leaflet-defaulticon-compatibility";
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Map = ({ pois }: MapProps) => {

  const placeMarker = (e) => {
    console.log(e);
  } 

  return (
    <MapContainer onClick={placeMarker} center={[37.9940, 23.7325]} zoom={75} scrollWheelZoom={false} style={{ height: 400, zoom: '115%'}}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {
        pois.map((poi) => (
          <Marker position={[poi.lat, poi.lon]} key={poi.name}>
            <Popup>
              {poi.name}
        </Popup>
          </Marker>

        ))
      }
    </MapContainer>
  )
}

interface MapProps {
  pois: any[];
}
export default Map;