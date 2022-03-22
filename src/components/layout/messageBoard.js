
// === packages
import React from 'react';
import {useState} from 'react'

// === components
import MB_input from './messageBoard__input';
import MB_viewport from './messageBoard__viewport';
import FlowerPicker from './messageBoard__flowerPicker';

// === functions
function importAll(r) {
  return r.keys().map(r);
}
// import flowers images
const images = importAll(
  require.context("/src/asset/images/flowers", false, /\.(png|jpeg|jpg|svg)$/)
);


function MessageBoard (props){
    // states
    const [msgSubmitted, setMsgSubmitted] = useState(0)
    const [isFlowerSelected, setIsFlowerSelected] = useState(false)

    return (
        <div className="msgBoard__section">
          <MB_viewport images = {images} isFlowerSelected = {isFlowerSelected} msgSubmitted={msgSubmitted} />
          <FlowerPicker images = {images} isFlowerSelected = {isFlowerSelected} setIsFlowerSelected = {setIsFlowerSelected}></FlowerPicker>
          <MB_input isFlowerSelected = {isFlowerSelected} setIsFlowerSelected = {setIsFlowerSelected} setMsgSubmitted={setMsgSubmitted} />
        </div>
    );
}

export default MessageBoard;
