
import React, { useEffect, useState } from 'react'
import MedicineItems from './MedicineItems'
import { getMedicines, getMedicinesLowToHigh, getMedicinesHighToLow, getMedicinesOrderByMedicineNameAsc, getMedicinesOrderByMedicineNameDesc } from '../Services/MedicineService'


function Medicine() {
    let [medicines, setMedicines] = useState([])
    let [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        getMedicines()
            .then(data => {
                setMedicines(data);
            })
    }, [])

    // To sort data
    const sort = async (choice) => {
        switch (choice) {
            case 1:
                setMedicines(await getMedicinesHighToLow());
                break;
            case 2:
                setMedicines(await getMedicinesLowToHigh());
                break;
            case 3:
                setMedicines(await getMedicinesOrderByMedicineNameAsc());
                break;
            case 4:
                setMedicines(await getMedicinesOrderByMedicineNameDesc());
                break;

        }
    }
    // ========================================================



    return (


        <div>
            {/* Sort :Start */}
            <ul className="list-group mb-3">
                <li className="list-group-item" onClick={() => { sort(1) }}>High to Low</li>
                <li className="list-group-item" onClick={() => { sort(2) }}>Low to High</li>
                <li className="list-group-item" onClick={() => { sort(3) }}>A-Z</li>
                <li className="list-group-item" onClick={() => { sort(4) }}>Z-A</li>
            </ul>
            {/* Sort :End */}

            {/* Search Start */}
            <div className="mb-3">
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    onChange={(e) => { setSearchQuery(e.target.value) }} />
                <div id="emailHelp" className="form-text">Search here.</div>
            </div>

            {/* Search end */}
            <div>
                
                        {/* Displaying Medicines : Start */}

                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            {medicines.filter(m=> {

                                return m.medicineName.toLowerCase()
                                    .includes(searchQuery.toLowerCase())
                            }).map((m) => {
                                return (
                                    <MedicineItems
                                        medicineName={m.medicineName}
                                        price={m.price}
                                        expiryDate={m.expiryDate}
                                        image={m._links.self.href}
                                    />
                                )
                            })}
                        </div>
                        {/* Displaying Medicines : End */}

                    </div>
                </div>
            


    )


}

export default Medicine;