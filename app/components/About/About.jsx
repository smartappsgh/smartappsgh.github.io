import React, { useEffect, useRef, useState } from 'react';
import { SharedContainer } from '../../styles/SharedStyles';
import { AboutContainer } from './AboutStyled'
import Image from 'next/image';
import mainQ from '../../images/mainq.png';

export const About = () => {
  const mainQRef = useRef(null);
  const aboutTextRef = useRef(null);

  useEffect(() => {
    const handleIntersection = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        } else {
          entry.target.classList.remove('animate');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    if (mainQRef.current) {
      observer.observe(mainQRef.current);
    }

    if (aboutTextRef.current) {
      observer.observe(aboutTextRef.current);
    }

    return () => {
      if (mainQRef.current) {
        observer.unobserve(mainQRef.current);
      }

      if (aboutTextRef.current) {
        observer.unobserve(aboutTextRef.current);
      }
    };
  }, []);

  return (
    <div style={{ width: '100%', backgroundColor: '#fff' }}>
      <SharedContainer>
        <AboutContainer>
          <div className='about-img'>
            <Image src={mainQ} alt="mainQlogo" className="mainQlogo" ref={mainQRef} />
          </div>
          <div className="about-text" ref={aboutTextRef}>
            <span>company</span>
            <h1>About us</h1>
            <p>Welcome to Quantovo, a proprietary trading firm focused on using advanced technology and innovative strategies in global financial markets. Our team of experienced professionals combines market knowledge with modern algorithms to achieve consistent trading performance.</p>
          </div>
        </AboutContainer>
      </SharedContainer>
    </div>
  );
};
