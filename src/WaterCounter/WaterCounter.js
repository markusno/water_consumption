import React, {Component} from 'react'
import {PropTypes} from 'prop-types'
import {connect} from 'react-redux'

import DayCounter from './components/DayCounter'
import History from './components/History'
import * as selectors from '../selectors'
import * as actions from './actions'
import {fetchWaterConsumption} from '../fetching'
import {viewTypes} from './constants'

export class WaterCounter extends Component {

  componentDidMount() {
    const {fetchWaterConsumption, actions} = this.props
    actions.changeView(viewTypes.toDaysView)
    fetchWaterConsumption(actions.fetchActions)
  }

  toDay() {
    return new Date().toISOString().substr(0, 10)
  }
  
  addGlass(date) {
    const {consumptionHistory, actions} = this.props
    const glasses = consumptionHistory[date] ? consumptionHistory[date] : 0
    actions.updateConsumptionHistory(
      {[date]: glasses + 1}
    )
  }

  removeGlass(date) {
    const {consumptionHistory, actions}  = this.props
    const glasses = consumptionHistory[date]
    if(glasses > 0) {
      actions.updateConsumptionHistory({[date]: glasses - 1})
    }
  }

  changeCount(date, value) {
    const { actions}  = this.props
    const count = value > 0 ? value : 0
    actions.updateConsumptionHistory({[date]: count})
  }

  setView (view) {
    const {actions} = this.props
    actions.changeView(view)
  }

  render() {
    const {consumptionHistory, isFetching, view} = this.props
    const currentDate = this.toDay()
    return (
      isFetching ? 
      <div>Loading...</div>
      : consumptionHistory ?
      <div>
        <div className="view-selection">
          <button
            className={view===viewTypes.toDaysView ? 'selected' : ''}
            onClick={() => this.setView(viewTypes.toDaysView)}>
            Todays Consumption
          </button>
          <button
            className={view===viewTypes.historyView ? 'selected' : ''}
            onClick={() => this.setView(viewTypes.historyView)}>
            Consumption History
          </button>
        </div>
        {view === viewTypes.toDaysView ? 
        <div>
          <h3>Glasses of water today</h3>
          <DayCounter
            className="current-day-counter"
            count={consumptionHistory[currentDate]}
            increase={() => this.addGlass(currentDate)}
            decrease={() => this.removeGlass(currentDate)}/>
        </div>
        : view === viewTypes.historyView ?
        <History
          consumptionHistory = {consumptionHistory}
          changeCount={(date, value) => this.changeCount(date, value)}
        />
        : null}
      </div>
      : null
    )
  }
}

WaterCounter.propTypes = {
  consumptionHistory: PropTypes.object,
  isFetching: PropTypes.bool,
  fetchWaterConsumption: PropTypes.func,
  actions: PropTypes.object
}

const mapStateToProps = state => {
  return {
    consumptionHistory: selectors.selectConsumptionHistory(state),
    isFetching: selectors.isFetching(state),
    view: selectors.view(state),
    fetchWaterConsumption
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      fetchActions: {
        start: () => dispatch(actions.startFetch),
        receive: (data) => dispatch(actions.receiveConsumptionHistory(data))
      },
      updateConsumptionHistory: (daysConsumtion) => dispatch(actions.updateConsumptionHistory(daysConsumtion)),
      changeView: view => dispatch(actions.changeView(view))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WaterCounter)