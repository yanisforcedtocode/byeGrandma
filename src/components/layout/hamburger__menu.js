// === packages
import {useState, useEffect, Fragment} from 'react'
import {Link} from 'react-router-dom'
// === css
import styles from './../css-modules/hamburger.module.css'

const HamburgerMenu = (props)=>{
    // === state
    // === handler
    const menuHandler = ()=>{
        props.setIsOpened(false)
    }
    // === effect
    return (      
        <div className={styles.hamburger__container__menu} style = {{height:`${props.hamState.menuHeight}`}}>
        <div className={styles.hamburger__container__itemsWrapper}>
        {props.navList.map((el, ind)=>{
            return (
              <div onClick = {menuHandler}
                className={styles.hamburger__container__menu__items }
                key={`site__nav__link__mobile__${ind}`}
              ><Link to={el.href}>
                {el.name}
              </Link>
                <div></div>
              </div>
            );
        })}
        </div>
        </div>
    )


}

export default HamburgerMenu