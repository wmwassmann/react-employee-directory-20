import React from 'react';
import Container from 'react-bootstrap/Container';


// Main portion of the html. 
function Main(props) {
    return (
        <main>
            <Container>
                {props.children}
            </Container>
        </main>
    )
}

export default Main;