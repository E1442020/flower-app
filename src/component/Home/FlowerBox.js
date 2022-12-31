import React from 'react';
import { MdFavorite } from "react-icons/md";
import './Home.css';

import { Link } from "react-router-dom";
export default function FlowerBox(props) {
  // const [currentIcon,setCurrentIcon]=useState();

  const getFavouriteFromLocalStorage = () => {
    if (localStorage.getItem("flower")) {
      return JSON.parse(localStorage.getItem("flower"))
    }
    return []
  }

 

  const addToFavourite = (item) => {
    console.log(item)
    // setCurrentIcon(item)
    const favouriteFlowers = getFavouriteFromLocalStorage();

    if (favouriteFlowers.includes(item)) {
      alert('this flower already present');
    } else {
      favouriteFlowers.push(item);
      localStorage.setItem("flower", JSON.stringify(favouriteFlowers));


  }


  };

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
          {/* {currentIcon==props.index+1?
          <MdFavorite className='ll' size={30} onClick={() => addToFavourite(props.index)} />
:          <MdFavorite className='activeIcon' size={30} onClick={() => addToFavourite(props.index)} />
          } */}
        <MdFavorite className='activeIcon' size={30} onClick={() => addToFavourite(props.index)} />


        </div>

      </div>
    </>
  )
}
