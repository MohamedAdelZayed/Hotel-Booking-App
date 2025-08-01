import { useRef, useState } from "react";
import { assets } from "../../assets/assets";
import Stars from './../Stars/Stars';

export default function TestimonialCard({ client }) {
  
  const divRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
  
    const rect = divRef.current.getBoundingClientRect();
  
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  
  };

  return (

    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="relative  h-90 rounded-xl p-0.5 backdrop-blur-md text-gray-800 overflow-hidden shadow-lg cursor-pointer"
    >
    
      {visible && (
    
    <div
          className="pointer-events-none blur-xl bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 size-80 absolute z-0 transition-all duration-300 ease-out"
          style={{
            transform: `translate(${position.x - 120}px, ${position.y - 120}px)`,
          }}
        />
      )}

      <div className="relative z-10 bg-gray-100 p-5 h-full w-full rounded-[10px] shadow-2xl flex flex-col items-center justify-center text-center">
    
  <img
    src={client.image}
    alt={client.name}
    className="w-24 h-24 rounded-full shadow-md"
  />

  <h2 className="text-2xl font-bold text-gray-800 my-3">{client.name}</h2>

  <Stars />

  <p className="text-sm text-gray-500 my-3 px-4">{client.review}</p>

  <div class="flex items-center space-x-4 mt-2 text-gray-500 group-hover:text-white">

    <p className=" flex justify-center items-center border rounded-full p-1">
      <img src = {assets.facebookIcon} alt="" className="w-4 h-4" />
    </p>

    <p className=" flex justify-center items-center border rounded-full p-1">
      <img src = {assets.linkendinIcon} alt="" className="w-4 h-4" />
    </p>

    <p className=" flex justify-center items-center border rounded-full p-1">
      <img src = {assets.twitterIcon} alt="" className="w-4 h-4" />
    </p>

  </div>

</div>


    </div>
  );
}


