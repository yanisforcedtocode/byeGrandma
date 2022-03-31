// === packages
import { useState, useEffect } from "react"

// === API
import getDocCount from '../../apiCalls/getDocCount'

const BrokenStuff = ()=>{
    // states
    const [error, setError] = useState('false')
    // handlers
    (async()=>{
        try{
            await getDocCount("abc")
        }catch(err){
            console.log('err caught by broken stuff')
        }
    })()
    return (
        <p>I am not broken, error state is {error}</p>
    )
}

export default BrokenStuff