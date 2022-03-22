// === packages
import {useState, useEffect} from 'react'
// === css
import styles from './../css-modules/relativeGallery.module.css'
// === files
import cross from './../../asset/icons/xmark-solid.svg'


function CloseRelativesOverlay (props){
    console.log(props.isOpenedOverlay===false)
    // state
    
    // handler
    const crossHandler = ()=>{
        console.log('close')
        props.setisOpenedOverlay(false)
    }
    
    return(
        <div className={styles.closeRelatives__overlay} style = {{display:`${props.isOpenedOverlay? "block":"none"}`}}>
            <img onClick = {crossHandler} src={cross} alt="" className={styles.closeRelatives__overlay__cross} />
            <p>{props.overlayData.name}</p>
            <p>{props.overlayData.relation}</p>
            <p>{props.overlayData.message}</p>
            <img src = {props.overlayData.imgSrc}></img>
            close relatives overlay.
        </div>
    )
}

export default CloseRelativesOverlay;
