

import Title from '../Title/Title';
import { assets } from '../../assets/assets';
import { useState } from 'react';
import { toast } from 'react-toastify';

export default function AddRoom() {


  const [images, setimages] = useState({
   
    1 : null,
    2 : null,
    3 : null,
    4 : null,

  })


  const [Inputs, setInputs] = useState({

    roomType : "",

    roomPrice : 0,

    Amenities : {
    
      "Free Wifi" : false,
      "Free Breakfast" : false,
      "Room Service" : false,
      "Mountain View" : false,
      "Pool Access" : false,
    
    }

  })



  function clearInputs(e){

    e.preventDefault()
      
        setInputs({
           roomType: "",
           pricePerNight: "",
          
           Amenities: {
      
           "Free Wifi" : false,
           "Free Breakfast" : false,
           "Room Service" : false,
           "Mountain View" : false,
           "Pool Access" : false,

          },
           
        })

        setimages({
   
            1 : null,
            2 : null,
            3 : null,
            4 : null,

        })

        toast.success("Room Added Successfully")

  }




 


  return (

<div className="mt-14">

      <Title
        align="left"
        heading="Add Room"
        description="Fill in the details carefully and accurate room details, pricing, and amenities, to enhance the user booking experience."
      />


      <form onSubmit = { (e)=> clearInputs(e) } >


      {/* Images Upload */}
      <div className="mt-6">
        
        <h3 className="text-gray-800 mb-2 font-bold">Images</h3>
        
        <div className="flex flex-wrap gap-3">

            {
                Object.keys( images ).map( (i)=> {
                    return(
                        <>

                      <label htmlFor = { images[i] } className = 'cursor-pointer'>

                        <img src = { images[i] ? URL.createObjectURL( images[i] ) : assets.uploadArea  } alt = { images[i] } className='max-h-13'   />

                        <input type = "file" accept = 'image/*' id = {images[i]} hidden 
                        
                          onChange = { (e)=> setimages( { ...images , [i] : e.target.files[0] } )  }
                        
                        />

                      </label>

                       </>
                    )
                } )
            }
        
        </div>
      
      </div>

      {/* Room Type & Price */}
      <div className="flex flex-col sm:flex-row gap-4 mt-6">

        <div className="flex flex-col space-y-1.5 w-full sm:max-w-xs">
        
          <label htmlFor="roomType" className="text-sm font-medium text-gray-700">Room Type</label>
        
          <select

           onChange = { (e)=> setInputs( {...Inputs , roomType : e.target.value  } )  }
          
             value = {Inputs.roomType}

             required
          
          id="roomType" className="px-3 py-2 border border-gray-300 rounded-md">
           
            <option value="">Select Room Type</option>
            <option value="single">Single Bed</option>
            <option value="double">Double Bed</option>
            <option value="luxury">Luxury Bed</option>
            <option value="family">Family Bed</option>
       
          </select>
        
        </div>

        <div className="flex flex-col space-y-1.5 w-full sm:max-w-xs">
        
          <label htmlFor="price" className="text-sm font-medium text-gray-700">Price / night</label>
        
          <input
            id="price"
            type="number"
            className="px-3 py-2 border border-gray-300 rounded-md"
            placeholder="0"
            required

            value = {Inputs.pricePerNight}

            onChange = { (e)=> setInputs( {...Inputs , pricePerNight : e.target.value  } ) }

          />
        
        </div>

      </div>

      {/* Amenities */}
      <div className="mt-8">
     
        <h3 className="text-gray-800 mb-2 font-bold">Amenities</h3>

        <div className="flex flex-col space-y-3 px-1">
          
          { Object.keys( Inputs.Amenities ).map(( aminity , index ) => (

            <div key={ index } className="flex items-center gap-2 text-gray-600">
         
              <input type="checkbox"  id={ aminity }
              
              checked = { Inputs.Amenities[aminity] === true }

              onChange = { ()=> setInputs( { ...Inputs , Amenities : { ...Inputs.Amenities , [aminity] : !Inputs.Amenities[aminity] } } ) }

              />
         
              <label htmlFor ={ aminity } > { aminity } </label>
         
            </div>
         
         ))}

        </div>

     
      </div>


       <button type="submit" className="bg-[#2563EB] text-white px-8 py-2 rounded mt-8 hover:opacity-90 transition cursor-pointer"  >
          Add Room
        </button>


        </form>


    </div>
  );
}

