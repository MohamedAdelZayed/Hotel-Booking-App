import HeroSection from '../HeroSection/HeroSection'
import FeaturedDestination from '../FeaturedDestination/FeaturedDestination'
import Offers from '../Offers/Offers'
import Clients from '../Clients/Clients'
import Newsletter from '../Newsletter/Newsletter'
import { useEffect, useState } from 'react'

export default function Home() {

  const [scroll, setScroll] = useState(false)

  useEffect( ()=>{
  
      window.scrollTo({ top : 0 })
      
  
  } , [])


  useEffect(()=> {

    const handleScroll = ()=> {

    if( window.scrollY >= 400  ){
       setScroll( true )
    }else{
      setScroll( false )
    }

    }

    window.addEventListener( "scroll" , handleScroll );

    return () => window.removeEventListener("scroll", handleScroll);

  } , []) 
 
  return (
    <>
    <div className = "relative">

      <div 
     
      onClick = {()=> window.scrollTo({top : 0 , behavior : 'smooth'  }) }
     
      className={` ${ scroll === true ? 'fixed' : 'hidden'  } bottom-1  right-2 z-50 bg-gray-800 rounded-full cursor-pointer p-2 shadow-lg animate-bounce `}>
     
      👆
     
     </div>

      <HeroSection/>
      <FeaturedDestination/>
      <Offers/>
      <Clients/>
      <Newsletter/>

      </div>
          


    </>
 
)
}
