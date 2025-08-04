import {  useEffect, useState } from "react";
import { ExploreCities } from "../../assets/assets";
import Title from "../Title/Title";



export default function Explore() {


  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const threshold = 10;

  const handleMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    setTilt({ x: y * -threshold, y: x * threshold });
  };

  const handleLeave = () => {
    setTilt({ x: 0, y: 0 });
  };


  useEffect( ()=>{
    
      window.scrollTo({ top : 0 })
    
  } , [])


 return (

    <>
    
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 pt-14 pb-28 bg-gray-50 text-center mt-12" >

        <Title align = {'center'}  heading = {'Top Cities to Stay'} description = {'Handpicked destinations for luxury stays, exclusive experiences, and unforgettable trips.'} />
        

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">

        {ExploreCities.map((city, index) => (
        
        <div
            key={index}
            className="rounded-2xl shadow-2xl bg-white overflow-hidden w-full transform-gpu transition-transform duration-300 ease-out hover:shadow-3xl cursor-pointer"
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            style={{
              transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
            }}
          >
        
            <img 
              src={city.image}

              loading="lazy"

              alt={city.name}
              className="w-full h-52 object-cover"
            />
        
            <div className="px-5 py-4 text-left">
        
              <h3 className="text-xl font-bold text-gray-800 mb-1">{city.name}</h3>
              <p className="text-gray-600 text-sm mb-2 leading-relaxed">{city.description}</p>
              <p className="text-sm text-blue-500 font-medium">{city.stays} stays available</p>
          
            </div>

          </div>

        ))}
      </div>


    </div>

    </>

)
}
