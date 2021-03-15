import synthsReducer from './synthsReducer'
import { combineReducers } from 'redux'



// combines multiple reducers, keeping parts fo state separate based on keys we define
export const reducer = combineReducers({synths: synthsReducer})