import types from './actionTypes'

const initialState = () => {return {
  isFetching: false,
  consumptionHistory: {},
}}

export default function waterReducer(state=initialState(), action) {
  switch (action.type) {
    case types.FETCH_CONSUMPTION_HISTORY:
      return Object.assign({}, state, {isFetching: true})
    case types.RECEIVE_CONSUMPTION_HISTORY:
      return Object.assign(
        {}, state,
        {isFetching: false, consumptionHistory: action.data}
      )
    case types.UPDATE_CONSUMPTION_HISTORY:
      return Object.assign(
        {}, state,
        {consumptionHistory: Object.assign({}, state.consumptionHistory, action.data)}
      )
    case types.CHANGE_VIEW: 
      return Object.assign({}, state, {view: action.view})
    default:
      return state
  }
}