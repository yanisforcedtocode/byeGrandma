import left from "./../../../asset/icons/chevron-circle-left-solid.svg"

function Left(props){
    // === handler
    const clickHandler = props.leftHandler
    return (
        <img onClick = {clickHandler} src={left} className = {props.class}></img>
    )
}

export default Left