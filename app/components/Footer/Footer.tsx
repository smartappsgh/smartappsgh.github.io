import React from 'react';
import DateUtility from '@/app/utilities/DateUtility';
import './FooterStyled';
import logo from '../../images/logo.png';
import email from '../../images/email.png';
import Image from 'next/image';
import { FooterContainer } from './FooterStyled';
import { SharedContainer } from '../../styles/SharedStyles';

export const Footer = () => {
  return (
    <SharedContainer>
      <div className='container'>
        <FooterContainer>
        <div className='footer__logo'>
            <Image src={logo} alt='logo' className='navbar__img' width={50} height={50} />
            <p className='footer__title'>Quantovo</p>
        </div>
        <div className='footer__text'>
          <p>© { DateUtility.getCurrentYear() } Quantovo Limited.</p>
          <p>All rights reserved.</p>
        </div>
        <div className='footer__logo-email'>
          {/* <p>Email</p>
          <p>info@quantovo.com</p> */}
          <Image src={email} alt='logo' className='footer__img-email' />
        </div>
      </FooterContainer>
      </div>
    </SharedContainer>
  )
}
