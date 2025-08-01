import { assets } from "../../assets/assets";

export default function HotelCard({room}) {

 return (

    <>
    
    <div className=" w-full transition-all transform hover:scale-[1.02] duration-200 rounded-xl overflow-hidden bg-white text-gray-500/90 shadow-[0px_4px_4px_rgba(0,0,0,0.05)]">

                            <img src = {room.images[0]} alt = "room" className = "w-full object-cover " />

                            <div className = "p-3">

                            <div className = "flex justify-between items-center  font-semibold text-lg">

                                <p className = "font-playfair text-gray-800">{room.hotel.name}</p>

                                <div className = "flex gap-1 items-center">

                                    <img src = {assets.starIconFilled} alt="starIconFilled" />

                                    <p>{room.hotel.rating}</p>

                                </div>


                            </div>

                            <div className = "flex items-center gap-1 text-sm mt-1 text-gray-500">
                                    <img src = {assets.locationIcon} alt="locationIcon" />
                                    <p className = "">{room.hotel.location}</p>
                            </div>

                            <div className="flex items-center justify-between mt-4">
                  
                              <p><span className = "text-lg font-bold text-gray-800 ">${room.pricePerNight}</span>/night</p>
 
                              <button type='submit' className=" cursor-pointer border border-gray-300 px-4 py-1 rounded-full hover:bg-gray-100">Book Now</button>

                            </div>

                            </div>

                        </div>

    </>

)
}
