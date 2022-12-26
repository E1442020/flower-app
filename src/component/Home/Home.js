import React from 'react'
import FlowerBox from './FlowerBox'
import { FlowerData } from './FlowerData'
import './Home.css'
import PaginationsBox from './PaginationsBox'


export default function Home() {

  const totalItems = 14;

const items = new Array(totalItems).fill(null);





  return (
    <>
    <div className="home-container">

   <div className='flower-container'>
    
   {FlowerData.map((flower)=>{
        return <FlowerBox key={flower.id} name={flower.name} img={flower.img} description={flower.description}  />
      })}

   </div>

   <div className='paginations-container'>
   {items.map((_, idx) =>  <PaginationsBox key={idx} number={idx} />)}

</div>
      

    </div>
    </>
  )
}
