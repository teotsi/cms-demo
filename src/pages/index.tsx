import axios from 'axios';
import dynamic from 'next/dynamic';


const Home = ({ pois }) => {

  const Map = dynamic(
    () => import('../components/map'), // replace '@components/map' with your component's location
    { ssr: false } // This line is important. It's what prevents server-side render
  )
  
  return (
    <div style={{margin:'auto', width:'70%'}}>
      <Map pois={pois} />
    </div>
  )

}

export default Home;

export const getServerSideProps = async (ctx) => {
  const { data } = await axios.get("http://localhost:8081/poi");
  return { props: { pois: data } }
}