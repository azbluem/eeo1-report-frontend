import { FaBars, FaHome } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
  
export const Nav = styled.nav`
  position: absolute;
  max-width: 99.4%;
  top: 0;
  width: 100%;
  background: #63D471;
  display: flex;
  justify-content: space-evenly;
  // padding: 0 1rem;
  // z-index: 12;
`;

export const NavLink = styled(Link)`
  color: #808080;
  display: flex;
  font-size: 2em;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  margin: 0rem 0.5rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #000000;
  }
  @media screen and (max-width: 768px) {
    align-self:center;
  }

`;

export const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 2%;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const HomeIcon = styled(FaHome)`
  display: none;
  color: #808080;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 95%;
    transform: translate(100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

  
export const NavMenu = styled.div`
  display: flex;
  min-height: 85px;
  max-height: auto;
  // margin-right: -24px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: center;
    margin-right: 0px;
  }
`;
  
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
  
export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #808080;
  padding: 10px 22px;
  color: #000000;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }
`;