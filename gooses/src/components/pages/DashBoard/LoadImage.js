import {React, useEffect, useState} from 'react';
import { getCurrentWalletConnected } from '../../../utils/interact';
import { Button } from '../../Button';
import '../../Shallow.css'
import checkOwnership from '../../../utils/Ownership';
import { re } from 'mathjs';
import ImageURL from '../../../utils/ViewImage';
import DashBlog from './DashBoard-Blog/Blog';


function DashMain(IMGSize) {

    const [wallet, setWallet] = useState(null);
    const [Link, setLink] = useState(null);
    
    async function URL() {
        const res = await ImageURL();
        // console.log(res);

        setLink(res);
    }

    useEffect(() => { //TODO: implement

        async function fetchData() {
          const {address, status} = await getCurrentWalletConnected();
          setWallet(address);
        }
    
        fetchData();
        URL();
    }, []);
    


  return (
    <>

        <div>
            <img src={Link} alt="Goose" width="400px" ></img>
        </div>
  </>
  );
}

export default DashMain;
