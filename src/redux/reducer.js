import synthsReducer from './synthsReducer'
import userReducer from './userReducer'
import cartReducer from './cartReducer'
import { combineReducers } from 'redux'



// combines multiple reducers, keeping parts fo state separate based on keys we define
export const reducer = combineReducers({
    synths: synthsReducer,
    user: userReducer,
    cart: cartReducer
})