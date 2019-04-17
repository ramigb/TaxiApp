import React, {Dispatch, RefObject, SetStateAction, useContext} from 'react';
import { LocationContext } from '../../State/LocationContext';
import { Address } from '../../Types/Address';
import * as styles from './style.module.scss';

interface IOwnProps{
    results: Address[]
    setResults: Dispatch<SetStateAction<never[]>>    
    searchInputRef: RefObject<HTMLInputElement>
}

const renderAddress = (address: Address) => (
    <>
        <span className={styles.streetName}>{address.streetName}</span>
        <span className={styles.zipAndCity}>
            {address.zipCode} - 
            {address.city} - 
            {address.countryCode}
        </span>        
    </>
)


export default function ListResult(props: IOwnProps){
    const {results, setResults, searchInputRef} = props;
    const context = useContext(LocationContext);

    const handleAddressClick = (address: Address) => () => {
        if(context){
            context.setUserLocation({
                lat: address.latitude,
                lng: address.longitude
            })
            
            if(searchInputRef.current){
                searchInputRef.current.value = '';
                searchInputRef.current.placeholder = address.streetName;
            }            
            setResults([]);
        }
    }

    return (
        <div className={styles.addressList}>
        {results.map((address: Address) => (
            <div className={styles.addressResult} onClick={handleAddressClick(address)} key={address.id}>
                {renderAddress(address)}
            </div>
        ))}
        </div>
    )
}
