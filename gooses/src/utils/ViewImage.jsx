import { ethers } from "ethers";
import { getCurrentWalletConnected } from "./interact";

// import TestContract from './TestContract2.sol/TestGoose2.json';
import TestContract from './Goose_Membership(final).sol/The_Gooses_Geese_Memberships.json'



// const contractAddress = '0x5eEa696CDA31FdcCE0D58Ca915E812764048fb79';
// const contractAddress = '0x8667eA915895bBc1D403B56c7e6f4eAEfdBa3B9b';
const contractAddress = '0xdb96f133d3b7fd44f360722256a9709cd0bc5644';

const provider = ((window.ethereum != null) ? new ethers.providers.Web3Provider(window.ethereum) : ethers.providers.getDefaultProvider());

const signer = ((window.ethereum != null) ? provider.getSigner() : null);

const contract = ((window.ethereum != null) ? new ethers.Contract(contractAddress, TestContract.abi, signer)  : null);



const ImageURL = async (walletAddress) => {

    if(window.ethereum != null)
    {

        const wall = await (await getCurrentWalletConnected()).address;


        const balance = await contract.balanceOf(wall);
    
        for(let i = 0; i < balance; i++) {
            const tokenId = await contract.tokenOfOwnerByIndex(wall, i)

            let tokenMetaDataURI = await contract.tokenURI(tokenId)

            const tokenMetaData = await fetch( tokenMetaDataURI).then((response) => response.json())

            const subet = (({image}) => ({image}))(tokenMetaData);
            const Image = subet.image;
            // console.log(Image);


            return Image;
        }
    }
    else
    {
        return null;
    }
    

};


export default ImageURL;


// Compiled 22 Solidity files successfully
// Deploying contracts with the account: 0x655fD8BD962B23585c2f7eb27601F95CBC5Eb5DB
// Account balance: 400000000000000000
// Token address: 0x5eEa696CDA31FdcCE0D58Ca915E812764048fb79