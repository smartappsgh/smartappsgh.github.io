import React, { useEffect, useRef } from 'react';
import { SharedContainer } from '../../styles/SharedStyles';
import { AboutContainer } from './AboutStyled';
import Image from 'next/image';
import mainQ from '../../images/mainq.png';

export const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const mainQlogo = entry.target.querySelector('.mainQlogo');
          const aboutText = entry.target.querySelector('.about-text');

          if (mainQlogo) {
            mainQlogo.classList.add('animate');
          }
          if (aboutText) {
            aboutText.classList.add('animate');
          }
        } else {
          const mainQlogo = entry.target.querySelector('.mainQlogo');
          const aboutText = entry.target.querySelector('.about-text');

          if (mainQlogo) {
            mainQlogo.classList.remove('animate');
          }
          if (aboutText) {
            aboutText.classList.remove('animate');
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div style={{ width: '100%', backgroundColor: '#fff' }}>
      <SharedContainer>
        <AboutContainer ref={sectionRef}>
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
  );
};
