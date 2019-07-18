import React, {useEffect, useState} from "react";
import axios from "axios";
import NasaImg from "./NasaImg"


const NasaCard = () => {
    let imgURl= null;

    const [testing, setTesting] = useState("Testing");

    useEffect(() => {
        //to request information from the server
        axios.get("https://api.nasa.gov/planetary/apod?api_key=YKfhHNbrq9FMdZ1jgEV5nXxD6jdBGw1I8bf6al9f")
        //if successful
        .then(success => {
            // console.log('Success');
            console.log('Success value: ', success);
            const result=success.data.url;
            console.log('Result value:', result);
            imgURl = success.data.url;
            // console.log('IMG URL in THEN', imgURl);
            setTesting(imgURl);
        })
        //if not successful
        .catch(failure => {
            console.log('Failure');
        })
    }, [testing])

    return(

        <div className='nasa-card'>
            My NasaCard to be changed later
            <div>{imgURl} </div>
            <NasaImg imgURl={imgURl} testing={testing}/>
        </div>
    );
}

export default NasaCard;