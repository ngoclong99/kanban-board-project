import React from 'react'
import './card.scss'

Card.propTypes = {}

function Card(props) {
  return <div className="card">{props.children}</div>
}

export default Card
