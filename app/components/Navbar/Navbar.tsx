import React from 'react';
import './NavbarStyled';
import { NavbarContainer } from './NavbarStyled';
import { SharedContainer } from '../../styles/SharedStyles';
import logo from '../../images/logo.png';
import Image from 'next/image';

export const Navbar = () => {
  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById('about-section');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <SharedContainer>
      <NavbarContainer>
        <div className='navbar__logo'>
          <Image src={logo} alt='logo' className='navbar__img' width={50} height={50} />
          <p className='navbar__title'>Quantovo</p>
        </div>
        <ul className='navbar__menu'>
          <li className='navbar__menu-item' onClick={handleScrollToAbout}>
            About Us
          </li>
        </ul>
      </NavbarContainer>
    </SharedContainer>
  );
};
