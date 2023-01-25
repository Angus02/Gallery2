import { ethers } from "ethers";
import { connectWallet } from "./interact";

import TestContract from './TestContract2.sol/TestGoose2.json';

// const contractAddress = '0x5eEa696CDA31FdcCE0D58Ca915E812764048fb79';
// const contractAddress = '0x8667eA915895bBc1D403B56c7e6f4eAEfdBa3B9b';
const contractAddress = '0xf6905210968fb85ff664a77a92a4751bd5ca2e80';

const provider = new ethers.providers.Web3Provider(window.ethereum);

const signer = provider.getSigner();

const contract = new ethers.Contract(contractAddress, TestContract.abi, signer);



const mintToken = async (walletAddress, metaData) => {
    const connection = contract.connect(signer);
    const addr = connection.address;
    const result = await contract.PayToMint(walletAddress, metaData,
        {
            value: ethers.utils.parseEther('0.1')
        
        });
    await result.wait();
        // const result = await contract.safeMint(walletAddress, metaData);

        // await result.wait();
    console.log(metaData,  "metadata");
};


export default mintToken;


// Compiled 22 Solidity files successfully
// Deploying contracts with the account: 0x655fD8BD962B23585c2f7eb27601F95CBC5Eb5DB
// Account balance: 400000000000000000
// Token address: 0x5eEa696CDA31FdcCE0D58Ca915E812764048fb79