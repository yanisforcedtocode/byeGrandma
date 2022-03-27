// === packages
import {Fragment} from 'react';

// === css
import styles from './../css-modules/timeline.module.css'

function TimeLineGalleryYear (props){
    return(
        <Fragment>
            <div className={styles.timeLineGallery__section__container}>
                <h3 className={styles.timeLineGallery__section__container__year}>Year {props.year}</h3>
                <p className={styles.timeLineGallery__section__container__description}>{props.description}</p>
                <div className={styles.timeLineGallery__section__container__imgGridWrapper}>
                    <div className={styles.timeLineGallery__section__container__imgGridWrapper__imgGrid}>
                        {props.images.map((el, ind)=>{
                            return(
                                <div key = {`timeLineImg__${ind}`} onClick = {props.imageClickHandler} className={styles.timeLineGallery__section__container__imgGridWrapper__imgGrid__imgWrapper}>
                                    <img src = {el} className={styles.timeLineGallery__section__container__imgGridWrapper__imgGrid__imgWrapper__img}></img>
                                </div>
                                    )
                                })}
                    </div>
                </div>
            </div>
        </Fragment>



    )
}

export default TimeLineGalleryYear;
