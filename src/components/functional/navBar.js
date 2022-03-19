import React from 'react';
// === css
import styles from './../css-modules/sections.module.css'

function NavBar (props){
    return(
        <div className={styles.site_header_container__grid}>
        {props.navList.map((el, ind)=>{
            return (
              <a
                className={styles.site_header_container__grid__item}
                key={`site__nav__link${ind}`}
                href={`/${el.href}`}
              >
                <div>{el.name}</div>
              </a>
            );
        })}
        </div>
    )
}

export default NavBar;
