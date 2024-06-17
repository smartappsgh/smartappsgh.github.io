import React, {useEffect, useRef, useState} from 'react';
import './AboutStyled';
import { SharedContainer } from '../../styles/SharedStyles';
import { AboutContainer } from './AboutStyled'
import Image from 'next/image';
import mainQ from '../../images/mainq.png'

export const About = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, {
      threshold: 0.5,
    });

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);
  return (
    <div style={{width: '100%', backgroundColor: '#fff'}}>
      <SharedContainer>
        <AboutContainer ref={aboutRef} className={isIntersecting ? 'animate' : ''}>
          <div className='about-img'>
            <Image src={mainQ} alt="mainQlogo" className="mainQlogo" />
          </div>
              <div className="about-text">
                  <span>company</span>
                  <h1>About us</h1>
                  <p>Welcome to Quantovo, a proprietary trading firm focused on using advanced technology and innovative strategies in global financial markets. Our team of experienced professionals combines market knowledge with modern algorithms to achieve consistent trading performance.</p>
              </div>
        </AboutContainer>
      </SharedContainer>
   </div>
  )
}
