import axios from 'axios';
import React, { useState } from 'react';
import { Button, Dropdown, Input, Loader } from 'semantic-ui-react';
import { useStore } from '../zustand/store';

const PoiForm = () => {

    const customPoint = useStore(state => state.customPoint);
    const setName = useStore(state => state.setPointName);
    const setAmenity = useStore(state => state.setPointAmenity);
    const fetchPois = useStore(state => state.fetchPois);
    const resetForm = useStore(state => state.resetForm);
    const disabled = !(customPoint?.name && customPoint?.amenity);
    const [loading, setLoading] = useState(false);
    const options = [
        { key: 1, text: 'classroom', value: 1 },
        { key: 2, text: 'cslab', value: 2 },
        { key: 3, text: 'gate', value: 3 },
        { key: 4, text: 'hall', value: 4 },
        { key: 5, text: 'library', value: 5 },
        { key: 6, text: 'office', value: 6 },
        { key: 7, text: 'restaurant', value: 7 },
        { key: 8, text: 'service', value: 8 },
        { key: 9, text: 'store', value: 9 },
        { key: 10, text: 'toilets', value: 10 },
    ]

    const addPoi = () => {
        setLoading(true);
        axios.post("http://localhost:8081/poi", customPoint)
            .then((res) => {
                setLoading(false);
                resetForm();
                fetchPois();
            });
    }
    return (
        <div className="mt-5 flex justify-center">
            <div>
                <h3 className="text-xl font-semibold">Click on the map to create a new POI</h3>
                <>
                    <p>Lat: <span className="font-bold">{customPoint?.lat ?? '----'}</span></p>
                    <p>Lon: <span className="font-bold">{customPoint?.lon ?? '----'}</span></p>
                    <Input className="mt-2" placeholder="name" onChange={(e) => setName(e.target.value)} />
                    <div>

                        <Dropdown className="w-30 my-2"
                            selection
                            options={options}
                            scrolling
                            onChange={(e, { value }) => setAmenity(options[value as number].text)} />
                    </div>
                    <div className="flex items-center">
                        <Button
                          className="ml-2" 
                          disabled={disabled}
                          primary 
                          onClick={addPoi}>Add POI</Button>
                        <Loader active={loading} inline size='tiny'/>
                    </div>
                </>
            </div>

        </div>
    )
}

export default PoiForm;
