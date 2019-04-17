import GoogleMapReact from 'google-map-react';
import React, { useContext, useState } from 'react';
import { MAP_ZOOM, TAXI_PULL_DELAY} from '../../constants';
import useInterval from '../../Hooks/useInterval';
import { getVehicles } from '../../lib/API';
import { LocationContext } from '../../State/LocationContext';
import Marker from './MyMarker';
import * as styles from './style.module.scss';
import TaxiMarker from './TaxiMarker';

interface IOwnProps {
  zoom?: number
}

interface ITaxi {
  lat: number,
  lng: number,
  brand: string,
}

export default function Map(props: IOwnProps) {
  const { zoom = MAP_ZOOM } = props;
  const context = useContext(LocationContext)
  const [taxisAround, setTaxisAround] = useState([])

  useInterval(() => {
    if (context) {
      getVehicles(context.userLocation).then(taxis => {
        setTaxisAround(taxis.data);
      })
    }
  }, TAXI_PULL_DELAY)

  if (!context || !context.userLocation) {
    return null;
  }

  return <div className={styles.mapContainer}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API || "" }}
      center={context.userLocation}
      defaultZoom={zoom}>

      <Marker lat={context.userLocation.lat} lng={context.userLocation.lng} />
      
      {!taxisAround.length && (        
        <div className={styles.loadingTaxis}>Loading Nearby Taxis Please Wait ...</div>        
      )}

      {taxisAround.map((taxi: ITaxi, index: number) => (
        <TaxiMarker lat={taxi.lat} lng={taxi.lng} brand={taxi.brand} key={index} />
      ))}

    </GoogleMapReact>
  </div>
}

Map
