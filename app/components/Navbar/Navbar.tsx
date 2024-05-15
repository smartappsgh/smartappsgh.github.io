import React from 'react'
import './NavbarStyled'
import { NavbarContainer } from './NavbarStyled'
import logo from '../../images/logo.png'
import Image from 'next/image';

export const Navbar = () => {
 

  return (
    <div className='container'>
      <NavbarContainer>
        <div className='navbar__logo'>
          <Image src={logo} alt='logo' className='navbar__img' />
          <p className='navbar__title'>Quantovo</p>
        </div>
        <ul className='navbar__menu'>
          <li className='navbar__menu-item'>
            <a href='#'>about us</a>
          </li>
        </ul>
      </NavbarContainer>
    </div>
  )
}
