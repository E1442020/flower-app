import React from 'react';
import './Home.css';

export default function PaginationsBox(props) {
  // console.log(props.active)
 
  return (
  <>
  <div className="pagination-box">
    <button className={props.active && 'activee'} onClick={()=>props.click(props.number)}>{props.number}</button>
    
  </div>
  
  </>
  )
}
