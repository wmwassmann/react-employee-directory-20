import React from 'react';
import './style.css';
// import employees from '../../../utils/db.json';


// constructing the card to contain employees.  
// I've always like the idea of cards and more of a scrapbook-or page turning view. Personally I struggle to look at names on a list, so seeing them in card form really helps me.
// I applied this logic to my carousel selection process in the DnD Buddy application.  

// Using this to hold all of the employee information on a card.
function EmployeeCard({ name, title, phone, email, location}) {



    return (
        <div className='employee-card card-container'>
            <div className='text-color card-text'>
                <img src='' alt='helloworld'></img>

                <h2>{name}</h2>
                <h3>{title}</h3>
            </div>           
            <hr />
            <div className='employee-contact'>
                <ul>
                    <li>
                        <a href={`phone:${phone}`}>{phone}</a>
                    </li>
                    <li>
                        <a href={`email:${email}`}>Email To</a>
                    </li>
                    <li>
                        <a href={`https://www.google.com/maps/place/${location}`}>{location} Office</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default EmployeeCard;