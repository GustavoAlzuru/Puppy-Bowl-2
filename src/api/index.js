const api_puppies = 'https://fsa-puppy-bowl.herokuapp.com/api/2302-acc-et-web-pt-c/players'

export async function getPuppies() {
    try {
        const getData = await fetch(api_puppies)
        const result = await getData.json()
        return result
    } catch (err) {
        console.log('error', err.message)
        throw err
    }
}
export async function getPuppy(id){
    try{
        const getData = await fetch(`${api_puppies}/${id}`)
        const result = await getData.json()
        return result
    }catch(err){
        console.log('err', err.message)
        throw err
    }
}
export async function sendPuppy(puppy){
    try{
        const sendData = await fetch(api_puppies, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(puppy)
        })
        const result = await sendData.json()
        return result
    }catch(err){
        console.error(err)
    }
}
export async function deletePuppy(id){
    try{
        const deletePup = await fetch(`${api_puppies}/${id}`, {
            method: 'DELETE',
        })
        const result = await deletePup.json()
        return result
    }catch(e){
        console.error(err)
    }
}