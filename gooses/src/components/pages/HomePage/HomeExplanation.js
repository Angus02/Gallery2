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
                    <img className='imageBottom' src='media/images/environment3.png' />
                </div>
        </div>

        <div className='fillGrey'>

            <div className='container'>


                <div className='containerGreyFill'>
                    <img className='imageBottom' src='media/images/environment3.1.png' />


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
                    <div className='centered' >
                        <p className='textSpacer'>Release of the Geese</p>
                        <p className='textSpacer'>Release of first physical collection</p>
                        <p className='textSpacer'>Release of the Shallows Project</p>
                        <p className='textSpacer'>Building of the Space Station</p>

                    </div>

                </div>
                <img className='imageBottom' src='media/images/pyro.0250.png' />

            </div>
        </div>


        <div className='fillGrey'>

            <div className='container'>


                <div className='containerGreyFill'>


                    <div className='centeredTopW' >
                        <p>About Us</p>
                    </div>

                    <div className='centreRightText'>
                        <p> Goose 1 </p>
                        <p className='centreRightTextP'>Specialises in conception and aesthetic. Controls digital production, what you read and where you read it. Loves a Podcast. Media of the highest level runs through his veins.</p>
                    </div>

                    <div className='centreLeftText'>
                        <p> Goose 2 </p>    
                        <p className='centreLeftTextP'>Goose. A techinal Artist at heart. The lead developer and responsible for making everything run smoothly. A passionate 3D artist and enjoy the process of creating media of any form.</p>
                    </div>

                </div>

            </div>

        </div>

    </>
    );
}

export default Explanation;