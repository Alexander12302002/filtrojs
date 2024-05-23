export const getPeliForName = async(title)=>{
    let url = `https://search.imdbot.workers.dev/?q=${title}`
    let option = {
        method: 'GET',
        Headers: {
            "content-type": "application/json"
          }
    }

    let responder = await fetch(url, option)
    let result = await responder.json()
    let peliculasTomads = [...result.description]
    console.log(peliculasTomads)
    return(peliculasTomads)
}



export const getPeliForYear = async(year)=>{
    let url = `https://search.imdbot.workers.dev/?q=${Year}`
    let option = {
        method: 'GET',
        Headers: {
            "content-type": "application/json"
          }
    }

    let responder = await fetch(url, option)
    let result = await responder.json()
    let peliculasTomads = [...result.description]
    console.log(peliculasTomads)
    return(peliculasTomads)
}

export const getPeliForIMDb = async(id)=>{
    let url = `https://search.imdbot.workers.dev/?tt=${id}`
    let option = {
        method: 'GET',
        Headers: {
            "content-type": "application/json"
          }
    }
    let responder = await fetch(url, option)
    let result = await responder.json()
    console.log(result)
    return(result)
}


export const getPeliForActor = async(ACTORS)=>{
    let url = `https://search.imdbot.workers.dev/?q=${ACTORS}`
    let option = {
        method: 'GET',
        Headers: {
            "content-type": "application/json"
          }
    }

    let responder = await fetch(url, option)
    let result = await responder.json()
    let peliculasTomads = [...result.description]
    console.log(peliculasTomads)
    return(peliculasTomads)
}