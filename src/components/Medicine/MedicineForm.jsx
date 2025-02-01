import React, { useEffect, useState } from "react";
import { addMedicine, updateMedicine } from "../Services/MedicineService";


function MedicineForm({ onAddMedicine, selectedMedicine, setSelectedMedicine }) {
    let [medicine, setMedicine] = useState({ medicineId: '', medicineName: '', price: '', expiryDate: '' })

    const submitHandler = (e) => {
        e.preventDefault();

        addMedicine({
           
            medicineName: e.target.medicineName.value,
            price: e.target.price.value,
            expiryDate: e.target.expiryDate.value
        })
            .then(data => {
                onAddMedicine();
                return data;
            })
    }
    //==================================================


    useEffect(() => {
        if (selectedMedicine)
            setMedicine(selectedMedicine)

    }, [selectedMedicine])

    //===================================================

    // To Control change in input box

    const handleChange = (e) => {


        let { name, value } = e.target;
        console.log(name + " " + value);

        setMedicine((prevMedicine) => {
            console.log(prevMedicine)
            return { ...prevMedicine, [name]: value };

        })

    }


    
    // To handle update

    const updateHandler = (e) => {
        e.preventDefault();

        console.log("Update Handler called");
        updateMedicine(selectedMedicine._links.self.href, {

            medicineName: e.target.medicineName.value,
            price: e.target.price.value,
            expiryDate: e.target.expiryDate.value

        })
            .then(data => {
                onAddMedicine();
                setMedicine({ medicineName: '', price: '', expiryDate: '' });
                setSelectedMedicine(null);
            })

    }



    //=====================================
    return (

        <div className="form-container">

            <form onSubmit={selectedMedicine ? updateHandler : submitHandler}>

                <h1>Add Medicine</h1>


                {/*Medicine Name */}
                <div className="mb-3">
                    <label for="medicine-name">Medicine Name:</label>
                    <input type="text" id="medicine-name" name="medicineName" placeholder="Enter medicine name" required
                        value={medicine.medicineName} onChange={handleChange} />
                </div>

                {/*Medicine Price */}
                <div className="mb-3">
                    <label for="price">Price:</label>
                    <input type="number" id="price" name="price" placeholder="Enter price" required
                        value={medicine.price} onChange={handleChange} />
                </div>

                {/*Medicine Expiry Date */}
                <div className="mb-3">
                    <label for="expiry-date">Expiry Date:</label>
                    <input type="date" id="expiry-date" name="expiryDate" placeholder="Enter expiry date" required
                        value={medicine.expiryDate} onChange={handleChange} />
                </div>

                <button type="submit">{selectedMedicine ? "Update" : "Submit"}</button>
            </form>
        </div>

    )
}

export default MedicineForm;