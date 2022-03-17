// === packages
import React from "react"
import { useState, useEffect } from "react"
// === components
import Left from "./../layout/buttons/left"
import Right from "./../layout/buttons/right"
// === function
import getMsg from "../../apiCalls/getMsg"
import getDocCount from "../../apiCalls/getDocCount"
// css
import styles from "./../css-modules/mainSlide.module.css"
// variables
const getUrl = "https://ap-southeast-1.aws.data.mongodb-api.com/app/application-test-yjumb/endpoint/getAll"
const countUrl = "https://ap-southeast-1.aws.data.mongodb-api.com/app/application-test-yjumb/endpoint/getDocCount"
const limit = 4

const MB_viewport = function(props){
    // states
    const [page, setPage] = useState(1)
    const [data, setData] = useState([])
    const [availPage, setAvailPage] = useState(0)
    // handlers
    const leftHandler = (e)=>{
        if(isInBoundary(page - 1)){
            setPage((prevState)=>{return prevState -1})
        }
    }
    const rightHandler = (e)=>{
        if(isInBoundary(page + 1)){
            setPage((prevState)=>{return prevState + 1})
        }
    }
    const isInBoundary = (n)=>{
        if(n>=1 && n<=availPage){
            return true
        }
    }
    // effects
    // load doc count and first pagination on mount
    useEffect(()=>{
        async function fetchData(){
            const docCount = await getDocCount(countUrl)
            const newData = await getMsg(getUrl, 0, limit)
            setAvailPage((prevState)=>{return Math.ceil((docCount.doccount.$numberLong)/limit)})
            setData((prevState)=>{
                return newData
            })
        }
        fetchData()
    },[])
    // refresh data on page change
    useEffect(()=>{
        async function fetchData(){
            const newData = await getMsg(getUrl, (page - 1)*limit, limit)
            if(newData.length > 0){
                    await setData((prevState)=>{
                        return newData
                    })
            }
        }
        fetchData()
    },[page])
    // refresh data on submit
    useEffect(()=>{
        if(props.msgSubmitted > 0){
            async function fetchData(){
                const newData = await getMsg(getUrl, (page - 1)*limit, limit)
                if(newData.length > 0){
                    const myTimeout = setTimeout(async()=>{
                        await setData((prevState)=>{
                            return newData
                        })
                    }, 2000);
                }
            }
            fetchData()
        }
    },[props.msgSubmitted])

    return (
      <React.Fragment>
        <div>message board viewport</div>
        <Left leftHandler = {leftHandler}class ={styles.slide__container__left}></Left>
        <Right rightHandler = {rightHandler} class ={styles.slide__container__right}></Right>
        {data.map((el, ind)=>{
            const date = new Date(Number(el.created_at.$numberLong))
            // const date = new Date(Number(el.created_at.$numberLong))
                return(
                <div key = {ind}>
                <span>name: {el.name}</span>
                <span>message: {el.message}</span>
                <span>time: {date.toDateString()}</span>
                </div>)
        })}
        <p>current page: {page}</p>
        <p>total pages: {availPage}</p>
      </React.Fragment>
    );
}


export default MB_viewport