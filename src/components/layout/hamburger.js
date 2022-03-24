// === packages
import {useState, useEffect, Fragment} from 'react'
import {Link} from 'react-router-dom'
// === css
import styles from './../css-modules/hamburger.module.css'

const Hamburger = (props)=>{
    // === state
    // === handler
    const hamHandler = ()=>{
        props.isOpened? props.setIsOpened(false):props.setIsOpened(true)
    }
    // === effect
    useEffect(()=>{
        console.log(props.isOpened)
        if(props.isOpened){
            props.setHamState((prevState)=>{
                return {
                    hamScale: '90%',
                    menuHeight: '100px'
                }
            })
        } else {
            props.setHamState((prevState)=>{
                return {
                    hamScale: '100%',
                    menuHeight: '0px'
                }
            })
        }
    }, [props.isOpened])
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