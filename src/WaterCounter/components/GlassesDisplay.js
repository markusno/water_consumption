import React from 'react'
import glass_of_water from '../../glass-of-water.svg'

const GlassesDisplay = (props) => {
  const {count} = props
  const glassArray = [...Array(count).keys()]
                    .map(k => {
                      return <img key={k}
                              src={glass_of_water}
                              className="water-glass-logo"
                              alt="water glass" />})
  return (
    !count ? <div className="glasses-display"> 0 </div> 
    : count <= 5 ?
    <div className="glasses-display">
      {glassArray}
    </div>
    :
    <div className="glasses-display">
      <img src={glass_of_water} className="water-glass-logo" alt="water glass" />
      <div> X {count}</div>
    </div>
  
  )
}

export default GlassesDisplay