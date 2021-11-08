import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'


const reducers = combineReducers({
    
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store

export type AppStoreType = ReturnType<typeof reducers>