import {useState,useEffect} from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from './NavbarElements';
  
const Navbar = () => {
  const [sideBar, setSideBar] = useState(false)
  const [width,setWidth] = useState(window.innerWidth)
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth)
    
}
    window.addEventListener('resize', handleResize)
  },[])
  
  const NavBar = () => {
    if (width<768 && !sideBar) {
      return <NavMenu/>
    } else {
      return <NavMenu>
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
    }
  }

  return (
    <>
      <Nav>
        <Bars onClick={()=>{setSideBar(!sideBar)}}/>
        <NavBar></NavBar>
      </Nav>
    </>
  );
};
  
export default Navbar;