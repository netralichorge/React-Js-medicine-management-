import React, { useEffect, useState } from 'react';
import { getMedicinesById } from '../Services/MedicineService';
import { useParams } from 'react-router-dom';
import Inventory from '../Inventory/Inventory';

function MedicineItemDetails() {
  const [medicine, setMedicine] = useState(null); // Set initial state to null, not undefined
  const [showInventoryForm, setShowInventoryForm] = useState(false); // State to control form visibility
  const { medicineId } = useParams();

  const fetchMedicine = async () => {
    try {
      const data = await getMedicinesById(`http://localhost:8081/medicines/${medicineId}`);
      console.log(data);
      setMedicine(data); // Update the state with the fetched data
    } catch (error) {
      console.error("Error fetching medicines:", error);
    }
  };

  useEffect(() => {
    console.log(medicineId);
    fetchMedicine(); // Call the fetch function on component mount
  }, [medicineId]); // Dependency on id to re-fetch if the id changes

  const handleAddInventoryClick = () => {
    setShowInventoryForm(!showInventoryForm); // Toggle the form visibility
  };

  if (!medicine) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className='col'>
        <div className="card">
          <div className="card-body">
            <img
              src={`http://localhost:8081/medicines/${medicineId}/image`}
              className="card-img-top custom-image"
              alt={medicine.medicineName}
            />
            <div className="card-body-items">
              <h5 className="card-title">{medicine.medicineName}</h5>
              <p className="card-text">{medicine.price}</p>
              <p className="card-text">{medicine.expiryDate}</p>

              <button className="btn-4" onClick={handleAddInventoryClick}>
                Add Inventory
              </button>

              <h5><b>Instructions</b></h5>
              <p className="card-text common-description" />
              <p>Consult your doctor before use to avoid risks.</p>
              <p>Use with caution, always follow instructions.</p>
              <p>Medicines are powerful—handle with care.</p>

              {/* Conditionally render the InventoryComponent if showInventoryForm is true */}
              {showInventoryForm && <Inventory />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MedicineItemDetails;
