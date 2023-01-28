import {React, useEffect, useState} from 'react';
import { getCurrentWalletConnected } from '../../../utils/interact';
import { Button } from '../../Button';
import '../../Shallow.css'
import checkOwnership from '../../../utils/Ownership';
import { re } from 'mathjs';
import ImageURL from '../../../utils/ViewImage';

function DashMain() {

    const [wallet, setWallet] = useState(null);
    const [Link, setLink] = useState(null);
    
    async function URL() {
        const res = await ImageURL();
        console.log(res);

        setLink(res);
    }

    const Check = async () => {
        const result = await checkOwnership();
        console.log(result);
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
        <div className='fillBlack'>
        
            <div className='container'>

                <div className='containerBlackFill'>
                    <div className='centered'>
                        <Button buttonStyle='btn--outline' buttonSize='btn--medium' >
                            Load Dashboard
                        </Button>
                        <div>
                            <img src={Link} alt="error" width='500px'></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </>
  );
}

export default DashMain;
