import dynamic from 'next/dynamic';
import { useState } from 'react';
import { Dropdown } from 'semantic-ui-react';
import AccessPointForm from '../components/accessPointForm';
import ImageForm from '../components/imageForm';
import PoiForm from '../components/poiForm';

const Map = dynamic(
  () => import('../components/map'), // replace '@components/map' with your component's location
  { ssr: false } // This line is important. It's what prevents server-side render
);

const Home = () => {

  const [type, setType] = useState('poi');
  const typeOptions = [
    { key: 1, text: 'POI', value: 'poi' },
    { key: 2, text: 'Access Point', value: 'access-point' },
    { key: 3, text: 'Image', value: 'image' }
  ]

  return (
    <div className="mx-auto w-3/5">
      <div>
        <Map />
      </div>
      <div className="mt-5 flex flex-col items-center">
        <h3 className="text-xl font-semibold mb-2">Click on the map to create a new... <Dropdown
          selection
          defaultValue="poi"
          onChange={(e, { value }) => setType(value as string)}
          options={typeOptions} /></h3>
        {
          { poi: <PoiForm />, 
            'access-point': <AccessPointForm />,
            image: <ImageForm />
          }[type]
        }
      </div>
    </div>
  )

}

export default Home;