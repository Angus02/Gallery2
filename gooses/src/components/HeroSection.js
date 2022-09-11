// import React from 'react';
// import '../App.css';
// import './HeroSection.css';

// function HeroSection() {
//     return (
//         <div className='hero-container'>
//             <video src="/media/goose_head_1.mp4" autoPlay loop muted />
//             <h1>Goose's Gallery</h1>
//         </div>
//     );
// }

// export default HeroSection;

import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/media/goose_head_1.mp4' autoPlay loop muted />
      <h1>Goose's Gallery</h1>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;