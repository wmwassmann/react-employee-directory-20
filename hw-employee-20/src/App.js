
// import React, { useState, useEffect } from 'react';
import './css/App.css';
import Header from './components/Header';
import Main from './components/Main';
import FilterSearch from './components/FilterSearch';
import CardWrapper from './components/Card/CardWrapper';
import EmployeeCard from './components/Card/EmployeeCard';




function App() {
  return (
   <>
     <Main>
     <FilterSearch />
     <Header />
        <CardWrapper> 
          <EmployeeCard />
        </ CardWrapper>  
      </Main>
{/*     
     <Main>
        

    
     </Main> */}
   </>
  );
}

export default App;
