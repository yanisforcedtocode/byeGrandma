import React from 'react';
import NavBar from '../functional/navBar';

// === variables
const navList = ["home", "gallery", "msg"]

function Header(props){
    return (
        <React.Fragment>
            <div className='site_header'>
                header items.
                <NavBar navList ={navList} ></NavBar>
            </div>
        </React.Fragment>
    )
}

export default Header;