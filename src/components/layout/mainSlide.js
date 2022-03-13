// === packages
import React from 'react';
// === css
import styles from './../css-modules/mainSlide.module.css'
// === components
import Left from './buttons/left';
import Right from './buttons/right';
import {useState, useEffect} from 'react'




function MainSlide (props){
    // states
    const [currentImg, setCurrentImg] = useState(0)
    // handlers
    // import images
    function importAll(r) {
        return r.keys().map(r);
    }
    const images = importAll(require.context('/src/asset/images/mainSlider', false, /\.(png|jpeg|jpg|svg)$/));
    // left handler
    const leftHandler = function(){
        setCurrentImg(currentImg=>{
            if(isInLBoundary(currentImg)){
                return currentImg - 1
            } else {
                return currentImg
            }
        })
    }
    // right handler
    const rightHandler = function(){
        setCurrentImg(prevState =>{
            if(isInRBoundary(prevState )){
                return prevState  + 1
            } else {
                return prevState 
            }
        })
    }
    // condition
    const isInLBoundary = function (n){
        if(n>0){
            return true
        } else {
            return false
        }
    }
    const isInRBoundary = function (n){
        if(n<images.length - 1){
            return true
        } else {
            return false
        }
    }
    // effects
    useEffect(
        setInterval(
            function(){
console.log("tick")            }, 1000
        ),[]
    )

 
    return(
        <div className={styles.slide}>
            <Left leftHandler = {leftHandler} class ={styles.slide__container__left}></Left>
            <Right rightHandler = {rightHandler} class ={styles.slide__container__right}></Right>
        <div style = {{width:`${images.length}00%`, transform:`translateX(-${currentImg*100/images.length}%)`}}  className={styles.slide__container}>
            {images.map((el, ind)=>{
                return (
                    <div key = {ind} className={styles.slide__container__imgWrapper}>
                        <img className = {styles.slide__container__imgWrapper__img} src = {el}></img>
                        </div>
                )
            })}
            </div>
            </div>
    )
}

export default MainSlide;
