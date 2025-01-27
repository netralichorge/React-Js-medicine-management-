
import './App.css';
import Navbar from './components/Navbar';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Medicine from './components/Medicine/Medicine';
import MedicineForm from './components/Medicine/MedicineForm';
import UserRegistration from './components/User/UserRegistration';


// Creating routes
const routes = createBrowserRouter([
  {
    path:"medicine",
    element:<> <Navbar/> <Medicine/> </>
  },
  {
    path:"/",
    element: <Navbar/> 
  },

  {
    path:"registration",
    element:<> <UserRegistration/> </>
  },
  {
    path:"medicineform",
    element: <> <Navbar/> <MedicineForm/> </>
  }

  
])



function App() {
  return (

    <div className="">

      <RouterProvider router={routes}/>

    </div>
  
  );
}

export default App;
