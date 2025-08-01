import { roomsDummyData } from "../../assets/assets";
import HotelCard from "../HotelCard/HotelCard";
import Title from "../Title/Title";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
// import { motion } from 'framer-motion';


export default function FeaturedDestination() {

 return (

    <>

    <div className = "overflow-hidden">

    
    <motion.div 

       initial = {{ opacity : 0 , x : 100  }}
       whileInView = {{ opacity : 1 , x : 0  }}
       transition = {{ duration : 1.7  }}
       viewport={{ once : true }}
    
       className="mt-14 px-4 md:px-12 lg:px-36" >

        <Title align = {'center'}  heading = {'Featured Destination'} description = {'Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences.'} />

        <div className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12 ">

            {

                roomsDummyData.map( (room)=> {
                    
                    return(
                        <>
                        
                        <Link to = {`/rooms/${room._id}`}  >

                        <HotelCard room = {room}   />

                        </Link>

                         </>
                     )
                 } )

            }


        </div>


        <div className = "flex justify-center my-16 ">
            <button className = "px-4 py-2 bg-[#15a3fc] hover:bg-white rounded-full text-white hover:text-[#15a3fc] transition-all duration-900  cursor-pointer  font-medium border border-[#15a3fc]   " >View All Destinations</button>
        </div>

    </motion.div>


    </div>


    </>

)
}
