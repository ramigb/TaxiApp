import React, { ReactChildren } from 'react';
import { ReactComponent as Taxi } from '../../Assets/taxi.svg';
import { MARKER_HEIGHT, MARKER_WIDTH } from '../../constants';
interface IOwnProps {
    lat: number,
    lng: number,
    children: any
}

export default function GenericMarker(props: IOwnProps){
    const {children} = props;
    return (
    <>
        {children}
    </>
    )
}

