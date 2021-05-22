import React from 'react';
import { useMapEvents } from 'react-leaflet';
import { useStore } from '../zustand/store';
import IconPopup from './IconPopup';

const MarketSet = ({ pois, accessPoints }: MarkerSetProps) => {
    const setPoint = useStore(state => state.setPoint);

    const map = useMapEvents({
        click({ latlng: { lat, lng: lon } }) {
            setPoint({ lat, lon });
        }
    })
    return (
        <>
            {
                [...(pois.map((poi) => (
                    <IconPopup type={poi.amenity} {...poi} key={poi.name} />
                ))), ...(accessPoints.map((ap) => (
                    <IconPopup {...ap.position} name={ap.ssid} type="access-point" key={ap.ssid} />
                )))]
            }
        </>
    )
}

interface MarkerSetProps {
    pois: PointOfInterest[];
    accessPoints: AccessPoint[];
}
export default MarketSet;
