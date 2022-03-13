import React from 'react';
import MainSlide from '../layout/mainSlide';
import TimeLineGallery from '../layout/timeLineGallery';
import CloseRelatives from '../layout/closeRelatives';
import MessageBoard from '../layout/messageBoard';

// === variables

function Body(props){
    return (
        <React.Fragment>
            <div className='site_body'>
                body items.
                {/* <MainSlide></MainSlide>
                <TimeLineGallery></TimeLineGallery>
                <CloseRelatives/>
                <MessageBoard/> */}
            </div>
        </React.Fragment>
    )
}

export default Body;