import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <nav className="nav">
        <h1>Hello Rails React</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          {/* <li><Link to="/calculator">Calculator</Link></li> */}
          {/* <li><Link to="/quote">Quote</Link></li> */}
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default NavBar;