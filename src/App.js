import React, { Component } from 'react'

import Header from './Header'
import WaterCounter from './WaterCounter'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header  />
        <WaterCounter />
      </div>
    )
  }
}

export default App;
