import { useEffect, Component, useState } from "react";
import { Navigate, useLoaderData } from "react-router-dom";
import checkOwnership from "../../../utils/Ownership";
import { Button } from "../../Button";
import Geese from "../Geese";
import DashMain from "./DashBoard-Main2"
import DashLoading from "./DashBoard-Loading";


function Dash3() {
    const [Loading, setLoading] = useState(false);
    const [Owner, setOwner] = useState(false);

    const [timer, setTimer] = useState(0);
    const [check, setCheck] = useState(0);
    const [makeChange, setMakeChange] = useState(0);

    let x = 1;

    const getData = async () => {

        if(Loading == false)
        {

            try {
                setLoading(true);
                const res = await checkOwnership();
                const response = res;
                setOwner(response);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                // console.error(error);
            }
        }
    };

    const Check = () => {

        if(x < 100)
        {
            x = x + 1;
        }
        // console.log(x);


        if(Owner == true)
        {
            setCheck(1);
        }

        if(x > 100 && check == 0 )
        {
            setMakeChange(1);
        }
    }

    async function run() {
        setInterval(Check, 1000);
    }

    useEffect(() => { //TODO: implement

        getData();

        run();

    }, []);

    function change() {

        return (
            <>
                {!Owner ? <DashLoading /> : <DashMain />}
            </>
        )
    }


    return(
        <>
            {makeChange == 1 ? <Navigate to={'/geese'} /> : change() }            
       
            {/* <DashMain /> */}
        </>
    )   
}

export default Dash3;
