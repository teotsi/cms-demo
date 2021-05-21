import useReset from '@app/hooks/useReset';
import React, { useState } from 'react';
import { Button, Input, Loader } from 'semantic-ui-react';
import { registerAccessPoint } from '../utils/apiService';
import { useStore } from '../zustand/store';

const AccessPointForm = () => {

    const customPoint = useStore(state => state.customPoint);
    const [ssid, setSsid] = useState(null);
    const [bssid, setBssid] = useState(null);
    const [level, setLevel] = useState(null);
    const [h, setH] = useState(null);
    const [loading, setLoading] = useState(false);
    const setPoint = useStore(state => state.setPoint);
    const fetchAccessPoints = useStore(state => state.fetchAccessPoints);
    const resetForm = useReset();
    const disabled = !(ssid && bssid && level && h);

    const addAccessPoint = () => {
        setLoading(true);
        registerAccessPoint({ ssid, bssid, level, h, position: customPoint }).then(() => {
            setLoading(false);
            resetForm([setSsid, setBssid, setLevel, setH]);
            fetchAccessPoints();
        });
    }
    return (
        <>
            <div className="flex items-center mb-2 w-3/5">
                <label className="font-bold mr-2" htmlFor="lat">Lat:</label>
                <Input className="flex-grow" type="number" name="lat" value={customPoint?.lat ?? ''} placeholder="Lat" onChange={(e) => setPoint({ ...customPoint, lat: parseFloat(e.target.value) })} />
            </div>
            <div className="flex items-center mb-2 w-3/5">
                <label className="font-bold mr-2" htmlFor="lon">Lon:</label>
                <Input className="flex-grow" type="number" name="lon" value={customPoint?.lon ?? ''} placeholder="Lon" onChange={(e) => setPoint({ ...customPoint, lon: parseFloat(e.target.value) })} />
            </div>

            <div className="flex items-center mb-2 w-3/5">
                <label className="font-bold mr-2" htmlFor="ssid">SSID:</label>
                <Input className="flex-grow" name="ssid" placeholder="ssid" onChange={(e) => setSsid(e.target.value)} />
            </div>
            <div className="flex items-center mb-2 w-3/5">
                <label className="font-bold mr-2" htmlFor="bssid">BSSID:</label>
                <Input className="flex-grow" name="bssid" placeholder="bssid" onChange={(e) => setBssid(e.target.value)} />
            </div>

            <div className="flex items-center mb-2 w-3/5">
                <label className="font-bold mr-2" htmlFor="level">Level:</label>
                <Input className="flex-grow" name="level" type="number" placeholder="level" onChange={(e) => setLevel(e.target.value)} />
            </div>
            <div className="flex items-center mb-2 w-3/5">
                <label className="font-bold mr-2" htmlFor="h">H:</label>
                <Input className="flex-grow" name="h" placeholder="h" onChange={(e) => setH(e.target.value)} />
            </div>
            <div className="flex items-center mb-5">
                <Button
                    className="ml-2"
                    disabled={disabled}
                    primary
                    onClick={addAccessPoint}>Add Access Point</Button>
                <Loader active={loading} inline size='tiny' />
            </div>
        </>
    )
}

export default AccessPointForm;
