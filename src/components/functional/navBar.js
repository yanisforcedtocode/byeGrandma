import React from 'react';

function NavBar (props){
    console.log(props.navList)
    return(
        <ul>
        {props.navList.map((el, ind)=>{
            return (<li key = {ind}>{el}</li>)
        })}
        </ul>
    )
}

export default NavBar;
