import React, {useEffect, useState} from 'react'
import { Button } from './Button';
import './NavBar.css';
import { 
    connectWallet,
    getCurrentWalletConnected 
} from "../utils/interact";



function NavBar()
{
    const [walletAddress, setWallet] = useState("");
    const [setStatus] = useState("");


    function addWalletListener() {
        if (window.ethereum) {
          window.ethereum.on("accountsChanged", (accounts) => {
            if (accounts.length > 0) {
              setWallet(accounts[0]);
              setStatus("👆🏽 Write a message in the text-field above.");
            } else {
              setWallet("");
              setStatus("🦊 Connect to Metamask using the top right button.");
            }
          });
        } else {
          setStatus(
            <p>
              {" "}
              🦊{" "}
              <a target="_blank" rel="noreferrer" href={`https://metamask.io/download.html`}>
                You must install Metamask, a virtual Ethereum wallet, in your
                browser.
              </a>
            </p>
          );
        }
      }


    useEffect(async () => { //TODO: implement
        const {address, status} = await getCurrentWalletConnected();
        setWallet(address);
        setStatus(status);
    
        addWalletListener();
    }, []);


    const connectWalletPressed = async () => { //TODO: implement
        const walletResponse = await connectWallet();
        setStatus(walletResponse.status);
        setWallet(walletResponse.address);
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


    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <a href="/" className="navbar-logo" >
                        Goose's
                    </a>
                    <ul className='nav-menu'>
                        <li className='nav-item'>
                            <a href='/geese' className='nav-links'>
                                Geese
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href='/shallow' className='nav-links'>
                                Shallow
                            </a>
                        </li>

                    </ul>
                    {button && <Button buttonStyle='btn--outline' onClick={connectWalletPressed}>
                                {walletAddress.length > 0 ? (
                                "Connected: " +
                                String(walletAddress).substring(0, 4) +
                                "..." +
                                String(walletAddress).substring(38)
                                ) : (
                                <span>Connect Wallet</span>
                    )}</Button>}
                </div>
            </nav>
        </>

    )
}

export default NavBar