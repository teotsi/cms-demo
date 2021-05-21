import React, { useState } from 'react';
import { Button, Dropdown, Input, Loader } from 'semantic-ui-react';
import { registerPointOfInterest } from '../utils/apiService';
import { useStore } from '../zustand/store';

const PoiForm = () => {

    const customPoint = useStore(state => state.customPoint);
    const [name, setName] = useState(null);
    const [amenity, setAmenity] = useState(null);
    const setPoint = useStore(state => state.setPoint);
    const fetchPois = useStore(state => state.fetchPois);
    const resetForm = useStore(state => state.resetForm);
    const disabled = !(name && amenity);
    const [loading, setLoading] = useState(false);
    const poiOptions = [
        { key: 1, text: 'classroom', value: 'classroom' },
        { key: 2, text: 'cslab', value: 'cslab' },
        { key: 3, text: 'gate', value: 'gate' },
        { key: 4, text: 'hall', value: 'hall' },
        { key: 5, text: 'library', value: 'library' },
        { key: 6, text: 'office', value: 'office' },
        { key: 7, text: 'restaurant', value: 'restaurant' },
        { key: 8, text: 'service', value: 'service' },
        { key: 9, text: 'store', value: 'store' },
        { key: 10, text: 'toilets', value: 'toilets' },
    ]

    const addPoi = () => {
        setLoading(true);
        registerPointOfInterest({ ...customPoint, name, amenity }).then(() => {
            setLoading(false);
            resetForm();
            fetchPois();
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
                <label className="font-bold mr-2" htmlFor="name">Name:</label>
                <Input className="flex-grow" name="name" placeholder="name" onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="flex items-center mb-2 w-3/5">
                <label className="font-bold mr-2" htmlFor="name">Amenity:</label>
                <Dropdown className="w-30 my-2 flex-grow"
                    selection
                    options={poiOptions}
                    scrolling
                    onChange={(e, { value }) => setAmenity(value as string)} />
            </div>
            <div className="flex items-center mb-5">
                <Button
                    className="ml-2"
                    disabled={disabled}
                    primary
                    onClick={addPoi}>Add POI</Button>
                <Loader active={loading} inline size='tiny' />
            </div>
        </>
    )
}

export default PoiForm;
