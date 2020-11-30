import React from 'react'
import Form from 'react-bootstrap/Form'




// inside of this function, I need to create a searchbar that basically everything.  
// Everything that I want to do funnels through this searchbar, validation, auto-fill, search, and maybe even add/subract - though that probably won't make
// a lot of sense, so I might make that it's own page. 

function FilterSearch() {
    return (
        <Form>    
            <Form.Label>Search Employee</Form.Label>
            <Form.Control  />
        </Form>
    )
}

export default FilterSearch;
