import React from "react";


function MedicineItems({ medicineName, price, expiryDate, image }) {


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

                            {/* Buy Button */}
                            <button className='btn btn-success'>Buy</button>


                        </div>

                    </div>
                </div>

            </div>
        </div>

    )
}

export default MedicineItems;