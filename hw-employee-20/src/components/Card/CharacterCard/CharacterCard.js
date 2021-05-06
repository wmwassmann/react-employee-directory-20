import React from 'react';
import './style.css';
import LazyLoad from 'react-lazyload';




// constructing the card to contain character.  
// I've always like the idea of cards and more of a scrapbook-or page turning view. Personally I struggle to look at names on a list, so seeing them in card form really helps me.
// I applied this logic to my carousel selection process in the DnD Buddy application.  

// Using this to hold all of the Character information on a card.
function CharacterCard({ name, title, phone, email, img, location}) {



    return (
        <div className='character-card card-container'>
            <div className='text-color card-text'>
            <LazyLoad height="41">
                <img className='images' src={img} alt={name} />
            </LazyLoad >
                <h2>{name}</h2>
                <h3>{title}</h3>
            </div>           
            <hr />
            <div className='character-contact'>
                <ul>
                    <li>
                        <a className='contact-info' href={`phone:${phone}`}>{phone}</a>
                    </li>
                    <li>
                        <a className='contact-info' href={`email:${email}`}>Email To</a>
                    </li>
                    <li>
                        <a className='contact-info' href={`https://www.google.com/maps/place/${location}`}>{location} Office</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default CharacterCard;