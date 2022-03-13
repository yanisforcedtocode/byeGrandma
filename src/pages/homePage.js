// === packages
import React from "react";
// === components
import MainSlide from "../components/layout/mainSlide";
import MessageBoard from "../components/layout/messageBoard";

function HomePage (props){
    return (
        <React.Fragment>
            <MainSlide/>
            <MessageBoard/>
        </React.Fragment>

    )
}

export default HomePage;