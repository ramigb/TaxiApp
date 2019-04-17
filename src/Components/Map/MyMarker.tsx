import React from 'react';
import { MARKER_HEIGHT, MARKER_WIDTH } from '../..//constants';
import { ReactComponent as PersonMarker } from '../../Assets/person_marker.svg';
interface IOwnProps {
    lat: number,
    lng: number
}


export default function MyMarker(props: IOwnProps) {
    return <div>
        <PersonMarker height={MARKER_HEIGHT} width={MARKER_WIDTH} />
    </div>
}

