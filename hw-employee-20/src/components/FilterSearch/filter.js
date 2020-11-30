import React, { useEffect, useState } from 'react';
import FilterSearch from '../../components/FilterSearch';



function Filter() {
    const [searchBar, setSearch] = useState('');
    const [warning, setWarning] = useState(false);
  
  
    const handleInputChange = event => {
      setSearch(event.target.value);
    }
  
  
    useEffect(() => {
      console.log('render');
      // whenever my input changes, we render the results - which will eventually be an error because this catches any invalid characters.
      // if (!searchBar) {
        
      // }
  
      
      // using the test() method to check string matches.
    if (!/^[a-zA-Z]*$/g.test(searchBar)) {
      // this will empty out the searchBar 
      setSearch('');
      setWarning(true);
      return;
    }
  
  
    }, [searchBar])
    return (
    <>
        <FilterSearch
        input={searchBar}
        // hooks in to the FilterSearch component      
        handleInputChange={handleInputChange} 
        />    
    
        {warning === false ? null : <h1>You Frucked Up.</h1>}
    </>
    )
}

export default Filter();