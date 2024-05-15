import React from 'react'
import './FooterStyled'
import logo from '../../images/logo.png'
import email from '../../images/email.png'
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
        <p>Agias Fylaxeos, 118, Christabel</p>
        <p>House, 3087, Limassol, Cyprus</p>
      </div>
      <div className='footer__logo-email'>
        <Image src={email} alt='logo' className='footer__img-email' />
      </div>
     </FooterContainer>
    </div>
  )
}
