import React from 'react';


function Navbar() {
    return(
<nav className="navbar navbar-dark bg">
  <a className="navbar-brand" href="main">William Wassmann</a>
    
    {/* <!-- Navbar links --> */}
    
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <a className="nav-link active" href="employee-manager">Employee Manager</a>
      </li>
    </ul>

</nav>

    );
}

export default Navbar;