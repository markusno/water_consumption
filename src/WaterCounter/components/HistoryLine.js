import React from 'react'
import GlassesHistory from './GlassesHistory'

const HistoryLine = (props) => {
  const {count,changeCount, date} = props  
  
  return (
    <div className="history-line">
      <div>
        {date}:
      </div>
      <div>
        <GlassesHistory count={count} />
        <input type="number"
          onChange={(e) => changeCount(Number(e.target.value))}
          value={count}/>
      </div>
    </div>
  )
}

export default HistoryLine