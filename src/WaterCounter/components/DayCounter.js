import React from 'react'
import GlassesDisplay from './GlassesDisplay'



const DayCounter = (props) => {
  const {increase, decrease, count, className} = props    
  
  return (
    <div className={className}>
      <button onClick={decrease}>
        -
      </button>
      <GlassesDisplay count={count} />
      <button onClick={increase}>
        +
      </button>
    </div>
  )
}

export default DayCounter