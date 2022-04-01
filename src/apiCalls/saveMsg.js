const defaultUrl = "https://ap-southeast-1.aws.data.mongodb-api.com/app/application-test-yjumb/endpoint/newMsg"
const saveMsg = async function(url = defaultUrl, name, message, flower){
  try{
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    const res = await fetch(`${url}?name=${name}&message=${message}&flower=${flower}`, requestOptions)
    const result = await res.text()
    const data = await JSON.parse(result)
    return data
  }catch(err){console.log(err)}

}

export default saveMsg
