
import React, { useEffect, useState } from 'react'
import MedicineItems from './MedicineItems'
import { getMedicines, getMedicinesLowToHigh, getMedicinesHighToLow, getMedicinesOrderByMedicineNameAsc, getMedicinesOrderByMedicineNameDesc } from '../Services/MedicineService'
import MedicineForm from './MedicineForm';
import { getCategory, getMedicinesByCategory } from '../Services/CategoryService';

function Medicine() {
    let [medicines, setMedicines] = useState([])
    let [selectedMedicine, setSelectedMedicine] = useState(null);
    let [searchQuery, setSearchQuery] = useState('');
    let [categories, setCategories] = useState([])

    useEffect(() => {
        getMedicines()
            .then(data => {
                setMedicines(data);
            })
            fetchCatgories();
    }, [])

    //to refresh all

    const refreshMedicines = () => {
        getMedicines().then(data => {
            setMedicines(data);
        })
    }

    // to set select medicine

    const handleSelectMedicine = (selectedMedicine) => {
        setSelectedMedicine(selectedMedicine);
        console.log(selectedMedicine)
    }

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

    // to fetch category

    const fetchCatgories = async () => {
        console.log("Hello")
        setCategories(await getCategory())
      }

      // handle category

      const handleCategory = async(category_link) => {

        let data=await getMedicinesByCategory(category_link)
        setMedicines(data)
    
      }


    // ========================================================



    return (

        <div >

            <div class="container mt-6">
                <div class="row">
                    <div class="col-md-4 ">
                        {/* Medicine Form Start */}

                        <MedicineForm onAddMedicine={refreshMedicines} selectedMedicine={selectedMedicine} onUpdateMedicine={refreshMedicines} setSelectedMedicine={setSelectedMedicine} />
                        {/* Medicine Form End */}


                        <div className='col-md-8  '>
                        <div class="right-side-top">
                            {/* Sort :Start */}
                            <ul className="list-group mb-3 ">
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




                            {/* Category start */}
                            <div className='category-list'>
                            <ul class="list-group list-group-horizontal ">
  
                                    {
                                        categories.map((c) => {
                                            return (
                                                <li className="list-group-item"
                                                onClick={()=>{handleCategory(c._links.self.href)}}>
                                                    {c.type}</li>
                                            )
                                        })

                                    }

                                </ul>

                                </div>


                            {/* display category end */}
                            <div>

                                {/* Displaying Medicines : Start */}

                                <div className='card-container'>
                                    <div className="row row-cols-1 row-cols-md-2 g-4 ">
                                        {medicines.filter(m => {

                                            return m.medicineName.toLowerCase()
                                                .includes(searchQuery.toLowerCase())
                                        }).map((m) => {
                                            return (
                                                <MedicineItems
                                                medicineId={m.medicineId}
                                                    medicineName={m.medicineName}
                                                    price={m.price}
                                                    expiryDate={m.expiryDate}
                                                    image={m._links.self.href}
                                                    medicine_link={m._links.self.href}
                                                    onSelectMedicine={handleSelectMedicine}
                                                    onDeleteMedicine={refreshMedicines}

                                                />
                                            )
                                        })}
                                    </div>
                                    {/* Displaying Medicines : End */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
</div>
        </div>
        

    )


}

export default Medicine;