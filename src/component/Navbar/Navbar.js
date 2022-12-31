import React from 'react';
import { NavLink } from "react-router-dom";
import './Navbar.css';

export default function Navbar() {
  return (
    <>
    <div className='nav-container'>
       <div className='nav-content'>
       <div className='logo-container'>
            <h3>flower app</h3>
        </div>

        <div className='nav-list'>
            <ul>
                <li><NavLink to='/'  activeclassname='active'>Home</NavLink></li>
                <li><NavLink to='/fav'  activeclassname='active'>Favourite</NavLink></li>
            </ul>
        </div>
       </div>
    </div>
    </>
  )
}
