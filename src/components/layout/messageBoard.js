
// === packages
import React from 'react';
import {useState} from 'react'

// === components
import MB_input from './messageBoard__input';
import MB_viewport from './messageBoard__viewport';

// === functions

function MessageBoard (props){
    // states
    const [msgSubmitted, setMsgSubmitted] = useState(0)

    return(
        <div className='msgBoard__section'>
            message board items.
            <MB_viewport msgSubmitted = {msgSubmitted}/>
            <MB_input setMsgSubmitted = {setMsgSubmitted}/>
            </div>
    )
}

export default MessageBoard;
