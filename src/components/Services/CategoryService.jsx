

const API_LINK="http://localhost:8081/categories"

export const getCategory=()=>{
    return fetch(API_LINK)
    .then(data=>data.json())
    .then(data=>data["_embedded"]["categories"])
}

export const setCategories = (medicine_link,category_link)=>{
    return fetch(medicine_link,
    {
        method:"PUT",
        headers:{
            "Content-Type":"text/uri-list"
        },body:category_link
    })

}

export const getMedicinesByCategory=(medicine_link)=>{

    console.log("Service Reached",medicine_link);

    return fetch(medicine_link+"/medicines")
    .then(data=>data.json())
    .then(data=>data._embedded.medicines)
    
    
}

