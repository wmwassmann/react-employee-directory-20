
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import React, { useState, useEffect } from 'react';
import './css/App.css';
import NavBar from './components/NavBar';
import EmployeeManager from './pages/employeeManager';
import Main from './pages/mainPage';





function App() {

  return (
   <>
  <Router>
    <Switch>
      <div>
    <NavBar />
      <div>
        
      <Route exact path ='/main' component={Main} />
      <Route exact path ='/employee-manager' component={EmployeeManager} />  
      </div>
      </div>
      </Switch>
  </Router>
   </>
  );
}

export default App;
