// === packages
import {useEffect} from 'react'
// === css
import styles from './../css-modules/hamburger.module.css'

const Hamburger = (props)=>{
    // === state
    // === handler
    // === variables
    let isOpened = props.isOpened
    let setHamState = props.setHamState
    const hamHandler = ()=>{
        props.isOpened? props.setIsOpened(false):props.setIsOpened(true)
    }
    // === effect
    useEffect(()=>{
        if(isOpened){
            setHamState((prevState)=>{
                return {
                    hamScale: '90%',
                    menuHeight: '100px'
                }
            })
        } else {
            setHamState((prevState)=>{
                return {
                    hamScale: '100%',
                    menuHeight: '0px'
                }
            })
        }
    }, [isOpened, setHamState])
    return (
        <div onClick = {hamHandler} className={styles.hamburger}>
        <div className={styles.hamburger__container} style = {{transform:`scale(${props.hamState.hamScale})`}}>
            <div className={styles.hamburger__container__lines}></div>
            <div className={styles.hamburger__container__lines}></div>
            <div className={styles.hamburger__container__lines}></div>
        </div>
        </div>

    )


}

export default Hamburger