import React from 'react'
import glass_of_water from '../../glass-of-water.svg'

const GlassesDisplay = (props) => {
  const {count} = props
  return (
    <div className="glasses-display">
      <img src={glass_of_water} className="water-glass-logo" alt="water glass" />
      <div> X {count}</div>
    </div>
  )
}

export default GlassesDisplay