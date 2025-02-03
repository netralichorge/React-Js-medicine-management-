
import './App.css';
import Navbar from './components/Navbar';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Medicine from './components/Medicine/Medicine';
import MedicineForm from './components/Medicine/MedicineForm';
import UserRegistration from './components/User/UserRegistration';
import Login from './components/User/Login';
import Main from './components/Main';
import MedicineItemDetails from './components/Medicine/MedicineItemDetails';
import About from './components/About';
import Contact from './components/Contact';
import Inventory from './components/Inventory/Inventory';




// Creating routes
const routes = createBrowserRouter([
  {
    path:"medicine",
    element:<> <Navbar/> <Medicine/> </>
  },
  {
    path:"/",
    element:<> <Navbar/> <Main/>  </>
  },

  {
    path:"main",
    element:<> <Main/>  </>
  },

  {
    path:"medicine/:medicineId",
    element:<> <Navbar/> <MedicineItemDetails/>  </>
  },
  
  {
    path:"registration",
    element:<>  <Navbar/> <UserRegistration/> </>
  },

  {
    path:"login",
    element:<> <Navbar/> <Login/> </>
  },

  {
    path:"medicineform",
    element: <> <Navbar/> <MedicineForm/> </>
  },

  {
    path:"about",
    element: <> <Navbar/> <About/> </>
  },

  {
    path:"contact",
    element: <> <Navbar/> <Contact/> </>
  },

  {
    path:"inventory",
    element: <> <Navbar/> <Inventory/> </>
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
