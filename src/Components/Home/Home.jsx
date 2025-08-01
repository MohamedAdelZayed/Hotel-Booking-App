import HeroSection from '../HeroSection/HeroSection'
import FeaturedDestination from '../FeaturedDestination/FeaturedDestination'
import Offers from '../Offers/Offers'
import Clients from '../Clients/Clients'
import Newsletter from '../Newsletter/Newsletter'
import { useEffect } from 'react'

export default function Home() {

  useEffect( ()=>{
  
      window.scrollTo({ top : 0 })
      
  
  } , [])
 
  return (
    <>

      <HeroSection/>
      <FeaturedDestination/>
      <Offers/>
      <Clients/>
      <Newsletter/>
          


    </>
 
)
}
