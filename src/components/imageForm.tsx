import React, { useState } from 'react';
import { Button, Input, Loader } from 'semantic-ui-react';
import { registerImage } from '../utils/apiService';
import { useStore } from '../zustand/store';

const ImageForm = () => {

    const customPoint = useStore(state => state.customPoint);
    const [classId, setClassId] = useState('');
    const [description, setDescription] = useState('');
    const setPoint = useStore(state => state.setPoint);
    const fetchImages = useStore(state => state.fetchImages);
    const disabled = !(classId && description);
    const [loading, setLoading] = useState(false);

    const addImage = () => {
        setLoading(true);
        registerImage({ ...customPoint, classId, description }).then(() => {
            setLoading(false);
            setClassId('');
            setDescription('');
            fetchImages();
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
                <label className="font-bold mr-2" htmlFor="name">Class ID:</label>
                <Input className="flex-grow" name="classId" value={classId} placeholder="classId" onChange={(e) => setClassId(e.target.value)} />
            </div>
            <div className="flex items-center mb-2 w-3/5">
                <label className="font-bold mr-2" htmlFor="name">Description:</label>
                <Input className="flex-grow" name="description" value={description} placeholder="description" onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div className="flex items-center mb-5">
                <Button
                    className="ml-2"
                    disabled={disabled}
                    primary
                    onClick={addImage}>Add Image</Button>
                <Loader active={loading} inline size='tiny' />
            </div>
        </>
    )
}

export default ImageForm;
