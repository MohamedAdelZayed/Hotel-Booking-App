
import { roomsDummyData } from '../../assets/assets';
import Title from '../Title/Title';

export default function ListRooms() {
 
  return (
 
 <div className="mt-14">

      <Title
        align="left"
        heading="Room Listings"
        description="View, edit, or manage all listed rooms. Keep the information up-to-date to provide the best experience for users."
      />

      <div className="mt-10">

  <h2 className="text-xl text-blue-950/70 font-medium mb-5">
    Total Hotels
  </h2>

  {/* Scrollable table container */}
  <div className="w-full overflow-x-auto border border-gray-300 rounded-lg max-h-80">
    
    <div className="min-w-[640px] divide-y divide-gray-200">
      
      {/* Table Header */}
      <div className="grid grid-cols-4 font-semibold text-sm text-gray-700 bg-gray-100 py-3 px-4 rounded-t-md">
        <h3>Name</h3>
        <h3>Facility</h3>
        <h3>Price / night</h3>
        <h3>Hotel Name</h3>
      </div>


      {

        roomsDummyData.map( (room)=>{
          return(
            <>
            
         <div className="grid grid-cols-4 text-sm text-gray-600 py-3 px-4 hover:bg-gray-50 transition ">
           <p>{ room.roomType }</p>
           <p>{room.amenities.join(',')}</p>
           <p className='px-4'>${ room.pricePerNight }</p>
           <p className="text-green-600 font-medium"> {room.hotel.name} </p>
         </div>

         </>
          )
        } )

      }


    </div>
 
  </div>

</div>

    </div>
  );
}
