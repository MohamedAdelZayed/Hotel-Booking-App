import {  useEffect, useState } from "react";
import { assets, facilityIcons, roomsDummyData } from "../../assets/assets";
import Stars from "../Stars/Stars";
import Title from "../Title/Title";
import { Link } from "react-router-dom";

export default function Hotels() {
   

    const [ShowFilters, setShowFilters] = useState(false)

    const [selectedTypes, setselectedTypes] = useState("")

    const [selectedPrices, setselectedPrices] = useState("")

    const [selectedSort, setselectedSort] = useState("")



     const filteredData = roomsDummyData.filter( (room)=> {

        // Filtering Room Based On Types (single or double or luxury or family )
        const filteredTypes =  !selectedTypes || room.roomType === selectedTypes;

        // Filtering Room Based On Prices
        const [ min , max ] = selectedPrices.split('to')

        const filteredPrices =  !selectedPrices || room.pricePerNight >= min && room.pricePerNight <= max;



        return  filteredTypes && filteredPrices

     } )



     // Filtering Room Based On Prices From HighT Low || Low To High
     if( selectedSort === "Price Low To High"  ){
             
            //  Prices From Low To High 
            filteredData.sort( (a,b)=> a.pricePerNight - b.pricePerNight  )

    }else if ( selectedSort === "Price High To Low" ){
    
            //  Prices From High To Low 
            filteredData.sort( (a,b)=> b.pricePerNight - a.pricePerNight )
    
    }





    //  function to clear radio inputs
    function clearInputs(){

        setselectedTypes("")
        setselectedPrices("")
        setselectedSort("")

    }


    const roomTypes = [
      "Single Bed",
      "Double Bed",
      "Luxury Bed",
      "Family Bed"
    ];

    const priceRanges = [
      "0 to 500",
      "500 to 1000",
      "1000 to 2000",
      "2000 to 3000",
    ];

    const sortOptions = [
      "Price Low To High",
      "Price High To Low",
      "Newest First",
    ];

    
    useEffect( ()=>{
  
      window.scrollTo({ top : 0 })
  
  } , [])

    
 return (

    <>

    <div className = "py-25  px-4 md:px-16 lg:px-24 xl:px-32">

        <Title align = {'left'}  heading = {'Hotel Rooms'} description = {'Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.'} />


        <div className = "flex flex-col-reverse lg:flex-row gap-6">

            {/* ROOMS LIST */}
            <div className = "flex flex-col gap-6 flex-1 ">

                {

                    filteredData.length > 0 ?

                    filteredData.map( (room , index)=> {
                        return(
                            <>
                            
            <div key = {index} className = "flex flex-col md:flex-row gap-6 pt-9 pb-6 border-b border-gray-300  ">

                 {/* Image Section */}
                <Link to = {`/rooms/${room._id}`}  className = " w-full md:w-1/2" >
                    <img src = {room.images[0]} alt = {room.hotel.name} className = "w-full h-full object-cover rounded-md max-h-80 md:max-h-full " />
                </Link>

                {/* Info Section */}
                <div className = " w-full md:w-1/2 flex flex-col ">

                    <p className="text-gray-500">{room.hotel.location.split( ',' )[1]}</p>

                    <Link to = {`/rooms/${room._id}`} >

                    <h1 className="text-gray-800 text-2xl md:text-3xl font-playfair cursor-pointer">{room.hotel.name}</h1>

                    </Link>

                    <div className = "flex items-center mt-2 gap-2">
                            <Stars/>
                            <p>200+ reviews</p>
                    </div>
                    
                    <div className = "flex items-center gap-1 mt-2 text-gray-500">
                            <img src = {assets.locationIcon} alt = "locationIcon" />
                            <p>{room.hotel.location}</p>
                    </div>

                    <div className="flex flex-wrap gap-3 sm:gap-4 mt-3 mb-3">

                        {
                            room.amenities.map( (aminity)=> {
                                return(
                                    <>
                                    
                    <span  className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#F5F5FF]/70 text-sm">

                    <img src = { facilityIcons[aminity] } alt = {aminity} />

                    <span>{aminity}</span>

                    </span>              

                    </>
                                )
                            } )
                        }

                    </div>

                    <div className="mb-1">

                      <p className="italic font-extrabold text-xl sm:text-2xl">
                        ${room.pricePerNight}/night
                      </p>

                   </div>

                </div>

            </div>


            </>
                        )
                    } )

                    :

                    <h2 className="text-center text-gray-500 font-semibold text-xl py-10">
                     No rooms available Now based on selected filters.
                    </h2>

                }

            </div>

            {/* FILTERS Section */}
            <div className = " w-full h-fit lg:w-80 border border-gray-300 mt-5 ">

                <div className = " flex justify-between items-center px-3 py-1.5 border-b border-gray-300">
                  
                    <p className="text-gray-800 font-extrabold">Filters</p>
             
                    <p

                     onClick = {clearInputs}  
                     
                     className="text-gray-500 cursor-pointer">
                        Clear
                     </p>

                    <p onClick = { ()=> setShowFilters(!ShowFilters) }   className=" lg:hidden text-gray-500 cursor-pointer ">
                        
                        {ShowFilters === false ? "Show" : "Hide" }
    
                    </p>

                
                </div>

                <div className = {`${ShowFilters === false ? 'hidden' : 'block' } lg:block `}>

                <div className = "flex flex-col px-3 py-1 space-y-3 cursor-pointer">

                    <p className="font-bold text-gray-800 pb-2">Popular filters</p>

                    {

                     roomTypes.map( (type , index)=> {
                            return(
                                <>
                                
                            <div key = {index} className = "flex gap-2 font-light text-gray-600">
                              
                              <input type="radio"  id= {type} name = "roomType"  
                              
                              
                              onChange = { ()=> setselectedTypes( type )  } 
                              
                              checked = {  type === selectedTypes   }
                              
                              />
                              
                              <label htmlFor = {type} >{type}</label>
                            
                            </div>

                    </>
                            )
                        } )
                    }

                </div>

                <div className = "flex flex-col px-3 py-2 space-y-3 cursor-pointer">

                    <p className="font-bold text-gray-800 pb-2">Price Range</p>

                    {
                        priceRanges.map( (price , index) => {
                            return(
                                <>
                                
                              <div key = {index}  className = "flex gap-2 font-light text-gray-600">
                                
                                 <input type="radio" id = {price} name = "roomPrice"
                                 
                                  onChange = { ()=> setselectedPrices(price)  }

                                  checked = { price === selectedPrices }
                                 
                                 />
                             
                                 <label htmlFor = {price} >$ {price}</label>
                             
                             </div>

                    </>
                            )
                        } )
                    }


                </div>

                <div className = "flex flex-col px-3 py-2 space-y-3 cursor-pointer">

                    <p className="font-bold text-gray-800 pb-2">Sort By</p>


                    {
                        sortOptions.map( (ele , index)=> {
                            return(
                                <>
                                
                    <div key = {index} className = "flex gap-2 font-light text-gray-600">
                        
                        <input type="radio" id = {ele} name = "roomSort" 
                        
                        onChange = { ()=> setselectedSort(ele)  }

                        checked = { ele === selectedSort }

                        />
                    
                        <label htmlFor = {ele} >{ele}</label>
                    
                    </div>


                    </>
                            )
                        } )
                    }

                </div>

                </div>

            </div>

        </div>
        

    </div>
    

    </>

)
}
