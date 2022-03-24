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
          setWarning("請正確填寫姓名，祝福及鮮花")
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
      setWarning("Thanks for your blessings!")
      props.setIsFlowerSelected(false)
      }
    },[isSubmit])
    
    return (
      <div className={styles.messageInput__container}>
        <form>
          <div>
            {warning? <p className={styles.messageInput__container__warning}>{warning}</p>:""}

          <h4 className={styles.messageInput__container__title}>請留下祝福</h4>
          <p className={styles.messageInput__container__subtitle}>名字:</p>
          <input className={styles.messageInput__container__name} onInput={nameHandler} type = "text" name = "name" value = {name} placeholder="請在此填寫名字..."></input>
          </div>
          <div>
            <p className={styles.messageInput__container__subtitle}>祝福:</p>
          <textarea className={styles.messageInput__container__message} onInput={messageHandler} name="comment" value = {message} placeholder="請在此填寫祝福..."></textarea>
          </div>
        </form>
        <SubmitBtn submitHandler = {submitHandler}>確認獻花及留言</SubmitBtn>
      </div>
    );
}


export default MB_input