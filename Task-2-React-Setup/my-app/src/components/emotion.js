import React from 'react'
import "./emotion.css"

const emotion = ({name,description}) => {
  return (
    <article>
        <h3>{name}</h3>
        <p>{description}</p>
    </article>
  )
}

export default emotion
