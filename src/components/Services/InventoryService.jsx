

const INVENTORY_LINK="http://localhost:8081/inventories"

export const setInventory=( inventory_link,medicine_link)=>{

    return fetch (inventory_link,
        {method:"PUT",
            headers:{
            "Content-Type":"text/uri-list"
        },body:medicine_link})
    
}

export const addInventory=(inventory)=>{

    return fetch(INVENTORY_LINK,
        {method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(inventory)})
    .then(data=>data.json())
    .then(data=>data)
}


