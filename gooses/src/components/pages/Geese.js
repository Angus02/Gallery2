
import {React} from 'react';
import '../../App.css';
// import Cards from '../Cards';
// import Footer from '../Footer';
import '../Geese.css'
import { Button } from '../Button';


function Geese() {

  return (
    <div className='fill'>

      <div className='container'>

      <a href='/#/geesemint' className='mintBtn'>
        <Button buttonStyle='btn--outline' >
          Coming Soon
        </Button>
      </a>


          <img className='backImg' src='media/images/geese2.png' alt='goo' />
          <div className='centered' >Become part of the Geese</div>
      </div>
      <div className='containerBlack'>
        <img className='backImg' src='media/images/GooseRight.png' alt='goo' />
          <div className='centered' >As a Member</div>
          <div className='centreRight'>
            <div className='list' ></div>
            <div className='list' ></div>
            <div className='list' ></div>
            <div className='list' ></div>
          </div>
      </div>
      <div className='container'>
          <img className='backImg' src='media/images/GooseLeftCentre.png' alt='goo' />
          <div className='centered' >As an Owner</div>
          <div className='centreRight'>
            <div className='list' ></div>
            <div className='list' ></div>
            <div className='list' ></div>
            <div className='list' ></div>
          </div>
      </div>
      <div className='containerBlack'>
        <img className='backImg' src='media/images/gooseNoseRight.png' alt='goo' />
          <div className='centered' >Part of the Future</div>
          <div className='centreRight'>
            <div className='list' ></div>
            <div className='list' ></div>
            <div className='list' ></div>
            <div className='list' ></div>
          </div>
      </div>
    </div>
  );
}

export default Geese;
