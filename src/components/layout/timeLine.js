
// === packages
import React from 'react';

// === components
import TimeLineGallery from './timeLineGallery';

// === functions

function TimeLine (props){
    // states
    return (
        <div className="timeLine">
          <TimeLineGallery imageClickHandler = {props.imageClickHandler}></TimeLineGallery>
        </div>
    );
}

export default TimeLine;
