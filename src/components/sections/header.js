// === packages
import React from 'react';
import NavBar from '../functional/navBar';
// === css
import styles from './../css-modules/sections.module.css'

// === variables
const navList = [{name:"home", href:""},{name:"time line", href:"timeline"},{name:"loved ones", href:"lovedones"}]


function Header(props){
    return (
            <div className={styles.site_header}>
                <div className={styles.site_header_container}>
                <h3 className={styles.site_header_contaier__title}>Beloved Grandma</h3>
                <NavBar navList ={navList} ></NavBar>
                </div>
            </div>
    )
}

export default Header;