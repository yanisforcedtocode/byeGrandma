import React from 'react';
// === css 
import styles from "./../css-modules/sections.module.css"


// === variables

function Footer(props){
    return (
        <React.Fragment>
            <div className={styles.site_footer}>
                <p className={styles.site_footer__credits}>By Yan, and everyone loved by grandma.</p>
            </div>
        </React.Fragment>
    )
}

export default Footer;