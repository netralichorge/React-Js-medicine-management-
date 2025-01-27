
const API_LINK="http://localhost:8081/users"
export const getUsers=()=>{

    return fetch(API_LINK)
    .then(data=>data.json())
    .then(data=>data["_embedded"]["users"])
}

export const addUsers=(user)=>{

    console.log("users");

    return fetch(API_LINK,
        {method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(user)})
    .then(data=>data.json())
    .then(data=>data)
}