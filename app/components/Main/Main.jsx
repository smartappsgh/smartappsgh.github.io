import React from 'react';
import './MainStyled';
import { MainContainer } from './MainStyled';
import { SharedContainer } from '../../styles/SharedStyles';
import Image from 'next/image';
import lines from '../../images/lines.svg';

export const Main = () => {
  return (
    <SharedContainer>
      <MainContainer>
          <div className='main-title'>
              <p className='title'>Proprietary Trading Firm</p>
              <Image src={lines} alt="patern" className='patern' />
          </div>
      </MainContainer>
    </SharedContainer>
  )
}
