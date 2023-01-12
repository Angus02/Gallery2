import {React} from 'react'
import '../../Geese.css'
import { Button } from '../../Button'


function Explanation() {
    
    return (
        <>

        <div className='fillBlack'>
        
                <div className='container'>
        
                    <div className='containerBlackFill'>
                        {/* <div className='centeredTop' >

                            <p>Who We Are</p>

                        </div> */}

                        <div className='middleLeftText'>
                            <p>Producing Projects With Real-World Usability</p>
                        </div>

                        <div className='middleRightText'>
                            <p>A new movement bridging the gap between physical  products and blockchain technology.</p>
                        </div>
                    </div>
                </div>
        </div>

        <div className='fillGrey'>

            <div className='container'>


                <div className='containerGreyFill'>

                    <img className='centreLeft' src='media/images/Gallery-Goose-Logo.png'  width={300}/>
                    <img className='centreRight' src='media/images/MetaMaskLogo.png'  width={300}/>

                    <div className='centeredBottom' >
                        <p>This is a Web3 Application and requires MetaMask</p>
                    </div>

                </div>

            </div>
            

        </div>


        <div className='fillBlack'>
            
            <div className='container'>

                <div className='containerBlackFill'>
                    <div className='centeredTop' >

                        <p>Road Map</p>

                    </div>
                </div>
            </div>
        </div>


        <div className='fillGrey'>

            <div className='container'>


                <div className='containerGreyFill'>


                    <div className='centeredTopW' >
                        <p>About Us</p>
                    </div>

                    <div className='centreRightText'>
                        <p> Dan </p>    
                    </div>

                    <div className='centreLeftText'>
                        <p> Angus </p>    
                    </div>

                </div>

            </div>

        </div>

    </>
    );
}

export default Explanation;