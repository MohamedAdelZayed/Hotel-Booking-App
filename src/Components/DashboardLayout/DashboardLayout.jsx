
import { Outlet } from 'react-router-dom';
import DashboardNavbar from './../DashboardNavbar/DashboardNavbar';
import DashboardSidebar from '../DashboardSidebar/DashboardSidebar';

export default function DashboardLayout() {

 return (

    <>

     <div className = "flex flex-col min-h-screen ">

        {/* Navbar */}
        <DashboardNavbar/>


        <div className = "flex flex-1 overflow-auto" >

            {/* Sidebar */}
            <div>     
               <DashboardSidebar/>
            </div>

            {/* Page Content */}
            <div className="flex-1 px-4 pt-10 pb-6 md:px-8 min-w-0">
             <Outlet/>
            </div>

        </div>



     </div>


    </>

)
}
