// import React from 'react';
// import '../../App.css'
// import HeroSection from '../HeroSection'

// function Home() {
//     return (
//         <>
//             <HeroSection />
//         </>

//     );
// }

// export default Home;

import React from 'react';
import '../../App.css';
// import Cards from '../Cards';
import HeroSection from '../HeroSection';
// import Footer from '../Footer';
import Explanation from './HomePage/HomeExplanation';


function Home() {
  return (
    <>
      <HeroSection />
      {/* <Cards /> */}
      {/* <Footer /> */}
      <Explanation />
    
    </>
  );
}

export default Home;