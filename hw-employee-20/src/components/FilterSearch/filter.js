import React from 'react';
import Form from 'react-bootstrap/Form';
import './style.css';




function Filter({ inputValue, handleInputChange }) {
   
    return (
      <>
    
       <Form className='margin has-search form-control search-bar' 
            onSubmit={e => {
            e.preventDefault();
        }}>    
            <Form.Label className='form-label'>Search Employee</Form.Label>
            {/* this takes a value and handlesInputChange in the App.js onChange */}
            <Form.Control className='search-input' type='search' placeholder='Input Name' value={inputValue} onChange={handleInputChange} />              
           
            
        </Form>
     
    </>
   
    )
}


export default Filter;