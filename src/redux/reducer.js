import synthsReducer from './synthsReducer'
import userReducer from './userReducer'
import { combineReducers } from 'redux'

export const reducer = combineReducers({
    synths: synthsReducer,
    user: userReducer
})