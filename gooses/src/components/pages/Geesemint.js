import React, {useCallback, useRef} from 'react'
import '../Geese.css'
import '../../utils/ImageCreator.css'
import { Button } from '../Button'
import * as htmlToImage from 'html-to-image'
import Canvas from '../../utils/ImageCreate'
import ThreeGraphics from '../../threePackage/SceneSetup copy.js'



function Geesemint() {

    const refe = useRef<'ImagDown'>(null);

    const onButtonClick = async () => {
        const dataUrl = await htmlToImage.toPng(refe.current);

        const link = document.createElement('a');
        link.download = "html-to-image.png";
        link.href = dataUrl;
        link.click();
    }


    const onButtonClick2 = async () => {
        htmlToImage.toJpeg(document.getElementById('centered'), { quality: 0.95 })
        .then(function (dataUrl) {
          var link = document.createElement('a');
          link.download = 'my-image-name.jpeg';
          link.href = dataUrl;
          link.click();
        });
    }

    
    return (
        <>
        <div className='fill'>

                <div className='containerGeese'>
        
                
                    <div className='containerBlackMint'>
                        <div className='centered' >

                            <div >
                                <ThreeGraphics />
                                {/* ref={canvasRef} */}
                                 {/* <Canvas
                                 width="500"
                                 height="500"
                                 /> */}
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

                        </div>


                        <div className='centeredBottom'>
                            <Button buttonStyle='btn--outline' buttonSize={'btn--large'} >
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
        </>
    );
}

export default Geesemint;