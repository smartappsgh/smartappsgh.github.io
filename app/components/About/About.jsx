import React from 'react'
import './AboutStyled'
import { AboutContainer } from './AboutStyled'
import Image from 'next/image';
import mainQ from '../../images/mainq.png'
import linesv from '../../images/linesv.png'

export const About = () => {
  return (
    <AboutContainer>
        <Image src={mainQ} alt="mainQlogo" className="mainQlogo" />
        <div className='about-container'>
            <div className="about-text">
                <span>company</span>
                <h1>About us</h1>
                <p>At Quantovo we build software solutions for financial traders around the globe. Our team uses the latest research, technologies, and tools to help brokers, traders, and entrepreneurs alike achieve better results faster and with higher ROI.</p>
            </div>
            <Image src={linesv} alt="lines" className="linesPatern" />
        </div>
    </AboutContainer>
  )
}
