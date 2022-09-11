
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

      <a href='/geesemint' className='mintBtn'>
        <Button buttonStyle='btn--outline' >
          Mint Geese
        </Button>
      </a>


          <img className='backImg' src='media/images/geese2.png' alt='goo' />
          <div className='centered' >Centered</div>
          <div className='centreRight'>
            <div className='list' >Centre Right1</div>
            <div className='list' >Centre Right2</div>
            <div className='list' >Centre Right3</div>
            <div className='list' >Centre Right4</div>
          </div>
      </div>
      <div className='containerBlack'>
          <div className='centered' >Centered</div>
          <div className='centreRight'>
            <div className='list' >Centre Right1</div>
            <div className='list' >Centre Right2</div>
            <div className='list' >Centre Right3</div>
            <div className='list' >Centre Right4</div>
          </div>
      </div>
      <div className='container'>
          <img className='backImg' src='media/images/geese2.png' alt='goo' />
          <div className='centered' >Centered</div>
          <div className='centreRight'>
            <div className='list' >Centre Right1</div>
            <div className='list' >Centre Right2</div>
            <div className='list' >Centre Right3</div>
            <div className='list' >Centre Right4</div>
          </div>
      </div>
      <div className='containerBlack'>
          <div className='centered' >Centered</div>
          <div className='centreRight'>
            <div className='list' >Centre Right1</div>
            <div className='list' >Centre Right2</div>
            <div className='list' >Centre Right3</div>
            <div className='list' >Centre Right4</div>
          </div>
      </div>
    </div>
  );
}

export default Geese;
