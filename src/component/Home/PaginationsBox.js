import React from 'react'

export default function PaginationsBox(props) {
  return (
  <>
  <div className="pagination-box">
    <button>{props.number}</button>
  </div>
  </>
  )
}
