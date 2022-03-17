// === css
import Styles from "./../css-modules/sections.module.css"
// === variables

function Body(props){
    return (
            <div className={Styles.site_body}>
                {props.children}
            </div>
    )
}

export default Body;