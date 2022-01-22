async function getUser(name){

    try{
        let response = await fetch(`https://api.github.com/users/${name}`)
        let data = await response.json()
        return data    
    }
    catch(e){
        console.log('e:', e)

    }


}


export default getUser

