import React, { useState } from 'react';
import { Button, Dropdown, Input, Loader } from 'semantic-ui-react';
import { registerPointOfInterest } from '../utils/apiService';
import { useStore } from '../zustand/store';

const PoiForm = () => {

    const customPoint = useStore(state => state.customPoint);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [icon, setIcon] = useState('');
    const [amenity, setAmenity] = useState(null);
    const setPoint = useStore(state => state.setPoint);
    const fetchPois = useStore(state => state.fetchPois);
    const disabled = !(name && amenity);
    const [loading, setLoading] = useState(false);
    const poiOptions = [
        { key: 1, text: 'utility', value: 'utility' },
        { key: 2, text: 'commercial', value: 'commercial' },
    ]

    const addPoi = () => {
        setLoading(true);
        registerPointOfInterest({ ...customPoint, name, amenity, description, icon }).then(() => {
            setLoading(false);
            setName('');
            setAmenity('');
            setDescription('');
            setIcon('');
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
                <Input className="flex-grow" name="name" value={name} placeholder="name" onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="flex items-center mb-2 w-3/5">
                <label className="font-bold mr-2" htmlFor="name">Description:</label>
                <Input className="flex-grow" name="description" value={description} placeholder="description" onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div className="flex items-center mb-2 w-3/5">
                <label className="font-bold mr-2" htmlFor="name">Icon:</label>
                <Input className="flex-grow" name="icon" value={icon} placeholder="icon" onChange={(e) => setIcon(e.target.value)} />
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
