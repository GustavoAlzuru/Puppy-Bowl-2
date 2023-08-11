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