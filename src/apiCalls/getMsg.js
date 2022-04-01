const getMsg = async function(url, skip, limit){
    try{
    const requestOptions = {
    method: 'GET',
    redirect: 'follow'
    };

    const res = await fetch(`${url}?skip=${skip}&limit=${limit}`, requestOptions)
    const result = await res.text()
    const data = await JSON.parse(result)
    return data
}catch(err){console.log(err)}
}

export default getMsg