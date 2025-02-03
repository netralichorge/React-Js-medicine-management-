import React from "react";
import { deleteMedicine, getMedicinesById } from "../Services/MedicineService";
import { useNavigate } from "react-router-dom";


function MedicineItems({medicineId, medicineName, price, expiryDate, image, medicine_link, onSelectMedicine,onDeleteMedicine }) {

    const navigate = useNavigate();

    const onSelectUpdate= async (link)=>{
        let medicine = await getMedicinesById(link);
        onSelectMedicine(medicine)
    }

    // Function to delete medicine

    const onSelectDelete=async(medicine_id_link)=>{
        const deletedMedicine = await deleteMedicine(medicine_id_link)
        onDeleteMedicine();
        
    }


    // =============================================

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
                            <button className='btn btn-danger' onClick={()=>
                            {onSelectDelete(medicine_link)}}>Delete</button>

                            <button onClick={()=>{
                              navigate(`/medicine/${medicineId}`)
                            }}>View Details</button>


                        </div>

                    </div>
                </div>

            </div>
        </div>

    )
}

export default MedicineItems;