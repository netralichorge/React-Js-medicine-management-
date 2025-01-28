import React from "react";
import { getMedicinesById } from "../Services/MedicineService";


function MedicineItems({ medicineName, price, expiryDate, image, medicine_link, onSelectMedicine }) {


    const onSelectUpdate= async (link)=>{
        let medicine = await getMedicinesById(link);
        onSelectMedicine(medicine)
    }

    return (

        <div>

            <div className='col'>

                <div class="card">
                    <div class="card-body">
                        <img src={image + "/image"} class="card-img-top" alt="" />
                        <div class="card-body">
                            <h5 class="card-title">{medicineName}</h5>
                            <p class="card-text">Price :{price}</p>
                            <p class="card-text">Expiry Date :{expiryDate}</p>

                            {/* Update Button */}
                            <button className='btn btn-success' onClick={() => { onSelectUpdate(medicine_link) }}>Update</button>

                            {/* Delete Button */}
                            <button className='btn btn-danger'>Delete</button>


                        </div>

                    </div>
                </div>

            </div>
        </div>

    )
}

export default MedicineItems;