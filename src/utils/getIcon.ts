import L from 'leaflet';

export const getCustomIcon = () => {
    return L.icon({
        iconUrl: require("../assets/icons/School.svg"),
        iconRetinaUrl: require("../assets/icons/School.svg"),
        iconAnchor: null,
        popupAnchor: null,
        shadowUrl: null,
        shadowSize: null,
        shadowAnchor: null,
        iconSize: new L.Point(20,20),
        className: 'leaflet-div-icon'
    })
}