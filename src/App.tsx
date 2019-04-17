import React, {useState} from 'react';
import './App.css';
import GeoLocation from './Components/GeoLocation';
import Map from './Components/Map';
import SearchAddress from './Components/SearchAddress';
import { LocationContext } from './State/LocationContext';



function App() {

  const [userLocation, setUserLocation] = useState()

  return (
    <div className="App">
      <LocationContext.Provider value={{userLocation, setUserLocation}}>
        <SearchAddress />
        <GeoLocation />
        <Map />
      </LocationContext.Provider>
    </div>
  )
}

export default App;
