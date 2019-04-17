import React, {useContext, useEffect} from 'react';
import { geolocated, GeolocatedProps,  } from 'react-geolocated';
import { LocationContext } from '../../State/LocationContext';

function GeoLocation(props: GeolocatedProps) {
    const {coords} = props
    const {longitude=null, latitude=null} = coords || {};
    const context = useContext(LocationContext)

    
    useEffect(() => {        
        if(latitude && context){
            context.setUserLocation({lat: latitude, lng: longitude})
        }
    }, [latitude])
    
    return null;
}

export default geolocated()(GeoLocation);
