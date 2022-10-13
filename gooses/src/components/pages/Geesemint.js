import React, {useCallback, useRef} from 'react'
import '../Geese.css'
import '../../utils/ImageCreator.css'
import { Button } from '../Button'
import * as htmlToImage from 'html-to-image'
import Canvas from '../../utils/ImageCreate'
import '../../utils/ImageCreator.css'



function Geesemint() {

    const refe = useRef(null);

    const onButtonClick = async () => {
        const dataUrl = await htmlToImage.toPng(refe.current);

        const link = document.createElement('a');
        link.download = "html-to-image.png";
        link.href = dataUrl;
        link.click();
    }
    
    
    return (
        <div className='fill'>
                <div className='container'>
        
                    <div className='containerBlackFill'>
                        <div className='centered' >

                            <div>
                                 <Canvas
                                 width="500"
                                 height="500"
                                 />
                            </div>

                            {/* <div class="parent" ref={refe}>
                            <img class="image1" src='media/images/GooseRight.png' alt='goooose' />
                            <img class="image2" src='media/images/GooseNoseRight.png' alt='goooose' />
                            
                            <div id='main'>
                                    <div class="row">
                                        <div class="circle"></div>
                                    </div>
                                </div>
                            </div> */}

                            <Button buttonStyle='btn--outline' buttonSize={'btn--large'} onClick={onButtonClick}>
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