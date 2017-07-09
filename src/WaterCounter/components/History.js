import React from 'react'

import HistoryLine from './HistoryLine'

const History = (props) => {
  const {
    consumptionHistory,
    changeCount
  } = props
  const orderedKeys = Object.keys(consumptionHistory).sort((d1, d2) => d2.localeCompare(d1))
  return (
    <div>
      <h3>Consumption History</h3>
      {orderedKeys.map(date => 
        <div key={date}>          
          <HistoryLine
            date={date}          
            count={consumptionHistory[date]}
            changeCount={(v) => changeCount(date, v)}
          />
        </div>
      )}
    </div>
  )
}

export default History