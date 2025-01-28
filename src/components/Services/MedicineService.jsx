
const API_LINK="http://localhost:8081/medicines"
export const getMedicines=()=>{

    return fetch(API_LINK)
    .then(data=>data.json())
    .then(data=>data["_embedded"]["medicines"])
}

export const addMedicine=(medicine)=>{

    return fetch(API_LINK,
        {method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(medicine)})
    .then(data=>data.json())
    .then(data=>data)
}

export const getMedicinesById=(medicine_link)=>{
    return fetch(medicine_link)
    .then(data=>data.json())
    .then(data=>data)
}

export const updateMedicine=(medicine_id_link,medicine)=>{

    return fetch(medicine_id_link,{
        method:"PUT",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(medicine)
    })
    .then(data=>data.json())
    .then(data=>data)

}

export const getMedicinesHighToLow=()=>{

    return fetch("http://localhost:8081/medicines/search/findByOrderByPriceDesc")
    .then(data=>data.json())
    .then(data=>data["_embedded"]["medicines"])
}

export const getMedicinesLowToHigh=()=>{

    return fetch("http://localhost:8081/medicines/search/findByOrderByPriceAsc")
    .then(data=>data.json())
    .then(data=>data["_embedded"]["medicines"])
}

export const getMedicinesOrderByMedicineNameAsc=()=>{

    return fetch("http://localhost:8081/medicines/search/findByOrderByMedicineNameAsc")
    .then(data=>data.json())
    .then(data=>data["_embedded"]["medicines"])
}

export const getMedicinesOrderByMedicineNameDesc=()=>{

    return fetch("http://localhost:8081/medicines/search/findByOrderByMedicineNameDesc")
    .then(data=>data.json())
    .then(data=>data["_embedded"]["medicines"])
}