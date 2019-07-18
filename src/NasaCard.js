import React, {useEffect, useState} from "react";
import axios from "axios";
import NasaImg from "./NasaImg"
import styled from "styled-components";


const NasaCard = () => {
    let imgURl= null;
    const [imgValue, setImgValue] = useState("");

    useEffect(() => {
        //to request information from the server
        axios.get("https://api.nasa.gov/planetary/apod?api_key=YKfhHNbrq9FMdZ1jgEV5nXxD6jdBGw1I8bf6al9f")        
        //if successful
        .then(success => {
            console.log('Success');
            imgURl = success.data.url;
            setImgValue(imgURl);
        })
        //if not successful
        .catch(failure => {
            console.log('Failure');
        })
    }, [imgValue])

    const Link = styled.a`
    font-size: 1.5rem;
    font-weight: bold;
    color: #c62d1f;
    `

    return(

        <div className='nasa-card'>
            <div className='img-holder'>{imgURl}  <NasaImg imgURl={imgURl} imgValue={imgValue}/></div>
           
            <Link href="https://www.nasa.gov/"> Courtesy NASA.gov</Link>

        </div>
    );
}

export default NasaCard;