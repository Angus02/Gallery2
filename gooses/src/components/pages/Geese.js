import {React, useEffect, useState} from 'react';
// import Cards from '../Cards';
// import Footer from '../Footer';
import '../Geese.css'
import { Button } from '../Button';
import { getCurrentWalletConnected } from '../../utils/interact';
import checkOwnership from '../../utils/Ownership';
// import startSeason from '../../utils/StartSeason';

function Geese() {

  const [balance, setBalance] = useState(0);
  const [walletAddress, setWalletAddress] = useState(0);

  // const StartSeason = async (event) => {
  //   startSeason();
  // }



  function FlockButton() {

    // console.log(balance);

    if(balance == true) {
      return(
        <>
          <a href='/#/dash'>
            <Button buttonStyle='btn--outline' buttonSize='btn--medium'>
              Explore the flock
            </Button>
          </a>
        </>
      )
    }
  }

  useEffect(() => {

    setBalance(0);

    async function fetchWallet() {

      const bala = await checkOwnership();
      setBalance( bala);
      
    }


    fetchWallet();
    
  }, [])

  return (
    <>
    <div className='fill'>


      <div className='containerGeese'>

        <a href='/#/geesemint' className='mintBtn'>
          <Button buttonStyle='btn--outline' >
            Create your Goose
          </Button>
        </a>

        {/* <a className='flockBtn' onClick={checkOwnership()}>
          <Button buttonStyle='btn--outline' >
            Explore the Flock
          </Button>
        </a> */}
        {/* <div className='centeredTop'>
          <Button buttonStyle='btn--outline' onClick={StartSeason()}>
            Test
          </Button>
        </div> */}

        <div className='flockBtn'>
          {FlockButton()}
        </div>


        <img className='backImg' src='media/images/geese2.png'  />
        <div className='centered' >Join the Flock</div>
      </div>


      <div className='containerGeese'>
        <img className='backImg' src='media/images/GooseRight.png' />
          <div className='centeredTop' >Image Generation</div>
          <div className='middleRightText'>
            <p>We generate our images live. We use the wallet address as a seed for the image. This way the images are all unique. There is a very slim chance that two wallets can make the same seed, in this case they will still reflect the wallet address but be a duplicate. If any duplicates are produced they will be very rare.</p>
          </div>
      </div>


      <div className='containerGeese'>
          <img className='backImg' src='media/images/GooseLeftCentre.png'  />
          <div className='centeredTop' >Why Purchase?</div>
          <div className='middleLeftText'>
            <p>The Geese project is our first step to creating a brand which makes use of modern techonology. Your contribution to the brand will drive development. In doing so you will be rewarded as the brand grows. </p>
          </div>
      </div>


      <div className='containerGeese'>
        <img className='backImg' src='media/images/gooseNoseRight.png'  />
          <div className='centeredTop' >Geese Seasons</div>
          <div className='middleLeftText'>
            <div className='list' >There will be four seasons over the course of the year. Each season will release 250 geese. Each season will have a new style of image. Only when a seasons sells out will a timer start for the beginning of the next to start.</div>
          </div>
      </div>
    </div>
  </>
  );
}

export default Geese;
