import React from 'react';
import './style.css';




function EmployeeCard({ name, title, phone, email, location}) {
    return (
        <div className='employee-card'>
            <div className='text-color'>
                <img src='' alt='helloworld'></img>

                <h2>{name}</h2>
                <h2>{title}</h2>
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