// packages
import React from "react"
import {useState, useEffect} from "react"
// component
import SubmitBtn from "./buttons/submit";
// function
import saveMsg from "./../../apiCalls/saveMsg"
// === variables
const url = "https://ap-southeast-1.aws.data.mongodb-api.com/app/application-test-yjumb/endpoint/newMsg"

const MB_input = function(props){
    // State
    const [name, setName] = useState("")
    const [message, setMessage] = useState("")
    const [isSubmit, setIsSubmit] = useState(false)
    // handler
    const nameHandler = (e)=>{
      setName(e.target.value)
    }
    const setMsgSubmitted = props.setMsgSubmitted
    const messageHandler = (e)=>{
      setMessage(e.target.value)
    }
    const submitHandler = ()=>{
        if (name.length > 0 && message.length>0){
          setIsSubmit(true)
        }else{
          console.log("no valid or name")
        }
    }
    // effects
    useEffect(()=>{
      if(isSubmit){
        async function fetchData(){
        await saveMsg(url, name, message)
        setMsgSubmitted((prevState)=>{return 1 + prevState})
      }
      fetchData()
      setIsSubmit(false)
      setMessage("")
      setName("")
      }
    },[isSubmit])
    
    return (
      <React.Fragment>
        <form>
          <div>
          <input onInput={nameHandler} type = "text" name = "name" value = {name} placeholder="Enter name here"></input>
          </div>
          <div>
          <textarea onInput={messageHandler} name="comment" value = {message} placeholder="Enter text here..."></textarea>
          </div>
        </form>
        <SubmitBtn submitHandler = {submitHandler}>submit</SubmitBtn>
      </React.Fragment>
    );
}


export default MB_input