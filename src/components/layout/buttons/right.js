import left from "./../../../asset/icons/circle-chevron-right-solid.svg"

function Right(props){
    // === handler
    const clickHandler = props.rightHandler
    return (
        <img src={left} onClick = {clickHandler} className = {props.class}></img>
    )
}

export default Right