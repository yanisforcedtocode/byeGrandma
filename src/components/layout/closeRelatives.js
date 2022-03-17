// === css
import Styles from './../css-modules/relativeGallery.module.css'

function CloseRelatives (props){
    return(
        <div className={Styles.closeRelatives__section}>
            <div className={Styles.closeRelatives__section__grid}>
            {props.relatives.map((el, ind)=>{return (
            <div onClick = {props.imageClickHandler} key = {ind} className={Styles.closeRelatives__section__grid__item}>
                <img className={Styles.closeRelatives__section__grid__item__img} src = {el.imgSrc}></img>
            </div>
            ) })}
            </div>
        </div>
    )
}

export default CloseRelatives;
