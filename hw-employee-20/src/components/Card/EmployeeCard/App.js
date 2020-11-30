import React, { useState, useEffect } from 'react';
import employees from '../../../utils/db.json';
import EmployeeCard from './EmployeeCard';



function Employee(){

    const [team, setTeam] = useState(employees);






    return (
        <div>
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


        </div>
        )
}

export default Employee;