

function AllInventories()
{
    return (

        <div>
        {/* Display inventories */}
      <h4>All Inventories</h4>
      {inventories.length === 0 ? (
        <p>No inventories available.</p>
      ) : (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>inventoryId</th>
              <th>stock</th>
            </tr>
          </thead>
          <tbody>
            {inventories.map((inventory, index) => (
              <tr key={index}>
                <td>{inventory.stock}</td>
                <td>
                  {/* You can add actions here, like edit or delete */}
                  <button className="btn btn-info">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}