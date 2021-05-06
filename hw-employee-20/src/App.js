
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import './css/style.css';
// import NavBar from './components/NavBar/Navbar';
import CharacterManager from './pages/CharacterManager';
import Main from './pages/mainPage';





class App extends Component {

render() {
  return (
   <>
  <Router>
    <Switch>
      <div>
    {/* <NavBar /> */}
      <div>
        
      <Route exact path ='/' component={Main} />
      <Route exact path ='/character-manager' component={CharacterManager} />  
      </div>
      </div>
      </Switch>
  </Router>
   </>
  );
  }
}

export default App;
