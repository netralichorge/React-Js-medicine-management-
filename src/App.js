
import './App.css';
import Navbar from './components/Navbar';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Medicine from './components/Medicine/Medicine';
import MedicineForm from './components/Medicine/MedicineForm';
import UserRegistration from './components/User/UserRegistration';
import Login from './components/User/Login';
import Main from './components/Main';



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
    path:"registration",
    element:<> <UserRegistration/> </>
  },

  {
    path:"login",
    element:<> <Navbar/> <Login/> </>
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
