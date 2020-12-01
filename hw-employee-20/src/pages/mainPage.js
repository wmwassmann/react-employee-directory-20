
import React, { Component } from 'react';
import '../css/style.css';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import CardWrapper from '../components/Card/CardWrapper/CardWrapper';
import Employee from '../components/Card/EmployeeCard/App';






class MainPage extends Component {



    render() {

        return (
            <>
              <Header />  
                <Main>    
                    <Employee />   
                    <CardWrapper/>  
                    {/* <CardWrapper>
                    <Employee />  
                    </CardWrapper>                        */}
                </Main>
            </>
        );
    }
}

export default MainPage;