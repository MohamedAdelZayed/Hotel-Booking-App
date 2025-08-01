
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import LayoutForAllApp from './Components/LayoutForAllApp/LayoutForAllApp'
import Home from './Components/Home/Home';
import Hotels from './Components/Hotels/Hotels'
import About from './Components/About/About';
import RoomDetails from './Components/RoomDetails/RoomDetails';
import { ToastContainer } from 'react-toastify';
import Explore from './Components/Expolre/Expolre';

import DashboardLayout from './Components/DashboardLayout/DashboardLayout'

import Dashboard from './Components/Dashboard/Dashboard';
import AddRooms from './Components/AddRooms/AddRooms';
import ListRooms from './Components/ListRooms/ListRooms';
import MyBookings from './Components/MyBookings/MyBookings';



function App() {


   

  return (
    <>

    <ToastContainer/>

    <BrowserRouter>

      <Routes>
        
        {/* All routes sharing Navbar + Footer go here */}
        <Route path = '/' element = {<LayoutForAllApp/>}>

         <Route index element = {<Home/>} />

         <Route path = '/hotels' element = {<Hotels/>} />

         <Route path = '/explore' element = {<Explore/>} />

         <Route path = '/about' element = {<About/>} />

         <Route path = '/rooms/:roomId' element = {<RoomDetails/>} />

         <Route path = '/myBookings' element = {<MyBookings/>} />

         {/* Owner layout routes */}
         <Route path = '/owner' element = {<DashboardLayout/>} >
            
            {/* To Make the index route now automatically redirects to /owner/dashboard  insted of /owner  to make active classs work in dashboard link by default   */}
            <Route index element = { <Navigate to = 'dashboard' replace /> } />

            <Route path = 'dashboard' element = { <Dashboard/> } />
          
            <Route path = 'addRooms' element = { <AddRooms/> } />

            <Route path = 'listRooms' element = { <ListRooms/> } />


        </Route>

        </Route>


        

      </Routes>

      </BrowserRouter>


    </>
  )
}

export default App
