// === packages
import React from 'react'
// === components
import MainSlide from "../components/layout/mainSlide";
import MessageBoard from "../components/layout/messageBoard";
import Body from './../components/sections/body'
import Intersection from "../components/layout/intersection";

function HomePage (props){
    return (
        <React.Fragment>
        <Body>
            <MainSlide/>
        </Body>
            <Intersection color = "rgba(60,60,60,0.8)" title = "Message Board" message = "Leave a message to honor the memory of grandma."></Intersection>
        <Body>
            <MessageBoard/>
        </Body>
        </React.Fragment>

    )
}

export default HomePage;