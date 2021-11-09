import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { addressReducer } from "./address-reducer"
import { clientReducer } from './client-reducer'

const reducers = combineReducers({
    address: addressReducer,
    client: clientReducer,
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store