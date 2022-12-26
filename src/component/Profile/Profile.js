import React from 'react';
import { BiArrowBack } from "react-icons/bi";
import { Link } from 'react-router-dom';

import img from '../Images/Where to Buy the Best Faux Spring Greens and Florals.jpg';
import './Profile.css';

export default function Profile() {
  return (
    <>
    <div className='protofile-container'>
        <div className="cover"></div>
        <div className='imgCont'>
        <img src={img} alt='' />
        </div>
        
        <div className='protofile-content'>
            <h3>name: Babonge flower</h3>
            <p className='desc'>description: Babong Flower is a beautiful flower in our garden</p>
            <Link to='/'><button className='flex'><BiArrowBack /> back</button></Link>
        </div>
         
    </div>
    </>
  )
}
