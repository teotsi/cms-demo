import React from 'react'
import { Marker, Popup } from 'react-leaflet'
import { getCustomIcon } from '../utils/getIcon'

const IconPopup = ({ name, lat, lon, type, description }: IconPopupProps) => {
    return (
        <Marker position={[lat, lon]} {...(getCustomIcon(type) ? { icon: getCustomIcon(type) } : {})}>
            <Popup>
                {name}
                <br />
                {description}
            </Popup>
        </Marker>
    )


}

type IconPopupProps = Coordinates & {
    name: string,
    type: string,
    description: string,
}

export default IconPopup
