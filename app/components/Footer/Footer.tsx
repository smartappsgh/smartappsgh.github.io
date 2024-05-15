import React from 'react'
import './FooterStyled'
import logo from '../../images/logo.png'
import Image from 'next/image'
import { FooterContainer } from './FooterStyled'

export const Footer = () => {
  return (
    <div className='container'>
      <FooterContainer>
      <div className='footer__logo'>
          <Image src={logo} alt='logo' className='footer__img' />
          <p className='footer__title'>Quantovo</p>
      </div>
      <div className='footer__text'>
        <p>© 2021 Quantovo Limited.</p>
        <p>All rights reserved.</p>
      </div>
      <div className='footer__text'>
        <p>Email</p>
        <p>info@quantovo.com</p>
      </div>
     </FooterContainer>
    </div>
  )
}
