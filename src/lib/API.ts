import axios from 'axios';
import { Coords } from 'google-map-react';

const ENDPOINT_URL = 'https://cabonline-frontend-test.herokuapp.com/';

export function searchAddress(q: string): Promise<any>{
    return axios.get(`${ENDPOINT_URL}addresses`, {params: {q}});
}


export function getVehicles(coords: Coords): Promise<any>{
    const params = {
        lat: coords.lat.toString(),
        lng: coords.lng.toString()
    }
    return axios.get(`${ENDPOINT_URL}vehicles`, {params});
}