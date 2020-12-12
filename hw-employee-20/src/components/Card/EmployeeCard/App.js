import React, { useState, useEffect } from 'react';
import Dropdown from '../../DropDown/Dropdown.js'
import employees from '../../../utils/db.json';
import EmployeeCard from './EmployeeCard';
import CardWrapper from '../CardWrapper/CardWrapper';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// this function imports the HTML section from EmployeeCard, while this 
function Employee() {
    const [team, setTeam] = useState(employees);
    const [searchBar, setSearch] = useState('');
    const [nameSort, setNameSort] = useState("AZ");


    const handleInputChange = event => {
        setSearch(event.target.value);
    };

    const sortNames = () => {
        switch (nameSort) {
            case 'AZ':
                setTeam([...team].sort((a, b) => (a.name > b.name) ? 1 : -1));
                setNameSort("ZA")
                break;
            case 'ZA':
                setTeam([...team].sort((a, b) => (a.name < b.name) ? 1 : -1))
                setNameSort("AZ")
                break;
            default:
                return;
        }
    }

    useEffect(() => {
        if (!searchBar) {
            return setTeam(employees);
        }
        const results = team.filter(person =>
            person.name.includes(searchBar.toLowerCase())
        );
        setTeam(results);
    }, [searchBar])

    const handleSelectDropdown = (eventKey) => {

        switch (eventKey) {
            case "CEO":
                setTeam([...employees].filter(person =>
                    person.title.includes("CEO")
                ));
                break;
            case "Manager":
                setTeam([...employees].filter(person =>
                    person.title.includes("Manager")
                ));
                break;
            case "Designer":
                setTeam([...employees].filter(person =>
                    person.title.includes("Designer")
                ));
                break;
            case "Developer":
                setTeam([...employees].filter(person =>
                    person.title.includes("Developer")
                ));
                break;
            case "Debugging Specialist":
                setTeam([...employees].filter(person =>
                    person.title.includes("Debugging Specialist")
                ));
                break;
            case "Savior of the Internet":
                setTeam([...employees].filter(person =>
                    person.title.includes("Savior of the Internet")
                ));
                break;
            case "Dragon":
                setTeam([...employees].filter(person =>
                    person.title.includes("Dragon")
                ));
                break;
            case "Los Angeles":
                setTeam([...employees].filter(person =>
                    person.location.includes("Los Angeles")
                ));
                break;
            case "Tampa Bay":
                setTeam([...employees].filter(person =>
                    person.location.includes("Tampa Bay")
                ));
                break;
            case "Milwaukee":
                setTeam([...employees].filter(person =>
                    person.location.includes("Milwaukee")
                ));
                break;
            case "Green Bay":
                setTeam([...employees].filter(person =>
                    person.location.includes("Green Bay")
                ));
                break;
            default:
                resetTeam();
                return;

        }
    }

    const resetTeam = () => {
        setTeam(employees);
        setSearch("");
    }
    return (
        <div>
            <Row>
                <Col md={6}>
                    <div className='search-bar'>

                        <Dropdown
                            handleInputChange={handleInputChange}
                            sortBtn={sortNames}
                            resetBtn={resetTeam}
                            handleSelectDropdown={handleSelectDropdown}
                            children={nameSort === "AZ" ? " Sort Descending " : " Sort Ascending "}
                        />

                    </div>
                </Col>
            </Row>

            <div>
                <CardWrapper >
                    {team.map(person => (
                        <EmployeeCard
                            key={person.id}
                            img={person.img}
                            name={person.name}
                            title={person.title}
                            location={person.location}
                            phone={person.phone}
                            email={person.email}
                        />

                    ))}
                </ CardWrapper>
            </div>
        </div>
    )
}

export default Employee;