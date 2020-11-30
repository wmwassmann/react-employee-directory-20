
import React, { Component } from 'react';
// import { BrowserRouter as Route } from 'react-router-dom';
import '../css/App.css';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import CardWrapper from '../components/Card/CardWrapper/CardWrapper';
import Employee from '../components/Card/EmployeeCard/App';
// import NavBar from '../components/NavBar';
import Filter from '../components/FilterSearch/Filter';
// import EmployeeManager from './employeeManager';
// import MainPage from './mainPage';




class MainPage extends Component {



    render() {

        return (
            <>
                <Main>
                    <Header />                  
                    <Filter />                                     
                    <CardWrapper>
                        <Employee />
                    </ CardWrapper>
                </Main>
            </>
        );
    }
}

export default MainPage;