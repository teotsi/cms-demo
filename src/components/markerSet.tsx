import React from 'react';
import { useMapEvents } from 'react-leaflet';
import { useStore } from '../zustand/store';
import IconPopup from './IconPopup';

const MarketSet = ({ pois, accessPoints, images }: MarkerSetProps) => {
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
                ))), ...(images.map(img => (
                    <IconPopup type="image" lat={img.lat} lon={img.lon} name={img.classId} key={img.classId} />
                )))]
            }
        </>
    )
}

interface MarkerSetProps {
    pois: PointOfInterest[];
    accessPoints: AccessPoint[];
    images: Image[];
}
export default MarketSet;
