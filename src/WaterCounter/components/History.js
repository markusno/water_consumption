import React from 'react'

import DayCounter from './DayCounter'

const History = (props) => {
  const {consumptionHistory, addDay, incDayConsumption, decDayConsumtion} = props
  const orderedKeys = Object.keys(consumptionHistory).sort((d1, d2) => d2.localeCompare(d1))
  return (
    <div>
      <h3>Consumption History</h3>
      {orderedKeys.map(date => 
        <div>          
          <div>
            {date}:
          </div>
          <DayCounter
            count={consumptionHistory[date]}
            increase={() => incDayConsumption(date)}
            decrease={() => decDayConsumtion(date)}
          />
        </div>
      )}
    </div>
  )
}

export default History