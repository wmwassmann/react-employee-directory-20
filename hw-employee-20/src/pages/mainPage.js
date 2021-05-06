
import React, { Component } from 'react';
import '../css/style.css';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import CardWrapper from '../components/Card/CardWrapper/CardWrapper';
import Character from '../components/Card/CharacterCard/App';






class MainPage extends Component {



    render() {

        return (
            <>
              <Header />  
                <Main>    
                    <Character />   
                    <CardWrapper/>             
                </Main>
            </>
        );
    }
}

export default MainPage;