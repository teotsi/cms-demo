import AccessPointIcon from '@app/assets/icons/AccessPoint';
import L from 'leaflet';
import ReactDOMServer from 'react-dom/server';
import BookIcon from '../assets/icons/Book';
import ComputerIcon from '../assets/icons/Computer';
import ImageIcon from '../assets/icons/Image';

const icons = {
    classroom: () => <span className="text-4xl text-center">🏛</span>,
    cslab: () => <ComputerIcon />,
    library: () => <BookIcon />,
    image: () => <ImageIcon />,
    'access-point': () => <AccessPointIcon />,
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