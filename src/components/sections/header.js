// === packages
import React from 'react';
import NavBar from '../functional/navBar';
// === css
import Styles from './../css-modules/sections.module.css'

// === variables
const navList = [{name:"home", href:""},{name:"time line", href:"timeline"},{name:"loved ones", href:"lovedones"}]


function Header(props){
    return (
            <div className={Styles.site_header}>
                header items.
                <NavBar navList ={navList} ></NavBar>
            </div>
    )
}

export default Header;