import { Coords } from 'google-map-react';
import React, { Dispatch } from 'react';

interface ILocationContextInterface {
    userLocation: Coords,
    setUserLocation: Dispatch<any>
}
export const LocationContext = React.createContext<ILocationContextInterface | null>(null);
