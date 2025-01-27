import React from "react";
import { addMedicine } from "../Services/MedicineService";


function MedicineForm() {
    const submitHandler = (e) => {
        e.preventDefault();
        addMedicine({
            medicineId: e.target.medicineId.value,
            medicineName: e.target.medicineName.value,
            price: e.target.medicinePrice.value,
            expiryDate: e.target.expiryDate.value
        })
            .then(data => data)
    }


    //=====================================
    return (
        
            <div className="form-container">

                <form onSubmit={submitHandler}>

                    <h1>Add Medicine</h1>

                    {/*Medicine Id */}
                    <div className="mb-3">
                        <label for="medicine-id">Medicine Id:</label>
                        <input type="number" id="medicine-id" name="medicineId" placeholder="Enter medicine Id"  />
                    </div>

                    {/*Medicine Name */}
                    <div className="mb-3">
                        <label for="medicine-name">Medicine Name:</label>
                        <input type="text" id="medicine-name" name="medicineName" placeholder="Enter medicine name" required />
                    </div>

                    {/*Medicine Price */}
                    <div className="mb-3">
                        <label for="price">Price:</label>
                        <input type="number" id="price" name="medicinePrice" placeholder="Enter price" required />
                    </div>

                    {/*Medicine Expiry Date */}
                    <div className="mb-3">
                        <label for="expiry-date">Expiry Date:</label>
                        <input type="date" id="expiry-date" name="expiryDate" placeholder="Enter expiry date" required />
                    </div>

                    <button type="submit">Submit</button>
                </form>
            </div>
        
    )
}

export default MedicineForm;