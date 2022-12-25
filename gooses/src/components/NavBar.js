import React, {useEffect, useState} from 'react'
import { Button } from './Button';
import './NavBar.css';
import './NavBar2.css';

import { 
    connectWallet,
    getCurrentWalletConnected 
} from "../utils/interact";
import '../App.css'



function NavBar()
{
    const [walletAddress, setWallet] = useState("");



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
          <a className='installLink' href='https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en'>Install MetaMask</a>
        )
      }
    }



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
        <ul>
          <li>
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

          </li>

              
          <li><a href='/#/shallow' > Shallow </a></li>




          <li><a href='/#/geese'> Geese </a></li>

          <lir><a href="/" className="navbar-logo2" >
            <img className="navbar-logo2" src='media/images/Gallery-Goose-Logo.png' width={80}/>
          </a></lir>
        </ul>
      </>
    )
}

export default NavBar