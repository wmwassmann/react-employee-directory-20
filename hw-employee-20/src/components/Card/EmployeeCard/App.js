import React, { useState, useEffect } from 'react';
import employees from '../../../utils/db.json';
import EmployeeCard from './EmployeeCard';
import CardWrapper from '../CardWrapper/CardWrapper';
import FilterSearch from '../../FilterSearch/Filter';
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



    return (
        <div>
            <Row>
                <Col md={6}>
                    <div className='search-bar'>
                        <FilterSearch
                            inputValue={searchBar}
                            handleInputChange={handleInputChange}                            
                            sortBtn={sortNames}
                            children={nameSort === "AZ" ? "Sort A–Z" : "Sort Z–A"} />
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