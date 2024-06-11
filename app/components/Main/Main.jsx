import React from 'react';
import './MainStyled';
import { MainContainer } from './MainStyled';
import { SharedContainer } from '../../styles/SharedStyles';
import Image from 'next/image';
import lines from '../../images/lines.png';

export const Main = () => {
  return (
    <SharedContainer>
      <MainContainer>
          <div className='main-title'>
              <p>Proprietary Trading Firm</p>
          </div>
          <div className='main-image'>
            <Image src={lines} alt="patern" className='patern'/>
          </div>
      </MainContainer>
    </SharedContainer>
  )
}
