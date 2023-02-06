import React, {useEffect, useState} from 'react'
import { Button } from './Button';
import './NavBar2.css';

import { 
    connectWallet,
    getCurrentWalletConnected 
} from "../utils/interact";
import '../App.css'



function NavBar()
{
  const [walletAddress, setWallet] = useState("");


  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  useEffect(() => { //TODO: implement

    async function fetchData() {
      const {address, status} = await getCurrentWalletConnected();
      setWallet(address);
    }

    fetchData();
  }, []);


  const connectWalletPressed = async () => { //TODO: implement
    const walletResponse = await connectWallet();
  };


  const [button, setButton] = useState(true);

  const showButton = () => {
      if(window.innerWidth <= 350) {
          setButton(false);
      } else {
          setButton(true);
      }
  };

  window.addEventListener('resize', showButton);

  function Install() {
    if(typeof window.ethereum !== 'undefined') {
      return "Connect Wallet"
    } else {
      return (
        <p href='https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en'>Install MetaMask</p>
      )
    }
  }

  // return (
  //   <>
  //   <div class="topnav" id="myTopnav">
  //       <a href="#home" class="active">
  //         <img className="navbar-logo2" src='media/images/Gallery-Goose-Logo.png' alt='goo' width={80}/>
  //       </a>
  //       <a href="#news">News</a>
  //       <a href="#contact">Contact</a>
  //       <a href="#about">About</a>
  //       <a class="icon" onclick={myFunction()}>
  //         <i class="fa fa-bars"></i>
  //       </a>
  //   </div>
  //   </>
  // )



    // return (
    //     <>
    //         <nav className="navbar">
    //             <div className="navbar-container">
    //                 <a href="/" className="navbar-logo2" >
    //                   <img className="navbar-logo2" src='media/images/Gallery-Goose-Logo.png' alt='goo' width={80}/>
    //                 </a>
    //                 <ul className='nav-menu'>
    //                     <li className='nav-item'>
    //                         <a href='/#/geese' className='nav-links'>
    //                             Geese
    //                         </a>
    //                     </li>
    //                     <li className='nav-item'>
    //                         <a href='/#/shallow' className='nav-links'>
    //                             Shallow
    //                         </a>
    //                     </li>

    //                 </ul>
    //                 {button && <Button buttonStyle='btn--outline' buttonSize='btn--medium' onClick={connectWalletPressed}>
    //                             {walletAddress.length > 0 ? (
    //                             "Connected: " +
    //                             String(walletAddress).substring(0, 4) +
    //                             "..." +
    //                             String(walletAddress).substring(38)
    //                             ) : (
    //                               Install()
    //                 )}</Button>}
    //             </div>
    //         </nav>
    //     </>

    // )

    return (
      <>
        <ul >

          <lir>
            <a href="/"  >
              <img src='media/images/Gallery-Goose-Logo.png' width={80}/>
            </a>
          </lir>


          <li>
            <div className='spacer' >
              <p>
                {button && <Button buttonStyle='btn--outline' buttonSize='btn--medium' onClick={connectWalletPressed}>
                  {walletAddress.length > 0 ? (
                  "Connected: " +
                  String(walletAddress).substring(0, 4) +
                  "..." +
                  String(walletAddress).substring(38)
                  ) : (
                  Install()
                  )}</Button>}
                </p>

                {/* <m>
                  {button && <Button buttonStyle='btn--outline' buttonSize='btn--medium' >Menu</Button>}

                </m> */}
            </div>

          </li>
              
          <li><a href='/#/shallow' > Shallow </a></li>




          <li><a href='/#/geese'> Geese </a></li>

        </ul>
      </>
    )
}

export default NavBar