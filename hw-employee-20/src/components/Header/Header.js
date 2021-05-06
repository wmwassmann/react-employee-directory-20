import React from 'react'
import './style.css'
import Container from 'react-bootstrap/Container';

function Header() {
    return (
        <header className="bg--image">
            <div className='header-title'>
                <Container>
                    <h1 className="text-center">Employee Directory</h1>
                </Container>
            </div>
        </header>
    )
}

export default Header;
