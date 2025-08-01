
import { useEffect } from "react";
import { assets, userBookingsDummyData } from "../../assets/assets";
import Title from "../Title/Title";

export default function MyBookings() {


     useEffect( ()=> {
        
            window.scrollTo({ top: 20 })
        
    } , [] )


  return (
    
    <div className="py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32">


    <div>


        <Title align={"left"}  heading = {"My Bookings"} description = { "Easily manage your past, current, and upcoming hotel reservations in one place. Plan your trips seamlessly with just a few clicks." } />



       <div className="py-6">


  {/* Header Row - Hidden on mobile */}
  <div className="hidden md:grid grid-cols-[3fr_2fr_1fr] px-4 py-2 border border-gray-300 bg-gray-100 text-gray-700 text-lg font-semibold rounded-t-md">
    
    <p>Hotels</p>
    <p>Date & Timings</p>
    <p className="text-center">Payment</p>
  
  </div>

  {userBookingsDummyData.map((ele) => (
   
   <div key={ele._id} className="flex flex-col md:grid md:grid-cols-[3fr_2fr_1fr] items-start md:items-center gap-6 py-6 border-b border-gray-200 bg-white rounded-md md:rounded-none md:rounded-b-md mt-4">
      
      
      
      {/* Hotel Info */}
      <div className="flex flex-col sm:flex-row gap-4 w-full">
    
        <img
          src={ele.room.images[0]}
          alt={ele._id}
          className="w-full sm:w-40 h-[180px] sm:h-[120px] object-cover rounded-md"
        />
    
        <div className="flex flex-col gap-1 text-base text-gray-800">
    
          <h3 className="font-playfair text-lg font-extrabold text-gray-900 leading-tight">
            {ele.hotel.name} <span className = "text-sm text-gray-500" >({ele.room.roomType})</span>
          </h3>

          <div className="flex items-center gap-1 text-gray-600 text-sm">

            <img src = {assets.locationIcon} alt="" className="w-3 h-3" />

          <h4 className=" font-medium">
            {ele.hotel.address}, {ele.hotel.city}
          </h4>



          </div>

          <p className="text-gray-700">
            Guests: <span className="font-semibold">{ele.guests}</span>
          </p>
    
          <p className="text-gray-700">
            Total: <span className="font-semibold text-black">${ele.totalPrice}</span>
          </p>
    
        </div>
    
      </div>

      {/* Date & Timings */}
      <div className="flex justify-between md:justify-between flex-row md:flex-col lg:flex-row md:text-center  gap-6 w-full text-base text-gray-800">
        
        <div>
        
          <p className="font-semibold">Check-In:</p>
    
          <p className="text-gray-500 font-medium">
            
            {new Date(ele.checkInDate).toLocaleDateString('en-US', {
            
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            
            })}

          </p>
        
        </div>
        
        <div>
        
          <p className="font-semibold">Check-Out:</p>
        
          <p className="text-gray-500 font-medium">
            
            {new Date(ele.checkOutDate).toLocaleDateString('en-US', {
              
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            
            })}
          
          </p>
        
        </div>
     
      </div>

      {/* Payment Status */}
      <div className={`w-full text-center ${ ele.isPaid ? '' : 'flex flex-col gap-2 items-center'}`} >

        <span className={`inline-block text-sm sm:text-base px-4 py-1 font-semibold rounded-full
         ${ ele.isPaid ? 'text-green-700 bg-green-100' : 'text-red-700 bg-red-100' }`} >
          {ele.isPaid ? 'Paid' : 'Not Paid'}
        </span>

        {ele.isPaid === false && (
        
        <button className="px-4 py-1.5 mt-4 text-xs border font-bold border-gray-400 rounded-full hover:bg-gray-100 transition-all cursor-pointer">
            Pay Now
          </button>
        
        )}
      </div>
    
    </div>
  
  ))}
  
</div>


    </div>

  
    </div>
  )
}
