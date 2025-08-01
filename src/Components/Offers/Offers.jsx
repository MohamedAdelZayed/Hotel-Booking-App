import { assets, exclusiveOffers } from "../../assets/assets";
import Title from "../Title/Title";
import { motion } from 'framer-motion';

export default function Offers() {

 return (

    <>
    <div className = "overflow-hidden">
    
    <motion.div
    
       initial = {{ opacity : 0 , x : -100  }}
       whileInView = {{ opacity : 1 , x : 0  }}
       transition = {{ duration : 1.8  }}
       viewport={{ once : true }}

    className="mt-14 px-4 md:px-12 lg:px-36" >
    
            <Title align = {'center'}  heading = {'Exclusive Offers'} description = {'Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.'} />


            <div className = "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-12">

                {
                    exclusiveOffers.map( (offer)=> {
                        return(
                            <>
                        
                <div key = {offer._id} className = "relative bg-center bg-cover py-17 rounded-md group " style = {{ backgroundImage : `url(${offer.image})` }} >

                <p className = " absolute font-playFair  top-3 left-3 bg-white w-fit text-sm text-gray-800 rounded-full px-3 py-1">{offer.priceOff}% OFF</p>

                <div className = "text-white px-3">

                    <p className="text-2xl font-medium font-playfair mt-3 mb-2">{offer.title}</p>

                    <p>{offer.description}</p>

                    <p className = "text-xs text-white/70 mt-4" >Expires {offer.expiryDate}</p>

                </div>

                <button className = "   cursor-pointer absolute bottom-2 left-2 flex items-center gap-2 text-white pl-1.5">
                    <p className = "font-bold" >View Offers</p>
                    <img src = {assets.arrowIcon} alt="arrowIcon" className="invert group-hover:translate-x-2 duration-400  " />
                </button>
                



                </div>

                </>
                        )
                    } )
                }



            </div>


            <div className = "flex justify-center my-16 ">
               <button className = "px-4 py-2 bg-[#15a3fc] hover:bg-white rounded-full text-white hover:text-[#15a3fc] transition-all duration-900  cursor-pointer  font-medium border border-[#15a3fc]   " >View All Offers</button>
             </div>
    

    </motion.div>

    </div>

    </>

)
}
