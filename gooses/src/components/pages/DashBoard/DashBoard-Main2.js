import React, {useCallback, useRef, useState} from 'react'
import '../../Geese.css'
import '../../../utils/ImageCreator.css'
import { Button } from '../../Button'
import DashBlog from './DashBoard-Blog/Blog'
import DashPortfolio from './Portfolio/Portfolio'
import LoadImage from './LoadImage'
import { useSyncExternalStore } from 'react'

function Geesemint() {

    const store = {
        size: {
          height: undefined,
          width: undefined
        }
    };

    const { height, width } = useSyncExternalStore(subscribe, getSnapshot);

    function getSnapshot() {
        if (
          store.size.height !== window.innerHeight ||
          store.size.width !== window.innerWidth
        ) {
          store.size = { height: window.innerHeight, width: window.innerWidth };
        }
        return store.size;
      }
      
      function subscribe(callback) {
        window.addEventListener("resize", callback);
        return () => {
          window.removeEventListener("resize", callback);
        };
    }

    class Combined extends React.Component {
        constructor(props) {
          super(props);
          this.state = {
            showComponentBase: true,
            showComponentBlog:false,
            showComponentPortfolio:false
        };
          this._onButtonClickBase = this._onButtonClickBase.bind(this);
          this._onButtonClickPortfolio = this._onButtonClickPortfolio.bind(this);
          this._onButtonClickBlog = this._onButtonClickBlog.bind(this);

        }
      
        _onButtonClickBase() {
            this.setState({
                showComponentBase: true,
                showComponentBlog: false,
                showComponentPortfolio: false
            });
        }

        _onButtonClickBlog() {
            this.setState({
                showComponentBase: false,
                showComponentBlog: true,
                showComponentPortfolio: false
            });
        }

        _onButtonClickPortfolio() {
            this.setState({
                showComponentBase: false,
                showComponentBlog: false,
                showComponentPortfolio: true
            });
        }
      
        render() {
            if(width > 200)
            {

            if(this.state.showComponentBase)
            {
                return (
                <div >
                    <>
                        <>
                            <div  className='centreLeft'>
                                <div className='centreLeft'> 
                                    <div>
                                        <Button buttonStyle='btn--outline' buttonSize={'btn--large'}  onClick={this._onButtonClickBlog} >Blog</Button>
                                    </div>
                                
                                    <div className='dashIMGTrans'>
                                        <LoadImage />
                                    </div>
                                </div>
                            </div>
                        </>
                        <>
                        <div  className='centreRight'>
                            <div className='centreRight'>
                                <div>
                                    <Button buttonStyle='btn--outline' buttonSize={'btn--large'} onClick={this._onButtonClickPortfolio} >Portfolio</Button>
                                </div>
                            
                                <div className='dashIMGTrans'>
                                    <LoadImage />
                                </div>
                            </div>
                        </div>
                        </>
                    </>
                    :
                    null  
                </div>
                );
            }

            if(this.state.showComponentBlog)
            {
                return (
                    <>
                    
                    <div>

                        <>
                        <div className='centeredTop'>
                        <Button buttonStyle='btn--outline' buttonSize={'btn--large'}  onClick={this._onButtonClickBase}>Back</Button>
                        </div>
                        
                        <DashBlog /> 
                        </> 
                    </div>
                    
                    </>
                )
            }

            if(this.state.showComponentPortfolio)
            {
                return (
                    <>
                    
                    <div>

                        <>
                        <div className='centeredTop'>
                        <Button buttonStyle='btn--outline' buttonSize={'btn--large'}  onClick={this._onButtonClickBase}>Back</Button>
                        </div>
                        
                            <DashPortfolio /> 
                        </> 
                    </div>
                    
                    </>
                )
            }
        }
        return(
            null
        )
        }
    }


    class Load extends React.Component {
        constructor(props) {
          super(props);
          this.state = {
            showComponent: false,
          };
          this._onButtonClick = this._onButtonClick.bind(this);
        }
      
        _onButtonClick() {

            if(this.state.showComponent == false)
            {
                this.setState({
                    showComponent: true,
                });
            }
            
            if(this.state.showComponent == true)
            {
                this.setState({
                    showComponent: false,
                });
            }
        }
      
        render() {
          return (
            <div >

                    {this.state.showComponent ?
                    
                        <div >
                            <Combined />
                        </div>
                        :
                        <div className='centered'>
                            <Button buttonStyle='btn--outline' buttonSize={'btn--large'}  onClick={this._onButtonClick}>Load</Button> 
                        </div>

                    }
            </div>
          );
        }
    }
    
    return (
        <>
            <div className='fill'>

                <div className='containerGeese'>
                
                    <div className='containerBlackFill'>
                            <Load />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Geesemint;