// === packages
import {useState, useEffect} from 'react'
// === css
import styles from './../css-modules/relativeGallery.module.css'

function CloseRelativesCard (props){
    // state
    
    // handler
    const crossHandler = ()=>{
        props.setisOpenedOverlay(false)
    }
    
    return (
      <div className={styles.closeRelatives__overlay__card}>
          <div className={styles.closeRelatives__overlay__card__container}>
            <div className={styles.closeRelatives__overlay__card__container__grid}>
                <div className={styles.closeRelatives__overlay__card__imgWrapper}>
                    <img className={styles.closeRelatives__overlay__card__img}></img>
                </div>
                <div className={styles.closeRelatives__overlay__card__contentWrapper}>
                    <p className={styles.closeRelatives__overlay__card__name}></p>
                    <p className={styles.closeRelatives__overlay__card__relation}></p>
                    <p className={styles.closeRelatives__overlay__card__message}></p>
                </div>
            </div>
          </div>
      </div>
     
    );
}

export default CloseRelativesCard;
