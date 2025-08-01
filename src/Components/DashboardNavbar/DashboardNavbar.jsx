
    import { Link  } from "react-router-dom";
    import { assets } from './../../assets/assets';
    import { UserButton } from "@clerk/clerk-react";


    export default function DashboardNavbar () {

        


        return (
            
            <>
                        
        <nav className="fixed top-0 left-0 bg-white border-b border-gray-300 w-full flex items-center justify-between px-4 sm:px-6 py-4 z-50">


                    {/* Logo */}
                    <Link to = '/' >
                    <img src = {assets.logo} alt="logo" className = { ` h-9 invert opacity-80` }  />
                    </Link>

                    
                    {/* Desktop Right */}
                    <UserButton/>
                                   
        </nav>
                    

                    </>

    );

    }