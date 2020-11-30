import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form'



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
               

        <Form className='margin' 
            onSubmit={e => {
            e.preventDefault();
        }}>    
            <Form.Label>Search Employee</Form.Label>
            {/* this takes a value and handlesInputChange in the App.js onChange */}
            <Form.Control className='search-input' type='search' placeholder='Input Name' value={searchBar} onChange={handleInputChange}                              
            />
              
        </Form>
          {warning === false ? null : <h1>You Frucked Up.</h1>} 
    </>



    )
}

export default Filter;