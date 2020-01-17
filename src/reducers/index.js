import {combineReducers} from 'redux'
import loggedReducer from './isLogged'
import redirect from './redirect'
import followerArray from './followerArray'
const allReducers = combineReducers({
    isLogged : loggedReducer,
    redirect : redirect,
    followerArray : followerArray

})
export default allReducers