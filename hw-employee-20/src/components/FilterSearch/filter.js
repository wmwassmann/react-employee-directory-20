import React from 'react';
import Form from 'react-bootstrap/Form';
import './style.css';




function Filter({ inputValue, handleInputChange }) {
   
    return (
      <>
    
      
                      
            {/* this takes a value and handlesInputChange in the App.js onChange */}
            <Form.Control className='search-input' type='search' placeholder='Input Name' value={inputValue} onChange={handleInputChange} onSubmit={e => {
            e.preventDefault();
        }}/>              
           
            
        
     
    </>
   
    )
}


export default Filter;