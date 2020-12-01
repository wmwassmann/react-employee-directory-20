
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import './css/style.css';
import NavBar from './components/NavBar/Navbar';
import EmployeeManager from './pages/employeeManager';
import Main from './pages/mainPage';





class App extends Component {

render() {
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
}

export default App;
