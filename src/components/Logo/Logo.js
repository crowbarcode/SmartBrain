import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';

const Logo = () => {
  return (
    <div className='center ma4 mt0'>
      <Tilt style={{display: 'flex', justifyContent: 'center'}} options={{ max : 55 }}>
        <div className='pa3'>
          <img style={{paddingTop: '5px'}} alt='logo' src={brain}/>
        </div>
      </Tilt>
      <div className='tc mt3'>
        <p className='b tc'>Made with:</p>
        <img 
          src='https://www.clarifai.com/hubfs/Clarifai_June2018/Images/logo2.svg'
          alt='clarifai logo'
          width='200px'
          height='auto'
        />
      </div>
    </div>
  );
}

export default Logo;