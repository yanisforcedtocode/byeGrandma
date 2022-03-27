// === packages
import {useState, useEffect} from 'react'
// === components
import TimeLineCard from './timeLine__card'
// === css
import styles from './../css-modules/relativeGallery.module.css'

function TimeLineOverlay (props){
    // state
    // handler
    const crossHandler = ()=>{
        props.setisOpenedOverlay(false)
    }
    
    return(
        <div className={styles.closeRelatives__overlay} style = {{display:`${props.isOpenedOverlay? "flex":"none"}`}}>
            <TimeLineCard isOpenedOverlay = {props.isOpenedOverlay}  crossHandler={crossHandler} imgSrc = {props.overlayData.imgSrc} name = {props.overlayData.name} relation = {props.overlayData.relation} message = {props.overlayData.message}></TimeLineCard>
        </div>
    )
}

export default TimeLineOverlay;
