import React, { useEffect, useState } from 'react';
import { BiArrowBack } from "react-icons/bi";
import { MdFavorite } from "react-icons/md";
import { Link, useParams } from 'react-router-dom';

import './Profile.css';

export default function Profile() {
  const[profile,setProfile]=useState([]);
  const params=useParams();
  const [loading,setLoading]=useState(true);

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

  useEffect(()=>{
    setLoading(true);

    fetch(`https://flowers-api.onrender.com/flower/${params.index}`)
    .then(response => response.json())
    .then(data =>{setProfile(data)
      setLoading(false)})
    console.log(profile)
    
  },[])
  return (
    <>
    {loading? <div className="spinner">
  <div className="bounce1"></div>
  <div className="bounce2"></div>
  <div className="bounce3"></div>
</div>: <div className='protofile-container'>
        <div className="cover"></div>
        <div className='imgCont'>
        <img src={profile.flower_picture} alt='' />
        </div>
        
        <div className='protofile-content'>
            <h3>Name: {profile.flower_name}</h3>
            <p className='desc'>Description: {profile.flower_description}</p>
            <MdFavorite className='activeIcon' size={30} onClick={() => addToFavourite(profile.index)} />

            <Link to='/'><button className='flex'><BiArrowBack /> back</button></Link>
        </div>
         
    </div>}

   
    </>
  )
}
