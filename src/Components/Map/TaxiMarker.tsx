import React from 'react';
import { ReactComponent as Taxi } from '../../Assets/taxi.svg';
import { MARKER_HEIGHT, MARKER_WIDTH } from '../../constants';
interface IOwnProps {
    lat: number,
    lng: number,
    key: number,
    brand: string
}

export default function TaxiMarker(props: IOwnProps){
    const {brand} = props;
    return (
    <>
        {brand}
        <Taxi height={MARKER_HEIGHT} width={MARKER_WIDTH} />
    </>
    )
}

