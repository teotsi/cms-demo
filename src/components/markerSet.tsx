import React from 'react';
import { useMapEvents } from 'react-leaflet';
import { useStore } from '../zustand/store';
import PointOfInterest from './PointOfInterest';

const MarketSet = ({ pois }: MarkerSetProps) => {
    const setPoint = useStore(state => state.setPoint);

    const map = useMapEvents({
        click({ latlng: { lat, lng: lon } }) {
            setPoint({ lat, lon });
        }
    })
    return (
        <>
            {
                pois.map((poi) => (
                    <PointOfInterest {...poi} key={poi.name} />
                ))
            }
        </>
    )
}

interface MarkerSetProps {
    pois: any[];
}
export default MarketSet;
