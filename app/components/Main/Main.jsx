import React, { useEffect, useRef, useState } from 'react';
import { MainContainer } from './MainStyled';
import { SharedContainer } from '../../styles/SharedStyles';
import Image from 'next/image';
import lines from '../../images/lines.svg';

export const Main = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const mainRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        observer.unobserve(entry.target); // Stop observing once it has intersected
      }
    }, {
      threshold: 0.5,
    });

    if (mainRef.current) {
      observer.observe(mainRef.current);
    }

    return () => {
      if (mainRef.current) {
        observer.unobserve(mainRef.current);
      }
    };
  }, []);

  return (
    <SharedContainer>
      <MainContainer ref={mainRef} className={isIntersecting ? 'animate' : ''}>
        <div className='main-title'>
          <p className='title'>Proprietary Trading Firm</p>
        </div>
        <div className='main-image'>
          <Image src={lines} alt="patern" className='patern' />
        </div>
      </MainContainer>
    </SharedContainer>
  );
};
