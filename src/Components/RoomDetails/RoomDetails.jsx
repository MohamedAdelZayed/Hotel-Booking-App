import { useParams } from "react-router-dom";
import { assets, facilityIcons, roomCommonData, roomsDummyData, userDummyData } from "../../assets/assets";
import Stars from "../Stars/Stars";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

export default function RoomDetails() {


    const {roomId} = useParams()

    const room = roomsDummyData.find( (r)=> r._id === roomId  )

    const [clicked, setclicked] = useState( room.images[0] )


    const formRef = useRef(null)


    function handleSubmit (e){
        
        e.preventDefault();
                
        room.isAvailable === true ? toast.success("Room Is Available And Booked Now") : toast.error("Room Isn't Available Now");

        // Clear Fields of form at once  مره واحده علطول
        formRef.current.reset()
    }
   
    
    useEffect( ()=>{
  
      window.scrollTo({ top : 0 })
  
    } , [])


 return (

    <>
     
     <div className = "py-28 px-4 md:px-16 lg:px-24 xl:px-32" >

        {

            roomsDummyData.map( (room , index)=> {
                
                
                return(
                    <>
                    
                    {
                        room._id === roomId &&

                   <> 

        <div key = {index} className = "flex items-center gap-2">

            <h1 className=" font-playfair text-3xl md:text-4xl" >{room.hotel.name} <span className = "text-sm" >({room.roomType})</span> </h1>
          
            <p className = "bg-orange-400 text-white rounded-full px-3 py-1 text-sm" >20% OFF</p>
        
        </div>

        <div className = "flex items-center mt-2 gap-2">
            <Stars/>
            <p>200+ reviews</p>
        </div>

        <div className = "flex items-center gap-1 mt-2 text-gray-500">
            <img src = {assets.locationIcon} alt="" />
            <p>{room.hotel.location}</p>
        </div>


        <div className = "flex items-center flex-col md:flex-row gap-4 mt-4 py-2 ">
             
             {/* MainImage */}
            <div className = " w-full md:w-1/2">

                <img src = { clicked } alt = "MainImage" className = "rounded-md" />

            </div>

            {/* 4 Images */}
            <div className = " w-full md:w-1/2 grid grid-cols-2 grid-rows-2 gap-3   ">

                {
                    room.images.map( (photo)=>{
                        return(
                            <>
                            
                           <img src = { photo } alt="photo"
                           
                           onClick = { ()=>  setclicked(photo) }

                           className = {`rounded-md cursor-pointer ${ clicked === photo ? 'outline-3 outline-orange-500' : "" }  `} />
                 
                           </>
                        )
                    } )
                }
    
            </div>

        </div>


        <div className = "flex justify-between flex-col md:flex-row mt-10 bg--300 ">


        <div className = "flex flex-col gap-2">

            <h1 className=" font-playfair text-3xl md:text-4xl  ">Experience Luxury Like Never Before</h1>

            <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-3 mb-5  ">

                {
                    room.amenities.map( (amanity , index)=> {
                        return(
                            <>
                            
                          <div key = {index} className = "bg-gray-100 flex items-center rounded-lg px-3 py-1.5 gap-2">
                            
                             <img src = {facilityIcons[amanity]} alt = {amanity} />
                         
                             <p>{amanity}</p>
                         
                         </div>

                          </>
                        )
                    } )
                }

            </div>


        </div>

        <div className="pt-1">

        <p className=" italic text-2xl"><span className = "font-bold"> ${room.pricePerNight} </span>/night</p>

        </div>

        </div>

        
        {/* Bookin Form */}
        <div className = "mt-7">

            <h3 className="text-xl font-bold text-gray-700 text-center ">
            Book The Room Now
            </h3>


            <form ref = {formRef}  onSubmit = { (e)=> handleSubmit (e) }  className='bg-white mt-4 text-gray-500 rounded-lg px-6 py-4 shadow-[0px_0px_20px_rgba(0,0,0,0.15)]  flex flex-col md:flex-row max-md:items-start gap-4 max-md:mx-auto'>
        
                        <div className = "w-full">
                     
                            <div className='flex items-center gap-2'>
            
                                <img src = {assets.calenderIcon} alt="calenderIcon" />
            
                                <label htmlFor="checkIn">Check in</label>
                            </div>
                     
                            <input required id="checkIn" type="date" className="w-full rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" />
                     
                        </div>
            
                        <div className = "w-full">
                     
                            <div className='flex items-center gap-2'>
                          
                                <img src = {assets.calenderIcon} alt="calenderIcon" />
                          
                                <label htmlFor="checkOut">Check out</label>
                            </div>
                     
                            <input required id="checkOut" type="date" className=" w-full rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" />
                     
                        </div>
            
                        <div className='flex md:flex-col max-md:gap-2 max-md:items-center w-full'>
                     
                            <label htmlFor="guests">Guests</label>
                            <input  required min={1} max={4} id="guests" type="number" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none w-1/2" placeholder="0" />
                     
                        </div>
            
                        <button className='w-full  flex items-center justify-center gap-1 rounded-md bg-[#2563EB] font-bold py-2 px-5 text-white my-auto cursor-pointer max-md:py-1' >
                         
                            <span>Book Now</span>
                     
                        </button>
                    
                    </form>
            

        </div>

        </>
                   
                    }



        </>
                )
            } )


        }


        <div className="mt-14 space-y-4 max-w-3xl border-b border-b-gray-300 pb-6 ">

          {

            roomCommonData.map( (ele , index)=> {
                return(
                    <>
                                    
          <div className="flex flex-col group "  key = {index} >

            <div className=" flex items-center gap-2 ">
            
              <img src = {ele.icon} alt = {ele.title} className="w-6"/>

              <p className=" font-semibold text-lg group-hover:text-[#2563EB] transition duration-200">{ele.title} </p>
            
            </div>

            <p className="pl-8.5 text-gray-500">{ele.description} </p>

          </div>


          </>
                )
            } )

          }

        </div>


        <p className="max-w-3xl mt-7 text-gray-500 border-b border-b-gray-300 pb-7">
          Guests will be allocated on the ground floor according to availability. You get a comfortable Two bedroom apartment has a true city feeling. The price quoted is for two guest, at the guest slot please mark the number of guests to get the exact price for groups. The Guests will be allocated ground floor according to availability. You get the comfortable two bedroom apartment that has a true city feeling.
        </p>

        

        {/* Hosted By */}
        <div className="mt-7">

          <div className="flex items-center gap-2 ">
          
            <img src = {assets.dashboardIcon} alt = "dashboardIcon" />
          
            <p className="text-lg md:text-xl font-bold">Hosted by {userDummyData.username}</p>
          
          </div>

          <div className="flex gap-2 mt-2 items-center pl-7 font-semibold">
          
           <Stars/>

           <p className="">200+ reviews</p>

          </div>

          
                    
          

        </div>

        {/* Contact Button */}
        <button type="button"
         
         className="cursor-pointer mt-8 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold px-6 py-3 md:px-8 md:py-2.5 rounded-lg shadow-md 
             transition duration-200 ease-in-out text-sm md:text-base tracking-wide">
       
           Contact Now
       
       </button>







     </div>


    </>    

)
}
