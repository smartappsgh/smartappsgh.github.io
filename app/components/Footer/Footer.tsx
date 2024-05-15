import React from 'react'
import packageJSON from '@/package.json'
import DateUtility from '@/app/utilities/DateUtility'
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
        <p>© { DateUtility.getCurrentYear() } Quantovo Limited.</p>
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
