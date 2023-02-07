import { ethers } from "ethers";

// import TestContract from './TestContract2.sol/TestGoose2.json';
import TestContract from './TestContract3.sol/TestGoose20.json'


// const contractAddress = '0x5eEa696CDA31FdcCE0D58Ca915E812764048fb79';
// const contractAddress = '0x8667eA915895bBc1D403B56c7e6f4eAEfdBa3B9b';
const contractAddress = '0xc35Ea7B5C536d9A379AD583d3b123a60F3e9C46c';

const provider = ((window.ethereum != null) ? new ethers.providers.Web3Provider(window.ethereum) : ethers.providers.getDefaultProvider());

const signer = ((window.ethereum != null) ? provider.getSigner() : null);

const contract = ((window.ethereum != null) ? new ethers.Contract(contractAddress, TestContract.abi, signer)  : null);



const startSeason = async (walletAddress, metaData) => {

    if(window.ethereum != null)
    {

        const result = await contract.seasonStart(
            {
                gasLimit: 50000
            }
        );
            // const result = await contract.safeMint(walletAddress, metaData);

            // await result.wait();
        console.log(result,  "result");
    }
};


export default startSeason;


// Compiled 22 Solidity files successfully
// Deploying contracts with the account: 0x655fD8BD962B23585c2f7eb27601F95CBC5Eb5DB
// Account balance: 400000000000000000
// Token address: 0x5eEa696CDA31FdcCE0D58Ca915E812764048fb79