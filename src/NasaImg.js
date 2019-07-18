import React from "react"
import Iframe from 'react-iframe'
import NasaCard from "./NasaCard"

const NasaImg = (props) => {
    const {imgValue} = props;
    console.log("I am a testing value in NasaImg", imgValue);

    return(
        <div className = "nasa-img">
        <img src={imgValue} alt='nasa-img'/>
       
        {/* for videos: */}
        {/* <Iframe src={testing} alt='nasa-video'/>   */}
        
        </div>
    );
}

export default NasaImg;


