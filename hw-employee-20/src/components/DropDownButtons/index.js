import React from 'react';
import './style.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'



function DropButtons({ sortButton, children, handleSelectDropdown, resetButton }) {
    return (
        <ButtonGroup className="margin full-width button-primary">
            <Button onClick={sortButton}>{children}</Button>

            <DropdownButton as={ButtonGroup} title="Title" id="bg-nested-dropdown" onSelect={handleSelectDropdown}>
                <Dropdown.Item eventKey="CEO">CEO</Dropdown.Item>
                <Dropdown.Item eventKey="Manager">Manager</Dropdown.Item>
                <Dropdown.Item eventKey="Designer">Designer</Dropdown.Item>
                <Dropdown.Item eventKey="Developer">Developer</Dropdown.Item>
                <Dropdown.Item eventKey="Debugging Specialist">Debugging Specialist</Dropdown.Item>
                <Dropdown.Item eventKey="Savior of the Internet">Savior of the Internet</Dropdown.Item>
                <Dropdown.Item eventKey="Dragon">Dragon</Dropdown.Item>
            </DropdownButton>

            <DropdownButton as={ButtonGroup} title="Location" id="bg-nested-dropdown" onSelect={handleSelectDropdown}>
                <Dropdown.Item eventKey="Los Angeles">Los Angeles</Dropdown.Item>
                <Dropdown.Item eventKey="Green Bay">Green Bay</Dropdown.Item>
                <Dropdown.Item eventKey="Milwaukee">Milwaukee</Dropdown.Item>
                <Dropdown.Item eventKey="Tampa Bay">Tampa Bay</Dropdown.Item>
            </DropdownButton>
            <Button onClick={resetButton}>Reset</Button>
        </ButtonGroup>


    )
}


export default DropButtons;