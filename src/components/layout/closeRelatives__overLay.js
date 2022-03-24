// === packages
import {useState, useEffect} from 'react'
// === components
import CloseRelativesCard from './closeRelatives__card'
// === css
import styles from './../css-modules/relativeGallery.module.css'

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
            <CloseRelativesCard isOpenedOverlay = {props.isOpenedOverlay}  crossHandler={crossHandler} imgSrc = {props.overlayData.imgSrc} name = {props.overlayData.name} relation = {props.overlayData.relation} message = {props.overlayData.message}></CloseRelativesCard>
        </div>
    )
}

export default CloseRelativesOverlay;
