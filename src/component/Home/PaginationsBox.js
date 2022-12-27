import React from 'react'

export default function PaginationsBox(props) {
  return (
  <>
  <div className="pagination-box">
    <button onClick={()=>props.click(props.number)}>{props.number}</button>
  </div>
  </>
  )
}
