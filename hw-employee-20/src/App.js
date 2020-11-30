
import React, { useState, useEffect } from 'react';
import './css/App.css';
import Header from './components/Header';
import Main from './components/Main';
import FilterSearch from './components/FilterSearch';
import CardWrapper from './components/Card/CardWrapper';
import EmployeeCard from './components/Card/EmployeeCard'



function App() {
  // inside of this function I need to create a series of I believe state switches and useEffect/useState depending on which card is displayed.

  // I need to display randomly generated employees based on the data pulled from the userAPI.

  // Update, I had an idea.  I don't want to make an app that pulls from a random API, I want to combine two technologies that I already know. 
  // I want to be able to not only view, but also add and subtract if need be.  Why not? I feel like if this application were to be used by management, they would want to 
  // be ble to add and remove employees, and that's the beauty of React - you can EASILY add and remove functionality. 


  // First, I want to apply a check to make sure that the letters are correct, and that the user isn't entering a non-letter character. I'll be using useEffect because it 
  // triggers every time the page reloads, a component mounts, or when a resource like the input field changes. 


  const [searchBar, setSearch] = useState('');
  const [warning, setWarning] = useState(false);


  const handleInputChange = event => {
    setSearch(event.target.value);
  }


  useEffect(() => {
    console.log('render');
    // whenever my input changes, we render the results - which will eventually be an error because this catches any invalid characters.
    // if (!searchBar) {
      
    // }

    
    // using the test() method to check string matches.
  if (!/^[a-zA-Z]*$/g.test(searchBar)) {
    // this will empty out the searchBar 
    setSearch('');
    setWarning(true);
    return;
  }




  }, [searchBar])





  return (
   <>
     <Main>
     <FilterSearch 
      input={searchBar}
      // hooks in to the FilterSearch component      
      handleInputChange={handleInputChange}
      
      />
      {warning === false ? null : <h1>You Frucked Up.</h1>}
     <Header />
        <CardWrapper> 
          <EmployeeCard />
        </ CardWrapper>  
      </Main>
   </>
  );
}

export default App;
