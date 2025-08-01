import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

export default function LayoutForAllApp() {

    const isOwner = useLocation().pathname.includes("owner")

    // console.log( isOwner )

 return (

    <>
    
    {
        isOwner === false && <Navbar/>
    }

    <Outlet/>


    {
        isOwner === false && <Footer/>
    }




    </>

)
}
