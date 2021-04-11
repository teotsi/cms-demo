import "leaflet-defaulticon-compatibility";
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer } from 'react-leaflet';
import MarketSet from "./markerSet";

const Map = ({ pois }: MapProps) => (
  <MapContainer center={[37.9940, 23.7325]} zoom={75} scrollWheelZoom={false} style={{ height: 400, zoom: '100%' }}>
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <MarketSet pois={pois} />
  </MapContainer>
)

interface MapProps {
  pois: any[];
}
export default Map;