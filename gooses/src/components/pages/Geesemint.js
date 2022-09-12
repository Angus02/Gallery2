import {React} from 'react'
import '../Geese.css'
import { Button } from '../Button'


function Geesemint() {
    
    return (
        <div className='fill'>
        
                <div className='container'>
        
                    <div className='containerBlackFill'>
                        <div className='centered' >

                            <Button buttonStyle='btn--outline' buttonSize={'btn--large'}>
                                    <span>Mint</span>
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