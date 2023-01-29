import { ethers } from "ethers";
import { getCurrentWalletConnected } from "./interact";

import TestContract from './TestContract2.sol/TestGoose2.json';

// const contractAddress = '0x5eEa696CDA31FdcCE0D58Ca915E812764048fb79';
// const contractAddress = '0x8667eA915895bBc1D403B56c7e6f4eAEfdBa3B9b';
const contractAddress = '0x62c06dcbb8907601c740c57af12e80aada1fa1a7';

const provider = ((window.ethereum != null) ? new ethers.providers.Web3Provider(window.ethereum) : ethers.providers.getDefaultProvider());

const signer = provider.getSigner();

const contract = new ethers.Contract(contractAddress, TestContract.abi, signer);



const checkOwnership = async (walletAddress) => {

    const wall = await (await getCurrentWalletConnected()).address;


    const result = await contract.balanceOf(wall);
        // const result = await contract.safeMint(walletAddress, metaData);

    const balance = result.toNumber();
        // await result.wait();
    // console.log(balance,  "result");

    if(balance >= 1)
    {
        return true;
    }
    else {
        return false;
    }
};


export default checkOwnership;


// Compiled 22 Solidity files successfully
// Deploying contracts with the account: 0x655fD8BD962B23585c2f7eb27601F95CBC5Eb5DB
// Account balance: 400000000000000000
// Token address: 0x5eEa696CDA31FdcCE0D58Ca915E812764048fb79