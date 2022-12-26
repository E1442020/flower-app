import React from 'react';
import { Link } from "react-router-dom";
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
                <li><Link to='/' >Home</Link></li>
                <li><Link to='/fav'>Favourite</Link></li>
            </ul>
        </div>
       </div>
    </div>
    </>
  )
}
