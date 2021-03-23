import synthsReducer from './synthsReducer'
import userReducer from './userReducer'
import { combineReducers } from 'redux'



// combines multiple reducers, keeping parts of state separate based on keys we define
export const reducer = combineReducers({
    synths: synthsReducer,
    user: userReducer
})