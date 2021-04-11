import React, { useState } from 'react';
import { useMapEvents } from 'react-leaflet';
import PointOfInterest from './PointOfInterest';

const MarketSet = ({ pois }: MarkerSetProps) => {
    const [markers, setMarkers] = useState(pois);

    const map = useMapEvents({
        click({latlng: {lat, lng: lon}}) {
          const newMarker = {lat, lon}
          setMarkers([...markers, newMarker]);
        }
      })
    return (
        <>
            {
                markers.map((poi) => (
                    <PointOfInterest {...poi} key={poi.name}/>
                ))
            }
        </>
    )
}

interface MarkerSetProps {
    pois: any[];
}
export default MarketSet;
