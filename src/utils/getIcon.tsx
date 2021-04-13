import L from 'leaflet';
import ReactDOMServer from 'react-dom/server';
import BookIcon from '../assets/icons/Book';
import SchoolIcon from '../assets/icons/School';

const icons = {
    classroom: ()=><SchoolIcon />,
    library: ()=><BookIcon />
}

export const getCustomIcon = (type: string) => {
    const Icon = icons[type.toLowerCase()];
    console.log(Icon);
    if (!Icon) return undefined;
    return L.divIcon({
        html: ReactDOMServer.renderToString(<Icon />),
        iconSize: new L.Point(44, 44),
        className: 'custom-icon'
    })
}