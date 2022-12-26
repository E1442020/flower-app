import React from 'react';
import { MdFavorite } from "react-icons/md";
import './Home.css';

import { Link } from "react-router-dom";
export default function FlowerBox(props) {
  return (
    <>
    <div className='flowerBox-container'>
        <img src={props.img} alt='imagoe' />
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <div className='btn-icon'>
        <Link to='/view'><button>View</button></Link>
        <MdFavorite style={{color:'pink'}} size={30} />

        </div>
       
    </div>
    </>
  )
}