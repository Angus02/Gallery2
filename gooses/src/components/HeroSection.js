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

  const source = [ './media/goose_head_1.mp4', '/media/GooseVellumZig.mp4']
  let x = 0;

  var video = document.getElementById('hls-video');
  var sarc = document.getElementById('change-src');

  function changeBck() {
    if(x>0)
    {

      video.pause()
      sarc.setAttribute('src', source[0]);
      video.load();
      video.play();

      x-=1;
      alert(x);

    }
    else
    {
    x += 1;
    alert(x);
    }
  }

  return (
    <div className='hero-container'>
      <video id='hls-video' autoPlay loop muted controls >
        <source id='change-src' src={source[1]}  />
      </video>
      <h1>Goose's Gallery</h1>
      <div className='hero-btns'>
        <Button
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={changeBck}
        >
          WATCH TRAILER
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;