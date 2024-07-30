import React from 'react';
import myLogo from '../assets/MyLogo.jpeg'; 

function Logo({width}) {
  return (
    <div>
      {/* style={width} */}
      <img src={myLogo} alt='My Logo' className='w-10 rounded-full'  />
    </div>
  );
}

export default Logo;
