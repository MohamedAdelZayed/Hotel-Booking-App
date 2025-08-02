import { assets } from "../../assets/assets";
import { motion } from 'framer-motion';

export default function Newsletter() {

 return (


     <div className = "overflow-hidden">

    <motion.div 
    
       initial = {{ opacity : 0 , x : -100  }}
       whileInView = {{ opacity : 1 , x : 0  }}
       transition = {{ duration : 2.3  }}
       viewport={{ once : true }}

    
    className  = "px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 pt-25 pb-24 overflow-hidden w-full" >

      <div className="flex flex-col items-center w-full max-w-5xl lg:w-full rounded-2xl px-4 py-12 md:py-16 mx-auto bg-gray-900 text-white">

    <div className="flex flex-col justify-center items-center text-center">

      <h1 className="text-3xl md:text-4xl lg:text-[40px] font-semibold">Stay Inspired</h1>

      <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w-xl">
        Join our newsletter and be the first to discover new updates, exclusive offers, and inspiration.
      </p>

    </div>

    <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6 w-full max-w-lg">

      <input
        type="text"
        className="bg-white/10 px-4 py-2.5 border border-white/20 rounded outline-none w-full"
        placeholder="Enter your email"
      />

      <button className="flex items-center justify-center gap-2 group bg-black px-4 md:px-7 py-2.5 rounded active:scale-95 transition-all cursor-pointer">
        Subscribe

        <img src = {assets.arrowIcon} alt="arrowIcon" className="invert"/>

      </button>

    </div>

    <p className="text-gray-500 mt-6 text-xs text-center">
      By subscribing, you agree to our Privacy Policy and consent to receive updates.
    </p>

  </div>

    </motion.div>

    </div>

)
}
