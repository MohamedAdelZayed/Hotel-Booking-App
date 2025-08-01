import { useEffect, useState } from "react";
import { assets, cities } from "../../assets/assets";
import { motion } from 'framer-motion';


export default function HeroSection() {

    const [isScrolled, setIsScrolled] = useState(false);
    
     useEffect(() => {
     
    const handleScroll = () => {
     setIsScrolled(window.scrollY > 10);
     };

     handleScroll(); // check on load
     window.addEventListener('scroll', handleScroll);

     return () => {
       window.removeEventListener('scroll', handleScroll);
     };

     }, []);


 return (

    <>
    
    <div  className = " overflow-hidden relative min-h-screen z-10  flex flex-col justify-center items-start px-6 md:px-7 lg:px-24 xl:px-32 " >


     <video autoPlay loop playsInline muted   className = "absolute w-full h-full object-cover inset-0 z-10 "  >

        <source  src = {assets.HomeVideo} type = "video/mp4" />

     </video>



     <motion.div

       initial = {{ opacity : 0 , y : 100  }}
       whileInView = {{ opacity : 1 , y : 0  }}
       transition = {{ duration : 1.5  }}
       viewport={{ once : true }}
     

     className = { `z-50 md:px-8 lg:px-0 xl:px-0 ${isScrolled ? 'py-12 md:py-0' : ''}` } >

        <p className = " font-playFair w-fit bg-[#49B9FF]/60 px-4 rounded-full py-1 font-bold mt-17  text-white  ">The Ultimate Hotel Experience</p>

        <h1 className = " font-playFair px-1 sm:px-0.5 text-white text-2xl md:text-[56px]  md:leading-[56px] font-bold md:font-extrabold max-w-xl mt-4.5" >Discover Your Perfect Gateway Destination</h1>

        <p className = "  font-playFair mt-2.5 px-1 sm:px-1.5 max-w-130 text-lg text-white leading-6" > Unparalleled luxury and comfort await at the world's most exclusive hotels and resorts. Start your journey today. </p>


        <form className='bg-white mt-8 text-gray-500 rounded-lg px-6 py-4  flex flex-col md:flex-row max-md:items-start gap-4 max-md:mx-auto'>

            <div className=" w-full" >
         
                <div className='flex items-center gap-2'>
                   
                   <img src = {assets.calenderIcon} alt="calenderIcon"/>

                    <label htmlFor="destinationInput">Destination</label>
                </div>


                <input list = "destinations" id =  "destinationInput"   type="text" className=" w-full rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" placeholder="Type here" required />

                <datalist id = "destinations" >
                    
                    {
                        cities.map( (city , index) => {
                            return(
                                <>
                                
                                <option value = {city} key = {index} >{city}</option>

                                </>
                            )
                        } )
                    }

                </datalist>
         

            </div>

            <div className = "w-full">
         
                <div className='flex items-center gap-2'>

                    <img src = {assets.calenderIcon} alt="calenderIcon" />

                    <label htmlFor="checkIn">Check in</label>
                </div>
         
                <input id="checkIn" type="date" className="w-full rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" />
         
            </div>

            <div className = "w-full">
         
                <div className='flex items-center gap-2'>
              
                    <img src = {assets.calenderIcon} alt="calenderIcon" />
              
                    <label htmlFor="checkOut">Check out</label>
                </div>
         
                <input id="checkOut" type="date" className=" w-full rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" />
         
            </div>

            <div className='flex md:flex-col max-md:gap-2 max-md:items-center w-full'>
         
                <label htmlFor="guests">Guests</label>
                <input min={1} max={4} id="guests" type="number" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none w-full  max-w-" placeholder="0" />
         
            </div>

            <button className='flex items-center justify-center gap-1 rounded-md bg-[#2563EB] font-bold py-2 px-5 text-white my-auto cursor-pointer max-md:w-full max-md:py-1' >

                {/* <img src = {assets.searchIcon} alt="searchIcon" /> */}
 
                <span>Search</span>
         
            </button>
        
        </form>


     </motion.div>


    </div>


    </>

)

}
