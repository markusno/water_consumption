import React, {Component} from 'react'

import DayCounter from './components/DayCounter'
import History from './components/History'


const initialState = {
  '2017-07-05': 5,
  '2017-07-04': 3,
  '2017-07-03': 6,
  '2017-07-02': 10
}

export default class WaterCounter extends Component {
  
  constructor (props) {
    super(props)
    this.state = this.initCurrentDay(initialState)
  }

  toDay() {
    return new Date().toISOString().substr(0, 10)
  }

  initCurrentDay(consumptionHistory) {
    const currentDay = this.toDay()    
    return (typeof consumptionHistory[currentDay] === 'undefined') ?
        Object.assign({}, consumptionHistory, {[currentDay]: 0})
        : consumptionHistory
  }
  
  addGlass(date) {
    const glasses = this.state[date]
    this.setState(
      {[date]: glasses + 1}
    )
  }

  removeGlass(date) {
    const glasses = this.state[date]
    if(glasses > 0) {
      this.setState({[date]: glasses - 1})
    }
  }

  addDay(date) {
    if (!this.state[date]) {
      this.setState({[date]: 0})
    }
  }

  render() {
    const consumptionHistory = this.state
    const currentDate = this.toDay()
    return (
      <div>
        <div>
          <h3>Glasses of water today</h3>
          <DayCounter
            className="current-day-counter"
            count={consumptionHistory[currentDate]}
            increase={() => this.addGlass(currentDate)}
            decrease={() => this.removeGlass(currentDate)}/>
        </div>
        <History
          addDay={(date) => this.addDay(date)}
          consumptionHistory = {consumptionHistory}
          incDayConsumption={(date) => this.addGlass(date)}
          decDayConsumtion={(date) => this.removeGlass(date)}
        />
      </div>
    )
  }
}

