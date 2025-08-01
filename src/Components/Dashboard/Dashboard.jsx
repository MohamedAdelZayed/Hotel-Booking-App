
import Title from '../Title/Title';
import { assets, dashboardDummyData, userBookingsDummyData } from '../../assets/assets';

export default function Dashboard() {
  
  return (
  
  <div className="mt-14">

      <Title
        align="left"
        heading="Dashboard"
        description="Monitor your room listings, track bookings and analyze revenue—all in one place. Stay updated with real-time insights to ensure smooth operations."
      />

      {/* Stat Cards */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-8">

        {/* Total Bookings */}
        <div className="flex items-center gap-3 bg-primary/3 border border-gray-300 rounded p-4 sm:min-w-[240px] flex-1">
       
          <img src={assets.bankIcon} alt="Total Bookings Icon" className="w-10 h-10" />
       
          <div>
       
            <p className="text-blue-500 text-lg font-bold">Total Bookings</p>
       
            <p className="text-neutral-400 font-bold text-xl px-1">
              {dashboardDummyData.totalBookings}
            </p>
       
          </div>
       
        </div>

        {/* Total Revenue */}
        <div className="flex items-center gap-3 bg-primary/3 border border-gray-300 rounded p-4 sm:min-w-[240px] flex-1">
      
          <img src={assets.dollarIcon} alt="Total Revenue Icon" className="w-10 h-10" />
      
          <div>
       
            <p className="text-blue-500 text-lg font-bold">Total Revenue</p>
       
            <p className="text-neutral-400 font-bold text-xl px-1">
              $ {dashboardDummyData.totalRevenue}
            </p>
      
          </div>
      
        </div>

      </div>

      {/* Recent Bookings */}
      <div className="mt-10">

  <h2 className="text-xl text-blue-950/70 font-medium mb-5">
    Recent Bookings
  </h2>

  {/* Scrollable table container */}
  <div className="w-full overflow-x-auto border border-gray-300 rounded-lg max-h-80">

    <div className="min-w-[640px] divide-y divide-gray-200">
      
      {/* Table Header */}
      <div className="grid grid-cols-4 font-semibold text-sm text-gray-700 bg-gray-100 py-3 px-4 rounded-t-md">
      
        <h3>UserName</h3>
        <h3>RoomType</h3>
        <h3>Total Amount</h3>
        <h3>Payment Status</h3>
     
      </div>

      {

        userBookingsDummyData.map( ( ele )=>{
          return(
            <>
            
      <div className="grid grid-cols-4 text-sm text-gray-600 py-3 px-4 hover:bg-gray-50 transition">

        <p>{ele.user.username}</p>
        
        <p>{ ele.room.roomType }</p>
        
        <p>${ele.totalPrice}</p>
        
        <p className = {`${ ele.isPaid === true ? 'text-green-600' : 'text-red-600' } font-medium`}>

          {ele.isPaid === true ? "Paid" : "UnPaid" }
        
        </p>

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
