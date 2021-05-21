import L from 'leaflet';
import ReactDOMServer from 'react-dom/server';
import BookIcon from '../assets/icons/Book';
import ComputerIcon from '../assets/icons/Computer';

const icons = {
    classroom: ()=><span className="text-4xl text-center">🏛</span>,
    cslab: ()=><ComputerIcon />,
    library: ()=><BookIcon />
}

export const getCustomIcon = (type: string) => {
    const Icon = icons[type.toLowerCase()];
    if (!Icon) return undefined;
    return L.divIcon({
        html: ReactDOMServer.renderToString(<Icon />),
        iconSize: new L.Point(44, 44),
        className: 'custom-icon'
    })
}