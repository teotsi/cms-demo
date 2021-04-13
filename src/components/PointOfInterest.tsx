import React from 'react'
import { Marker, Popup } from 'react-leaflet'
import { getCustomIcon } from '../utils/getIcon'

const PointOfInterest = ({ name, lat, lon, amenity }: PointOfInterest) => {
    return (
        <Marker position={[lat, lon]} {...(getCustomIcon(amenity) ? { icon: getCustomIcon(amenity) } : {})}>
            <Popup>
                {name}
            </Popup>
        </Marker>
    )


}

export default PointOfInterest
