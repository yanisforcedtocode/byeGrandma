import React from 'react';
import NavBar from '../functional/navBar';

// === variables
const navList = [{name:"home", href:""},{name:"time line", href:"timeline"},{name:"loved ones", href:"lovedones"}]


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