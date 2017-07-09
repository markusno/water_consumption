import types from '../reducers/actionTypes'

export const startFetch = {type: types.FETCH_CONSUMPTION_HISTORY}

export const receiveConsumptionHistory = (consumptionHistory) => {
  return {type: types.RECEIVE_CONSUMPTION_HISTORY, data: consumptionHistory}
}

export const updateConsumptionHistory = (daysConsumption) => {
  return {type: types.UPDATE_CONSUMPTION_HISTORY, data: daysConsumption}
}

export const changeView = view => {
  return {type: types.CHANGE_VIEW, view}
}