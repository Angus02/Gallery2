import React, {useCallback, useRef, useState} from 'react'
import '../Geese.css'
import '../../utils/ImageCreator.css'
import { Button } from '../Button'
import * as htmlToImage from 'html-to-image'
import Canvas from '../../utils/ImageCreate'
import ThreeGraphics from '../../threePackage/SceneSetup copy.js'


function Geesemint() {

    class MyComponent extends React.Component {
        constructor(props) {
          super(props);
          this.state = {
            showComponent: false,
          };
          this._onButtonClick = this._onButtonClick.bind(this);
        }
      
        _onButtonClick() {
          this.setState({
            showComponent: true,
          });
        }
      
        render() {
          return (
            <div>
              <Button buttonStyle='btn--outline' buttonSize={'btn--large'}  onClick={this._onButtonClick}>Create Image</Button>
              {this.state.showComponent ?
                 <ThreeGraphics /> :
                 null
              }
            </div>
          );
        }
    }
    
    return (
        <>
            <div className='fill'>

                <div className='containerGeese'>
                
                    <div className='containerBlackMint'>
                        <div className='centered' >
                            <MyComponent />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Geesemint;