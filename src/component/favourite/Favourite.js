import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FlowerBox from "../Home/FlowerBox";
import "./Favourite.css";

export default function Favourite() {
  const [favFlower, setFavFlower] = useState([]);
  const [loading, setLoading] = useState(true);
  const [localEmpty,setLocalEmpty]=useState(false)
  // localStorage.clear();

  const getFavouriteFromLocalStorage = () => {
    if (localStorage.getItem("flower")) {
      return JSON.parse(localStorage.getItem("flower"));
    }
    return [];
  };

  const favouriteFlowers = getFavouriteFromLocalStorage();
 
  // console.log(favouriteFlowers);

  const getFavFlower = () => {
    if(favouriteFlowers.length<=0){
      
      setLocalEmpty(true);

    return;}
      setLoading(true);
    
      let endPoint = favouriteFlowers.toString();
      console.log(endPoint);
  
      fetch(`https://flowers-api.onrender.com/flowers/${endPoint}`)
        .then((response) => response.json())
        .then((data) => {
          setFavFlower(data);
          setLoading(false);
          setLocalEmpty(false);
          console.log(favFlower);
          
        });
    
    }
    
    
  
  

  useEffect(() => {
   
    getFavFlower();
  }, []);

  return (
    <>
      <div className="favourite-container">
        <div className="favourite-box">
          {localEmpty?(<><div className="empty-container"><p>No flower selected!</p><Link to="/">Browse Flowers</Link></div></>):<>{loading ? (
  <div className="spinner">
    <div className="bounce1"></div>
    <div className="bounce2"></div>
    <div className="bounce3"></div>
  </div>
) : (
  <>
    {favFlower.map((fav, index) => (
      <Fragment key={index}>
        <FlowerBox
          img={fav.flower_picture}
          name={fav.flower_name}
          description={fav.flower_description}
          index={fav.index} 
        />
      </Fragment>
    ))}
  </>
)}</>}
        </div>
      </div>
    </>
  );
}

