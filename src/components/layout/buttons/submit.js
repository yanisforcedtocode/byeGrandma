// === css
import styles from './../../css-modules/buttons.module.css'

function SubmitBtn(props){
    // === handler
    const clickHandler = props.submitHandler
    return (
        <div onClick = {clickHandler} className={styles.submitBtn}>{props.children}</div>
    )
}

export default SubmitBtn