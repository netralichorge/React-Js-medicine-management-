// Inventory.js
import React from 'react';

function Inventory() {
  return (
    <div className="inventory-form">
      <h4>Inventory Form</h4>
      <form>
        <div className="form-group">
          <label htmlFor="quantity">Stock</label>
          <input 
            type="number" 
            id="quantity" 
            name="quantity" 
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
