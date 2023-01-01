import React, { useEffect, useState } from 'react';
import { MdFavorite } from "react-icons/md";
import './Home.css';

import { Link } from "react-router-dom";
export default function FlowerBox(props) {
  const[iconSelected,setIconSelected]=useState(false);
 
  

  const getFavouriteFromLocalStorage = () => {
    if (localStorage.getItem("flower")) {
      return JSON.parse(localStorage.getItem("flower"))
    }
    return []
  }

 

  const addToFavourite = (item) => {
    console.log(item)
    
    const favouriteFlowers = getFavouriteFromLocalStorage();

    if (favouriteFlowers.includes(item)) {
      let index = favouriteFlowers.indexOf(item);
      favouriteFlowers.splice(index, 1);
      localStorage.setItem("flower", JSON.stringify(favouriteFlowers));

      setIconSelected(false)
    } else {
      favouriteFlowers.push(item);
      localStorage.setItem("flower", JSON.stringify(favouriteFlowers));
      setIconSelected(true)



  }


  }
  
  const checkIsFavorite = (item) => {
    const favouriteFlowers = getFavouriteFromLocalStorage();

    if (favouriteFlowers.includes(item)) {
     setIconSelected(true) ;
    } else{
      setIconSelected(false) ;

    }
  }

  ;
  useEffect(()=>{
    checkIsFavorite(props.index)
  },[])

  return (
    <>
      <div className='flowerBox-container'>
        <div className='img-container'>
          <img src={props.img} alt='imagoe' />
        </div>

        <h3 className='f-name'>{props.name}</h3>
        <p className='f-des'>{props.description}</p>
        <div className='btn-icon'>
          <Link to={`/view/${props.index}`}><button>View</button></Link>
          {iconSelected? <MdFavorite  className='selectedIcon' size={30} onClick={() =>addToFavourite(props.index)  } />
:        <MdFavorite  className='notSelectedIcon' size={30} onClick={() =>addToFavourite(props.index) } />
}


        </div>

      </div>
    </>
  )
}
