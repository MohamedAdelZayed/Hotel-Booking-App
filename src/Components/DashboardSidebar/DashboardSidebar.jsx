import { NavLink } from "react-router-dom";
import { assets } from "../../assets/assets";

export default function DashboardSidebar() {

 return (

    <div className = " h-full  w-16 md:w-64 border-r border-gray-200 shrink-0 transition-all duration-300" >

        <div className = "pt-20">

            <NavLink to = '/owner/dashboard'  className = "flex items-center gap-3 py-3 px-4 md:px-7 hover:bg-gray-100  ">

                <img src = {assets.dashboardIcon} alt = "dashboardIcon" />
                <p className="hidden md:block">Dashboard</p>
            
            </NavLink>

            <NavLink to = '/owner/addRooms'  className = "flex items-center gap-3 py-3 px-4 md:px-7 hover:bg-gray-100  ">

                <img src = {assets.addIcon} alt = "addIcon" />
                <p className="hidden md:block">Add Room</p>
            
            </NavLink>

            <NavLink to = '/owner/listRooms'  className = "flex items-center gap-3 py-3 px-4 md:px-7 hover:bg-gray-100  ">

                <img src = {assets.listIcon} alt = "listIcon" />
                <p className="hidden md:block">List Room</p>
            
            </NavLink>

        </div>

    </div>

)
}
