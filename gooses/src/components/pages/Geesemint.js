import {React} from 'react'
import '../Geese.css'
import { Button } from '../Button'
import Geese from './Geese'


function Geesemint() {
    
    return (
        <div className='fill'>
        
                <div className='container'>
        
                    <div className='containerBlackFill'>
                        <div className='centered' >

                            <Button buttonStyle='btn--outline' buttonSize={'btn--large'}>
                                    <span>Coming Soon</span>
                            </Button>

                            </div>
                        <div className='centreRight'>
                            <div className='list' ></div>
                            <div className='list' ></div>
                            <div className='list' ></div>
                            <div className='list' ></div>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default Geesemint;