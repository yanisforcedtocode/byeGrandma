import React from 'react';

function NavBar (props){
    return(
        <ul>
        {props.navList.map((el, ind)=>{
            return (<a key = {`site__nav__link${ind}`} href = {`/${el.href}`}><li >{el.name}</li></a>)
        })}
        </ul>
    )
}

export default NavBar;
