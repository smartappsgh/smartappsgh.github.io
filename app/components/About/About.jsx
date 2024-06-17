import React from 'react';
import './AboutStyled';
import { SharedContainer } from '../../styles/SharedStyles';
import { AboutContainer } from './AboutStyled'
import Image from 'next/image';
import mainQ from '../../images/mainq.png'

export const About = () => {
  return (
    <div style={{width: '100%', backgroundColor: '#fff'}}>
      <SharedContainer>
        <AboutContainer>
          <div className='about-img'>
            <Image src={mainQ} alt="mainQlogo" className="mainQlogo" />
          </div>
          {/*<div className='about-container'>*/}
              <div className="about-text">
                  <span>company</span>
                  <h1>About us</h1>
                  <p>Welcome to Quantovo, a proprietary trading firm focused on using advanced technology and innovative strategies in global financial markets. Our team of experienced professionals combines market knowledge with modern algorithms to achieve consistent trading performance.</p>
              </div>
          {/*</div>*/}
        </AboutContainer>
      </SharedContainer>
   </div>
  )
}
