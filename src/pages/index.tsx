import dynamic from 'next/dynamic';
import PoiForm from '../components/poiForm';

const Map = dynamic(
  () => import('../components/map'), // replace '@components/map' with your component's location
  { ssr: false } // This line is important. It's what prevents server-side render
);

const Home = () => {
  return (
    <div className="mx-auto w-3/5">
      <div>    
        <Map />
      </div>
      <PoiForm />
    </div>
  )

}

export default Home;