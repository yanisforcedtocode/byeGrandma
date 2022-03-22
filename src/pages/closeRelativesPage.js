// === packages
import {useState, useEffect} from "react";
// === components
import CloseRelatives from "../components/layout/closeRelatives";
import CloseRelativesOverlay from "../components/layout/closeRelatives__overLay";
import Body from './../components/sections/body'
// === files
import image01 from './../asset/images/relativesGallery/001.JPG'
import image02 from './../asset/images/relativesGallery/002.JPG'
import image03 from './../asset/images/relativesGallery/003.JPG'
import image04 from './../asset/images/relativesGallery/004.JPG'
// === variables
const relatives = [
     {imgSrc: image01, name:'Person01', relation:'ab', message: "lorem25"},
     {imgSrc: image02, name:'Person02', relation:'bc', message: "lorem25"},
     {imgSrc: image03, name:'Person03', relation:'cd', message: "lorem25"},
     {imgSrc: image04, name:'Person04', relation:'ce', message: "lorem25"},
     {imgSrc: image01, name:'Person01', relation:'ab', message: "lorem25"},
     {imgSrc: image02, name:'Person02', relation:'bc', message: "lorem25"},
     {imgSrc: image03, name:'Person03', relation:'cd', message: "lorem25"},
     {imgSrc: image04, name:'Person04', relation:'ce', message: "lorem25"}
]

function CloseRelativesPage (props){
    // states
    const [overlayData, setoverlayData] = useState('')
    const [isOpenedOverlay, setisOpenedOverlay] = useState(false)
    // effect
    // handlers
    const imageClickHandler = (ind)=>{
        setisOpenedOverlay(true)
        setoverlayData(relatives[ind])
    }

    return (
        <Body>
            <CloseRelativesOverlay setisOpenedOverlay = {setisOpenedOverlay} overlayData = {overlayData} isOpenedOverlay = {isOpenedOverlay}/>
            <CloseRelatives imageClickHandler = {imageClickHandler} relatives = {relatives} setoverlayData = {setoverlayData} setisOpenedOverlay = {setisOpenedOverlay}/>
        </Body>
    )
}

export default CloseRelativesPage;