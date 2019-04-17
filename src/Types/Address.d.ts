export interface Address {
    id: number,
    type: string,
    zipCode: string,
    streetName: string,
    city: string,
    countryCode: string,
    latitude: float,
    longitude: float,
    hasStreetNumbers: boolean
}