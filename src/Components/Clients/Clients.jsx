import { testimonials } from "../../assets/assets";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import Title from "../Title/Title";
import { motion } from 'framer-motion';

export default function Clients() {

 return (

    <div className = "overflow-hidden">

    <motion.div 
    
       initial = {{ opacity : 0 , x : 100  }}
       whileInView = {{ opacity : 1 , x : 0  }}
       transition = {{ duration : 1.9  }}
       viewport={{ once : true }}
    
    className="mt-14 px-4 md:px-12 lg:px-36" >

      <Title align = {'center'}  heading = {'What Our Guests Say'} description = {'Discover why discerning travelers consistently choose QuickStay for their exclusive and luxurious accommodations around the world.'} />


      <div className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 px-2 ">
      
      {
        testimonials.map( (client , index)=>{
            return(
                <>
                
                <TestimonialCard client = {client} index = {index} />

                </>
            )
        } )
      }

      </div>    
      
       
 
    </motion.div>

    </div>

)
}
