import React from 'react'
import { Marker, Popup } from 'react-leaflet'

const PointOfInterest = ({ name, lat, lon }) => {
    return (
        <Marker position={[lat, lon]}>
            <Popup>
                {name}
            </Popup>
        </Marker>
    )


}

export default PointOfInterest
