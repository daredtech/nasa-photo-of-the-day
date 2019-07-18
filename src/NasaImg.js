import React from "react"
import Iframe from 'react-iframe'
import NasaCard from "./NasaCard"
import { Image } from 'semantic-ui-react'

const NasaImg = (props) => {
    const {imgValue} = props;
    console.log("I am a testing value in NasaImg", imgValue);

    return(
        <div className = "nasa-img">
        <Image src={imgValue}  fluid />
       
        {/* for videos: */}
        {/* <Iframe src={testing} alt='nasa-video'/>   */}
        
        </div>
    );
}

export default NasaImg;


