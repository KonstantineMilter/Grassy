import React from 'react';
import s from "./css/CentringPhoto.module.css";


const CentringPhoto = ({src, rounded = true}) => {
    return (
        <div className={rounded ? s.centringPhotoBlock + s.rounded + " photoCentring" : s.centringPhotoBlock + " photoCentring"}
             style={{backgroundImage: "url(" + src + ")"}}/>
    )
}


export default CentringPhoto;