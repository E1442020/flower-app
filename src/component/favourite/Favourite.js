import React from 'react'
import FlowerBox from '../Home/FlowerBox'
import img from '../Images/Where to Buy the Best Faux Spring Greens and Florals.jpg'
import './Favourite.css'

export default function Favourite() {
  return (
   <>
   <div className='favourite-container'>
    <div className='favourite-box'>
    <FlowerBox img={img} name='Babong flower' description='Babong Flower is a beautiful flower in our garden'  />
    <FlowerBox img={img} name='Babong flower' description='Babong Flower is a beautiful flower in our garden'  />
    
    </div>
      

   </div>
   </>
  )
}
