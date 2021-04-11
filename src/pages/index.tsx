import dynamic from 'next/dynamic';
import PoiForm from '../components/poiForm';

const Home = () => {
  const Map = dynamic(
    () => import('../components/map'), // replace '@components/map' with your component's location
    { ssr: false } // This line is important. It's what prevents server-side render
  )
  return (
    <div style={{ margin: 'auto', width: '70%' }}>
      <Map />
      <PoiForm/>
    </div>
  )

}

export default Home;

export const getServerSideProps = async (ctx) => {
  return { props: {} }
}