// === packages
import {useState, useEffect} from 'react'
// === css
import styles from './../css-modules/relativeGallery.module.css'
// === images
import cross from './../../asset/icons/xmark-solid.svg'
import bg01 from './../../asset/images/homepage/intersection12.jpg'

function TimeLineCard (props){
    // state
    const [cardOpacity, setCardOpacity] = useState('0%')
    // handler
    // useEffect
    useEffect(()=>{
        if(props.isOpenedOverlay){
            setTimeout(()=>{
                setCardOpacity((prevState)=>{return '100%'})
            },100)
        }else{
            setTimeout(()=>{
                setCardOpacity((prevState)=>{return '0%'})
            },200)
        }

    },[props.isOpenedOverlay])
    return (
      <div className={styles.closeRelatives__overlay__card} style = {{opacity:cardOpacity}}>
          <div className={styles.closeRelatives__overlay__card__container} style = {{backgroundImage:`url(${bg01})`}}>
              <img className = {styles.closeRelatives__overlay__card__container__cross} src = {cross} onClick = {props.crossHandler}></img>
              <h3 className={styles.closeRelatives__overlay__card__container__title}>細說百年回憶</h3>
            <div className={styles.closeRelatives__overlay__card__container__grid}>
                <div className={styles.closeRelatives__overlay__card__container__grid__imgWrapper}>
                    <img src = {props.imgSrc} className={styles.closeRelatives__overlay__card__container__grid__img}></img>
                </div>
                <div className={styles.closeRelatives__overlay__card__container__grid__contentWrapper}>
                    <p className= {styles.closeRelatives__overlay__card__container__grid__name}>{props.name}</p>
                    <p className= {styles.closeRelatives__overlay__card__container__grid__name}></p>
                    <p className= {styles.closeRelatives__overlay__card__container__grid__title}></p>
                    <p className= {styles.closeRelatives__overlay__card__container__grid__relation}>{props.relation}</p>
                    <p className= {styles.closeRelatives__overlay__card__container__grid__title}></p>
                    <p className= {styles.closeRelatives__overlay__card__container__grid__message}>{props.message}</p>
                </div>
            </div>
          </div>
      </div>
     
    );
}

export default TimeLineCard
