// === css
import styles from "./../css-modules/sections.module.css"

function MainFrame(props){

    return (
            <div  className={styles.site_mainFrame}>
                <div className={styles.site_mainFrame__container}>
                {props.children}
                </div>
            </div>
    )
}

export default MainFrame;