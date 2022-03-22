const getDocCount = async function(url = url){
    try{
    const requestOptions = {
    method: 'GET',
    redirect: 'follow'
    };

    const res = await fetch(url)
    const result = await res.text()
    const data = await JSON.parse(result)
    return data
}catch(err){console.log(err)}
}

export default getDocCount