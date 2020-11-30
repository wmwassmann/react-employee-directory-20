import React from 'react'
import Form from 'react-bootstrap/Form'




// inside of this function, I need to create a searchbar that basically everything.  
// Everything that I want to do funnels through this searchbar, validation, auto-fill, search, and maybe even add/subract - though that probably won't make
// a lot of sense, so I might make that it's own page. 

function FilterSearch({ inputValue, handleInputChange }) {
    return (
        <Form className='margin' 
            onSubmit={e => {
            e.preventDefault();
        }}>    
            <Form.Label>Search Employee</Form.Label>
            {/* this takes a value and handlesInputChange in the App.js onChange */}
            <Form.Control className='search-input' type='search' placeholder='Input Name' value={inputValue} onChange={handleInputChange}                
            />
        </Form>
    )
}

export default FilterSearch;
