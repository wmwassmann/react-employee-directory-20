import React from 'react';
import './style.css';
import FilterSearch from '../FilterSearch/Filter';
import DropDownButtons from '../DropDownButtons';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// This combines the filter search input and the filter button group of dropdowns and buttons. 
function DropDown({ inputValue, handleInputChange, resetButton, sortButton, children, handleSelectDropdown }) {
    return (
        <Row>
            <Col md={6} className='input-value'>
                <FilterSearch
                    inputValue={inputValue}
                    handleInputChange={handleInputChange} />
            </Col>
            <Col md={6} className="button-group">
                <DropDownButtons 
                    resetButton={resetButton} 
                    sortButton={sortButton} 
                    children={children} 
                    handleSelectDropdown={handleSelectDropdown} />
            </Col>
        </Row>

    )
}


export default DropDown;