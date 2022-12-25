
import {React} from 'react';
// import Cards from '../Cards';
// import Footer from '../Footer';
import '../Geese.css'
import { Button } from '../Button';


function Geese() {

  return (
    <>
    <div className='fill'>


      <div className='containerGeese'>

      <a href='/#/geesemint' className='mintBtn'>
        <Button buttonStyle='btn--outline' >
          Create your Piece
        </Button>
      </a>


          <img className='backImg' src='media/images/geese2.png'  />
          <div className='centered' >Become one of the Geese</div>
      </div>
      <div className='containerGeese'>
        <img className='backImg' src='media/images/GooseRight.png' />
          <div className='centered' >As a Member</div>
          <div className='centreRight'>
            <div className='list' ></div>
            <div className='list' ></div>
            <div className='list' ></div>
            <div className='list' ></div>
          </div>
      </div>
      <div className='containerGeese'>
          <img className='backImg' src='media/images/GooseLeftCentre.png'  />
          <div className='centered' >Unique Art with a Key</div>
          <div className='centreRight'>
            <div className='list' ></div>
            <div className='list' ></div>
            <div className='list' ></div>
            <div className='list' ></div>
          </div>
      </div>
      <div className='containerGeese'>
        <img className='backImg' src='media/images/gooseNoseRight.png'  />
          <div className='centered' >Part of the Future</div>
          <div className='centreRight'>
            <div className='list' ></div>
            <div className='list' ></div>
            <div className='list' ></div>
            <div className='list' ></div>
          </div>
      </div>
    </div>
  </>
  );
}

export default Geese;
