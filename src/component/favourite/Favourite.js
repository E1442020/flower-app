import React, { Fragment, useEffect, useState } from 'react';
import FlowerBox from '../Home/FlowerBox';
import './Favourite.css';

export default function Favourite() {
  
  const [favFlower, setFavFlower] = useState([]);
  const [loading,setLoading]=useState(true);




  function getFavouriteFromLocalStorage() {
    if (localStorage.getItem("flower")) {
      return JSON.parse(localStorage.getItem("flower"))
    }
    return []
  }

  const favouriteFlowers = getFavouriteFromLocalStorage();
  console.log(favouriteFlowers);

  const getFavFlower = () => {
    setLoading(true);
    let endPoint = favouriteFlowers.toString();
    console.log(endPoint);

    fetch(`https://flowers-api.onrender.com/flowers/${endPoint}`)
      .then(response => response.json())
      .then(data => {
        setFavFlower(data)
        console.log(favFlower)
        setLoading(false)
      })

  }


  useEffect(() => {
    getFavFlower()
  }, [])


  return (
    <>
      <div className='favourite-container'>
        <div className='favourite-box'>
        {loading? <div className="spinner">
  <div className="bounce1"></div>
  <div className="bounce2"></div>
  <div className="bounce3"></div>
</div>:<>
          {favFlower.map((fav, index) =>

            <Fragment key={index} >
              <FlowerBox img={fav.flower_picture} name={fav.flower_name} description={fav.flower_description} />

            </Fragment>)}</>}


        </div>


      </div>
    </>
  )
}
