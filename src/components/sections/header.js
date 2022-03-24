// === packages
import {useState, useEffect, Fragment, memo} from 'react';

// === components
import NavBar from '../functional/navBar';
import Hamburger from '../layout/hamburger';
import HamburgerMenu from '../layout/hamburger__menu';
// === css
import styles from './../css-modules/sections.module.css'
// === image
// === variables
const navList = [{name:"首頁", href:""},{name:"time line", href:"timeline"},{name:"婆婆的摯親", href:"lovedones"}]


function Header(){
    // === state
    const [isOpened, setIsOpened] = useState(false)
    const [hamState, setHamState] = useState({
        hamScale: '50%',
        menuHeight: '0px'
    })
    return (
       <Fragment>
            <div className={styles.site_header}>
                <div className={styles.site_header_container}>
                <h3 className={styles.site_header_contaier__title}>Farewell, grandma</h3>
                <NavBar  navList ={navList} ></NavBar>
                <Hamburger setIsOpened = {setIsOpened} setHamState = {setHamState} isOpened = {isOpened} hamState = {hamState}  ></Hamburger>
                </div>
            </div>
            <HamburgerMenu setIsOpened = {setIsOpened} hamState = {hamState} navList ={navList}></HamburgerMenu>
            
        </Fragment>
  
    )
}

export default memo(Header);