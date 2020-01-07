import {combineReducers} from 'redux'
import loggedReducer from './isLogged'

const allReducers = combineReducers({
    isLogged : loggedReducer
})
export default allReducers