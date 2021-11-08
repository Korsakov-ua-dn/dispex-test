import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {addressReducer} from "./address-reducer"

const reducers = combineReducers({
    address: addressReducer,
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store