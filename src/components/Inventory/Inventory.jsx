
import React from 'react';
import { addInventory, setInventory } from '../Services/InventoryService';


function Inventory({medicineId}) {


const submitHandler = (e)=>{
  e.preventDefault();

  addInventory({"stock":e.target.stock.value})
  .then(data=>{
    setInventory(data._links.self.href+"/medicine",`http://localhost:8081/medicines/${medicineId}`)
  })

  
}

// =====================================

  return (
    <div className="">
      <h4>Inventory Form</h4>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="quantity">Stock</label>
          <input 
            type="number" 
            id="stock" 
            name="stock" 
            className="form-control" 
            required 
          />
        </div>
        
        
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Inventory;
