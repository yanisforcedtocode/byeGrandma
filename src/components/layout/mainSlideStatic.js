// === packages
import React from 'react';
// === css
import styles from './../css-modules/mainSlideStatic.module.css'
// === components
// === image
import image from './../../asset/images/homepage/mainImg/compo02.jpg'




function MainSlideStatic (props){
    // states
    // handlers
    // import images  
    // right handler
    // condition
    return(
        <div className={styles.slide}>
        <div className={styles.slide__container}>
                    <div className={styles.slide__container__imgWrapper}>
                        <img className = {styles.slide__container__imgWrapper__img} src = {image}></img>
                        </div>
            </div>
            </div>
    )
}

export default MainSlideStatic;
