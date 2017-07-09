import React from 'react'
import glass_of_water from './glass-of-water.svg'
const Header = (props) => {
  return (
    <div className="App-header">
      <img src={glass_of_water} className="App-logo" alt="logo" />
      <h2>Daily Water Consumption</h2>
    </div>
  )
}
export default Header