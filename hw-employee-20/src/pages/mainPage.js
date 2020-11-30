
import React, { Component } from 'react';
// import { BrowserRouter as Route } from 'react-router-dom';
import '../css/App.css';
import Header from '../components/Header';
import Main from '../components/Main';
import CardWrapper from '../components/Card/CardWrapper';
import EmployeeCard from '../components/Card/EmployeeCard';
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
                        <EmployeeCard />
                    </ CardWrapper>
                </Main>
            </>
        );
    }
}

export default MainPage;