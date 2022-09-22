import {React} from 'react'
import '../GeeseMint.css'
import { Button } from '../Button'
import Geese from './Geese'
import { useEffect, useState } from 'react'
import {mintNFT} from '../../utils/interact'

const Geesemint = (props) => {


    
    return (
        <div className="Minter">
            <h1 id="title">🧙‍♂️ Alchemy NFT Minter</h1>
            <p>
                Simply add your asset's link, name, and description, then press "Mint."
            </p>
            <form>
                <h2>Link to asset: </h2>
                <input
                type="text"
                placeholder="e.g. https://gateway.pinata.cloud/ipfs/<hash>"
                  onChange={(event) => setURL(event.target.value)}
                />
                <h2>Name: </h2>
                <input
                type="text"
                placeholder="e.g. My first NFT!"
                //   onChange={(event) => setName(event.target.value)}
                />
                <h2>Description: </h2>
                <input
                type="text"
                placeholder="e.g. Even cooler than cryptokitties ;)"
                //   onChange={(event) => setDescription(event.target.value)}
                />
            </form>
            <button id="mintButton" onClick={mintNFT}>
                Mint NFT
            </button>
            {/* <p id="status" style={{ color: "red" }}>
                {status}
            </p> */}
    </div>
  );
}

export default Geesemint;