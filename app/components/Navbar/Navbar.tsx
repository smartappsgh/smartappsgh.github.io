import React from 'react'
import './NavbarStyled'
import { NavbarContainer } from './NavbarStyled'

export const Navbar = () => {
  return (
    <div className='container'>
      <NavbarContainer>
        <div className='navbar__logo'>
          <a href='#'>Logo</a>
        </div>
        <ul className='navbar__menu'>
          <li className='navbar__menu-item'>
            <a href='#'>About Us</a>
          </li>
        </ul>
      </NavbarContainer>
    </div>
  )
}
