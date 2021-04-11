import React from 'react';
import { Input } from 'semantic-ui-react';
import { useStore } from '../zustand/store';

const PoiForm = () => {
    
  const customLat = useStore(state => state.customLat);
  const customLon = useStore(state => state.customLon);
  const setLat = useStore(state => state.setLat);
  const setLon = useStore(state => state.setLon);
  
    return (
        <div style={{ display: 'flex' }}>
        <Input placeholder="Lat" defaultValue={customLat} onChange={(e)=>setLat(e.target.value)}/>
        <Input placeholder="Lon" defaultValue={customLon} onChange={(e)=>setLon(e.target.value)}/>
      </div>
    )
}

export default PoiForm;
