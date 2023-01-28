import { useEffect, Component, useState } from "react";
import { Navigate, useLoaderData } from "react-router-dom";
import checkOwnership from "../../../utils/Ownership";
import { Button } from "../../Button";
import Geese from "../Geese";
import DashMain from "./DashBoard-Main"
import DashLoading from "./DashBoard-Loading";


function Dash3() {
    const [Loading, setLoading] = useState(false);
    const [Owner, setOwner] = useState(false);

    const [timer, setTimer] = useState(0);
    const [check, setCheck] = useState(0);
    const [makeChange, setMakeChange] = useState(0);

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
                console.error(error);
            }
        }
    };

    useEffect(() => { //TODO: implement

        getData();

        if(Owner == true)
        {
            setCheck(1);
        }

        if(timer < 1200)
        {
            setTimer(timer + 1);
        }

        if(timer > 1000 && check == 0 )
        {
            setMakeChange(1);
        }
        console.log(timer);

    }, [timer]);

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
        </>
    )
}

export default Dash3;
