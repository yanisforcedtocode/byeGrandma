// === image
// === css
import styles from "./../css-modules/intersection.module.css"

const Intersection = function(props){
    return (
        <div style = {{backgroundColor : `${props.color}`, backgroundImage: `url(${props.bg})` }} className={styles.intersection__section}>
            <div className={styles.intersection__section__container}>
                <h3 className={styles.intersection__section__container__title}>{props.title}</h3>
                <p className={styles.intersection__section__container__message}>{props.message}</p>
            </div>
        </div>
    )
}


export default Intersection