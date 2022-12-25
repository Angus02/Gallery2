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

import React, { useEffect } from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import './Geese.css'

function HeroSection() {

  const source = [ './media/goose_head_1.mp4', '/media/GooseVellumZig.mp4']
  let x = 0;

  var video = document.getElementById('hls-video');
  var sarc = document.getElementById('change-src');


//   componentDidMount = () => {
//     this.setVideo();
//  }
//  setVideo = () => {
//     const browserLanguage = navigator.language || navigator.userLanguage;
//     if(browserLanguage){
//        if(browserLanguage.includes("en")){
//           this.setState({ videoUrl: require('./media/goose_head_1.mp4') });
    
//        }else if(browserLanguage.includes("fr")){
//           this.setState({ videoUrl: require('./media/GooseVellumZig.mp4') });
    
//        }else{
//           this.setState({ videoUrl: require('./media/goose_head_1.mp4') });
//        }
 
//     }else{
//        this.setState({ videoUrl: require('./media/goose_head_1.mp4') });
//     }
//  }

  let v = 0;

  function Pick()
  {
    if(v == 0)
    {
      v = 1;
      return (
      Videos(v)
      )
    }
    else
    {
      v = 0;
      return (
      Videos(v)
      )
    }
    console.log(v);
  }


  function Videos(a) {
    if( a == 0)
    {

      return (
        <video src='./media/goose_head_1.mp4' autoPlay loop muted controls/>
      )
    }
    else
    {

      return(
        <video src='./media/GooseVellumZig.mp4' autoPlay loop muted controls/>
      )
    }
  }

  useEffect(() => {
    Pick()
    Videos()
  }, )


  return (
    <>
    <div className='hero-container'>
      <video src='./media/goose_head_1.mp4' playsInline autoPlay loop muted/>

      <div className='centered' >
        <h1>Goose's Gallery</h1>
      </div>
    </div>
    </>
  );
}

export default HeroSection;