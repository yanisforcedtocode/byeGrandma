// === packages
import React from 'react'
// === components
import TimeLineGalleryYear from './timeLineGallery__year';
// === css
import styles from './../css-modules/timeline.module.css'
// === functions
function importAll(r) {
    return r.keys().map(r);
  }
const appendImgUrl = (year, ns)=>{
  return `https://storage.googleapis.com/grandmaimgasset/timeline/${year}/jpg/${ns}`
}
const appendImgUrlArr = (data, year)=>{
  const arr = data.map((el)=>{
    return appendImgUrl(year, el)
  })
  return arr
}


// import timeline images
const img1960 = ['1960_00.jpg', '1960_01.jpg', '1960_02.jpg',  '1960_03.jpg',  '1960_04(胡文虎別墅).jpg', '1960_05(胡文虎別墅).jpg', '1960_06(胡文虎別墅).jpg']
const img1970 = ['1970_00.jpg','1970_01.jpg']
const img1980 = ['1980_00.jpg',  '1980_01.jpg',  '1980_02.jpg',  '1980_03.jpg']
const img1990 = ['1990_00.jpg', '1990_01.jpg',  '1990_02.jpg',  '1990_03.jpg',  '1990_04.jpg',  '1990_05.jpg',  '1990_06.jpg',  '1990_07.jpg',  '1990_08.jpg',  '1990_09.jpg',  '1990_10(macau).jpg',  '1990_11(macau).jpg',  '1990_12(macau).jpg',  '1990_13(macau).jpg',  '1990_14(macau).jpg','1990_15(macau).jpg',  '1990_16(macau).jpg',  '1990_17(macau).jpg',  '1990_18(macau).jpg',  '1990_19(airport).jpg',  '1990_20.jpg']
const img2000 = ['2000_00(TaiWo).jpg', '2000_01.jpeg','2000_02.jpeg', '2000_03.jpeg']
const img2010 = ['2010_00.jpg',  '2010_01.jpg',   '2010_02.jpg', '2010_03.jpg', '2020_010.jpg', '2020_011.jpg', '2020_012.jpg', '2020_013.jpg', '2020_014.jpg',   '2020_015.jpg',  '2020_016.jpg',  '2020_017.jpg', '2020_018.jpg', '2020_019.jpg', '2020_020.jpg', '2020_021.jpg', '2020_022.jpg', '2020_023.jpg', '2020_024.jpg' , '2020_025.jpg', '2020_026.jpg', '2020_04.jpg', '2020_05.jpg', '2020_06.jpg'
  ,'2020_07.jpg'
  ,'2020_08.jpg'
  ,'2020_09.jpg']
const img2020 = ['2020_01.jpg',
  '2020_02.jpg',
  '2020_03.jpg',
  '2020_04.jpg','2020_05.jpeg']
const images_02 = {img1960, img1970,img1980, img1990, img2000, img2010, img2020}
  
function TimeLineGallery (props){
    // handlers
    return(
        <div className={styles.timeLineGallery__section}>
            <TimeLineGalleryYear  imageClickHandler = {props.imageClickHandler} images = {appendImgUrlArr(img1960, 1960)} year = '1960' description = '60 年代。建立幸福家庭，子女尚幼，生活艱辛但為家庭努力不懈。'></TimeLineGalleryYear>
            <TimeLineGalleryYear  imageClickHandler = {props.imageClickHandler} images = {appendImgUrlArr(img1970, 1970)} year = '1970' description = '70年代的點滴。'></TimeLineGalleryYear>
            <TimeLineGalleryYear  imageClickHandler = {props.imageClickHandler} images = {appendImgUrlArr(img1980, 1980)} year = '1980' description = '80年代，子女漸長成，生活簡單但幸福。'></TimeLineGalleryYear>
            <TimeLineGalleryYear  imageClickHandler = {props.imageClickHandler} images = {appendImgUrlArr(img1990, 1990)} year = '1990' description = '90年代，子學成上進，前景滿有希望。'></TimeLineGalleryYear>
            <TimeLineGalleryYear  imageClickHandler = {props.imageClickHandler} images = {appendImgUrlArr(img2000, 2000)} year = '2000' description = '2000年代的回憶。'></TimeLineGalleryYear>
            <TimeLineGalleryYear  imageClickHandler = {props.imageClickHandler} images = {appendImgUrlArr(img2010, 2010)} year = '2010' description = '2010年代，兒孫滿堂，幸福美滿。日日有子孫請飲茶，每逢時節更聚餐不絶。'></TimeLineGalleryYear>
            <TimeLineGalleryYear  imageClickHandler = {props.imageClickHandler} images = {appendImgUrlArr(img2020, 2020)} year = '2020' description = '2020年代，回顧充滿愛的一生。'></TimeLineGalleryYear>
            </div>
    )
}

export default TimeLineGallery;
