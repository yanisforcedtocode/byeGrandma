// === packages
import { Fragment, useState} from "react";
// === components
import Body from './../components/sections/body'
import TimeLine from "../components/layout/timeLine";
import Intersection from "../components/layout/intersection";
import TimeLineOverlay from "../components/layout/timeLine__overLay";


// === images
import bg02 from "../asset/images/homepage/intersection12.jpg"

function TimeLinePage (props){
    // states
    const [overlayData, setoverlayData] = useState('')
    const [isOpenedOverlay, setisOpenedOverlay] = useState(false)
    // effect
    // handlers
    const imageClickHandler = (e)=>{
        setisOpenedOverlay(true)
        setoverlayData((prevState)=>{
            return {imgSrc:e.target.src,
            message: e.target.dataset.message}
        })
        console.log(e.target.src)
    }
    return (
        <Fragment>
            <Intersection bg = {bg02} color = "rgb(232 232 232)" title = "時代足跡" message = "婆婆一生經歷無數風雨，以此相冊為其作致敬。"></Intersection>
        <Body color = '#f4f0eb8f'>
            <TimeLineOverlay setisOpenedOverlay = {setisOpenedOverlay} overlayData = {overlayData} isOpenedOverlay = {isOpenedOverlay}></TimeLineOverlay>
            <TimeLine imageClickHandler = {imageClickHandler} setoverlayData = {setoverlayData} setisOpenedOverlay = {setisOpenedOverlay}/>      
        </Body>
        </Fragment>
    )
}

export default TimeLinePage;