// === packages
import {memo} from 'react';
import { Link } from "react-router-dom";
// === css
import styles from './../css-modules/sections.module.css'

function NavBar ({navList}){
    return(
        <div className={styles.site_header_container__grid}>
        {navList.map((el, ind)=>{
            return (
              <div
                className={styles.site_header_container__grid__item}
                key={`site__nav__link${ind}`}
                
              ><Link to={el.href}>
                {el.name}
              </Link>
                <div></div>
              </div>
            );
        })}
        </div>
    )
}

export default memo(NavBar);
