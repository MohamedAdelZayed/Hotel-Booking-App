// import { useEffect } from "react";

export default function About() {


  // useEffect( ()=> {
  
  //         window.scrollTo({ top: 20 })
  
  // } , [] )

 return (

    <div className="px-6 md:px-16 lg:px-24 xl:px-32 pt-20 pb-10 overflow-hidden">
     
      {/* About Us Section */}
      <section className="my-10">
      
        <div className="text-3xl font-bold border-l-8 border-[#92B0F4] py-2 pl-2">
          <h2>About Us</h2>
        </div>

        <div className="my-3 px-3 text-gray-700 leading-relaxed text-base">
          <p>
            At <strong>QuickStay</strong>, we believe every stay should be unforgettable. Whether you're planning a weekend escape, a business trip, or a luxury vacation, our platform connects you to a curated selection of top-rated hotels, resorts, and boutique accommodations across the globe.
          </p>
          <p className="py-3">
            We make booking seamless and secure — offering real-time availability, honest reviews, and exclusive deals you won’t find elsewhere. With a commitment to comfort, convenience, and customer satisfaction, QuickStay is your trusted partner in discovering the perfect place to stay — every time, everywhere.
          </p>
        </div>
      </section>

      {/* Location Map Section */}
      <section className="my-10">

        <div className="text-3xl font-bold border-l-8 border-[#92B0F4] py-2 pl-2">
          <h2>Location to Visit</h2>
        </div>
        {/* Map الخريطه */}
        <div className="my-6">


          <iframe 
          
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.77816054836!2d2.4294353501132924!3d48.858938485376704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2z2KjYp9ix2YrYs9iMINmB2LHZhtiz2Kc!5e0!3m2!1sar!2seg!4v1753840315059!5m2!1sar!2seg"
           width="100%" 
           height="450" 
           className = "rounded-lg w-full shadow-lg "
           style={{ border: 0 }}

           allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">

           </iframe>
          
        
        </div>
      
      </section>
    
    </div>
  
);
}
