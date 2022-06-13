import React from 'react'

const Bio = (props) => {
  return (
    <div className="bio--container">
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </div>
  )
}

export default Bio
