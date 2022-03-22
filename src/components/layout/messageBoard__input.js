// packages
import React from "react"
import {useState, useEffect} from "react"
// component
import SubmitBtn from "./buttons/submit";
// function
import saveMsg from "./../../apiCalls/saveMsg"
// === css
import styles from "./../css-modules/messageBoard.module.css"
// === variables
const url = "https://ap-southeast-1.aws.data.mongodb-api.com/app/application-test-yjumb/endpoint/newMsg"

const MB_input = function(props){
    // State
    const [name, setName] = useState("")
    const [message, setMessage] = useState("")
    const [isSubmit, setIsSubmit] = useState(false)
    const [warning, setWarning] = useState(false)
    // handler
    const nameHandler = (e)=>{
      setName(e.target.value)
    }
    const setMsgSubmitted = props.setMsgSubmitted
    const messageHandler = (e)=>{
      setMessage(e.target.value)
    }
    const submitHandler = ()=>{
        if (name.length > 0 && message.length>0 && props.isFlowerSelected){
          setIsSubmit(true)
        }else{
          setWarning("no valid message, flower or name")
        }
    }
    // effects
    useEffect(()=>{
      if(isSubmit){
        async function fetchData(){
        await saveMsg(url, name, message, props.isFlowerSelected)
        setMsgSubmitted((prevState)=>{return 1 + prevState})
      }
      fetchData()
      setIsSubmit(false)
      setMessage("")
      setName("")
      setWarning("thanks for your blessings")
      props.setIsFlowerSelected(false)
      }
    },[isSubmit])
    
    return (
      <div className={styles.messageInput__container}>
        <form>
          <div>
            {warning? <p className={styles.messageInput__container__warning}>{warning}</p>:""}

          <h4 className={styles.messageInput__container__title}>Please leave a blessing.</h4>
          <input className={styles.messageInput__container__name} onInput={nameHandler} type = "text" name = "name" value = {name} placeholder="Enter your name here..."></input>
          </div>
          <div>
          <textarea className={styles.messageInput__container__message} onInput={messageHandler} name="comment" value = {message} placeholder="Enter a message here..."></textarea>
          </div>
        </form>
        <SubmitBtn submitHandler = {submitHandler}>submit</SubmitBtn>
      </div>
    );
}


export default MB_input