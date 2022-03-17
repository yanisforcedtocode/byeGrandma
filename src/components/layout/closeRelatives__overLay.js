// === packages
import {useState, useEffect} from 'react'
// === css
import styles from './../css-modules/relativeGallery.module.css'
// === files
import cross from './../../asset/icons/xmark-solid.svg'


function CloseRelativesOverlay (props){
    // state
    // handler
    const crossHandler = ()=>{
        console.log('close')
    }
    return(
        <div className={styles.closeRelatives__overlay}>
            <img onClick = {crossHandler} src={cross} alt="" className={styles.closeRelatives__overlay__cross} />
            close relatives overlay.
        </div>
    )
}

export default CloseRelativesOverlay;
