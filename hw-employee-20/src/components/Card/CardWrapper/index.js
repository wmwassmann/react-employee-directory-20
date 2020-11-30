import React from 'react';
import './style.css';


function CardWrapper({ children }) {
    return (
        <div className='card-wrapper'>
            {children}    
            <p>Card Wrapper</p>
        </div>
    )
}

export default CardWrapper;