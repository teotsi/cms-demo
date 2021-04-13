import React, { useState } from 'react';
import { Button, Dropdown, Input, Loader } from 'semantic-ui-react';
import { registerPointOfInterest } from '../utils/apiService';
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
        registerPointOfInterest(customPoint).then(() => {
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
                            onChange={(e, { value }) => setAmenity(value as string)} />
                    </div>
                    <div className="flex items-center">
                        <Button
                            className="ml-2"
                            disabled={disabled}
                            primary
                            onClick={addPoi}>Add POI</Button>
                        <Loader active={loading} inline size='tiny' />
                    </div>
                </>
            </div>

        </div>
    )
}

export default PoiForm;
