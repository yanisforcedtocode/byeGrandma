// === packages
import React from 'react'
// === components
import MainFrame from '../components/sections/mainFrame';
import MainSlideStatic from '../components/layout/mainSlideStatic';
import MessageBoard from "../components/layout/messageBoard";
import Body from './../components/sections/body'
import Intersection from "../components/layout/intersection";
// === images
import bg01 from "../asset/images/homepage/intersection07.jpg"
import bg02 from "../asset/images/homepage/intersection12.jpg"
import bg03 from "../asset/images/homepage/intersection13.jpg"

// === variables
const bgColor = "rgb(163 167 166)"

function HomePage (props){
    return (
        <React.Fragment>
        <Body bg = {bg01}>
            <MainSlideStatic/>
        </Body>
            <Intersection bg = {bg02} color = "rgb(232 232 232)" title = "Message Board" message = "Leave a blessing to honor the memory of grandma."></Intersection>
        <Body >
            <MessageBoard/>
        </Body>
        </React.Fragment>
    )
}

export default HomePage;