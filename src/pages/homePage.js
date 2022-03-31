// === packages
import React from 'react'
// === components
import MainSlideStatic from '../components/layout/mainSlideStatic';
import MessageBoard from "../components/layout/messageBoard";
import Body from './../components/sections/body'
import Intersection from "../components/layout/intersection";
import BrokenStuff from '../components/layout/brokenStuff';
import ErrorBoundary from '../components/functional/errorBoundary';

// === images
import bg01 from "../asset/images/homepage/intersection07.jpg"
import bg02 from "../asset/images/homepage/intersection12.jpg"

// === variables
const bgColor = "rgb(163 167 166)"

function HomePage (){
    return (
        <React.Fragment>
            {/* <ErrorBoundary>
                <BrokenStuff></BrokenStuff>
            </ErrorBoundary> */}
        <Body bg = {bg01}>
            <MainSlideStatic/>
        </Body>
            <Intersection bg = {bg02} color = "rgb(232 232 232)" title = "告別感言" message = "獻上鮮花，以及留下對婆婆最真切的祝福："></Intersection>
        <Body >
            <MessageBoard/>
        </Body>
        </React.Fragment>
    )
}

export default HomePage;