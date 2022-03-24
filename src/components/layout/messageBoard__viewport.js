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
import styles from "./../css-modules/messageBoard.module.css"
// variables
const getUrl = "https://ap-southeast-1.aws.data.mongodb-api.com/app/application-test-yjumb/endpoint/getAll"
const countUrl = "https://ap-southeast-1.aws.data.mongodb-api.com/app/application-test-yjumb/endpoint/getDocCount"
const limit = 4


const MB_viewport = function(props){
    // variables
    const images = [...props.images]
    // states
    const [page, setPage] = useState(1)
    const [data, setData] = useState([])
    const [availPage, setAvailPage] = useState(0)
    const [vpOpacity, setVpOpacity] = useState(`0%`)
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
    const randomInt = (n)=>{
        return Math.ceil((Math.random()*n))
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
            setVpOpacity((prevState)=>{return "100%"})
        }
        fetchData()
    },[])
    // refresh data on page change
    useEffect(()=>{
        async function fetchData(){
            setVpOpacity((prevState)=>{return "0%"})
            const newData = await getMsg(getUrl, (page - 1)*limit, limit)
            if(newData.length > 0){
                setTimeout(() => {
                    setData((prevState)=>{
                        return newData
                    })
                }, 300);
            }
            setTimeout(() => {
                setVpOpacity((prevState)=>{return '100%'})
            }, 300);
        }
        fetchData()
    },[page])
    // refresh data on submit
    useEffect(()=>{
        if(props.msgSubmitted > 0){
            if(page !== 1){setPage(1)}
            if(page === 1){
                async function fetchData(){
                    const newData = await getMsg(getUrl, (page - 1)*limit, limit)
                    if(newData.length > 0){
                        setTimeout(() => {
                            setData((prevState)=>{
                                return newData
                            })
                        }, 300);
                    }
                }
                fetchData()
            }
        }
    },[props.msgSubmitted])

    return (
        <div className={styles.viewport__container}>
        <h4 className={styles.viewport__container__title}>賓客留言</h4>
        <div className={styles.viewport__container__controls}>
        <Left  leftHandler = {leftHandler}class ={styles.viewport__container__left}></Left>
        <Right  rightHandler = {rightHandler} class ={styles.viewport__container__right}></Right>
        </div>
        <div className={styles.viewport__container__grid}>
        {
            data.length > 0 ? 
        data.map((el, ind)=>{
            const date = new Date(Number(el.created_at.$numberLong))

                return(
                <div style = {{opacity:`${vpOpacity}`}}className={styles.viewport__container__grid__card} key = {ind}>
                    <div className={styles.viewport__container__grid__card__imgWrapper} >
                        <img className={styles.viewport__container__grid__card__img} src = {el.flower!==undefined? images[el.flower]:images[1]}></img>
                    </div>
                    <div className={styles.viewport__container__grid__card__contentWrapper}>
                        <p className={styles.viewport__container__grid__card__name}>{el.name}</p>
                        <p className={styles.viewport__container__grid__card__message}>Blessing: {el.message}</p>
                        <p className={styles.viewport__container__grid__card__time}>Date: {date.toDateString()}</p>
                    </div>
                </div>)
        }):""}
        <p className={styles.viewport__container__page}>current page: {page} / {availPage}</p>
        </div>

        </div>
    );
}


export default MB_viewport