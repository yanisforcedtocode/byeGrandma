// === css
import styles from "./../css-modules/sections.module.css"
// === image
import background from "./../../asset/images/homepage/intersection05.jpg"
// === variables

function Body(props){
    return (
            <div style = {{backgroundImage: `url(${props.bg})`}} className={styles.site_body}>
                <div  className={styles.site_body__container}>
                {props.children}
                </div>
            </div>
    )
}

export default Body;