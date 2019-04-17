import React, {createRef, useEffect, useState, } from 'react';
import useDebounce from '../../Hooks/useDebounce';
import { searchAddress } from '../../lib/API';
import ListResults from './ListResults';
import * as styles from './style.module.scss';

export default function SearchAddress(){
    const searchInputRef = createRef<HTMLInputElement>();
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);    
    const [isSearching, setIsSearching] = useState(false);
    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    useEffect(
        () => {          
          if (debouncedSearchTerm) {
            setIsSearching(true);            
            searchAddress(debouncedSearchTerm).then(results => {
              setIsSearching(false); 
              if(results.data && results.data.length){
                setResults(results.data);
              }else{
                setResults([])
              }              
            })            
          } else {
            setResults([]);
          }
        },
        [debouncedSearchTerm]
      );
    

    return(
        <div className={styles.wrapper}>
            <input type="text" placeholder={"Address search ..."} onChange={e => setSearchTerm(e.target.value)} disabled={isSearching} ref={searchInputRef}/>
            <ListResults results={results} setResults={setResults} searchInputRef={searchInputRef}/>
        </div>
    )
}
