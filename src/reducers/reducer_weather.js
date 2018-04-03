import { FETCH_WEATHER } from '../actions/index'

export default function (state = [], action) {
  console.log('Actions reci', action)
  switch (action.type) {
    case FETCH_WEATHER:
      if (action.payload.data === undefined) return [...state]
      else return [ action.payload.data, ...state ]
  }
  return state
}
