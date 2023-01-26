import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from './NavbarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
  
        <NavMenu>
        <NavLink to='/eeo1-report-frontend' activestyle='true'>
            Home
          </NavLink>
          <NavLink to='/eeo1-report-frontend/about' activestyle='true'>
            About
          </NavLink>
          <NavLink to='/eeo1-report-frontend/findings' activestyle='true'>
            Findings
          </NavLink>
          <NavLink to='/eeo1-report-frontend/donate' activestyle='true'>
            Donate
          </NavLink>
          <NavLink to='/eeo1-report-frontend/contact' activestyle='true'>
            Contact
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;