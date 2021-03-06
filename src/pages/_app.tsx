import Head from "next/head";
import 'semantic-ui-css/semantic.min.css';
import '../assets/tailwind.css';
import { useStore } from "../zustand/store";

const BaseApp = ({ Component, pageProps }) => {
    const fetchPois = useStore(state => state.fetchPois);
    const fetchAccessPoints = useStore(state => state.fetchAccessPoints);
    const fetchImages = useStore(state => state.fetchImages);
    fetchPois();
    fetchAccessPoints();
    fetchImages();

    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
                    integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
                    crossOrigin="" />
                <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
                    integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
                    crossOrigin=""></script>
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default BaseApp;