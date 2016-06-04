import thunk from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { connection, connections, messages, errors } from './reducers'

const clientLogger = store => next => action => {
    let result
    console.groupCollapsed("dispatching client action", action.type)
    console.log('prev state', store.getState())
    console.log('action', action)
    result = next(action)
    console.log('next state', store.getState())
    console.groupEnd()
    return result
};

const serverLogger = store => next => action => {
    let result
    console.log('dispatching server action', action)
    result = next(action)
    console.log('next state', store.getState())
    return result
};

module.exports = (logging = false, server = false, initialState = {}) => {
    const middleware = (!logging) ? [thunk] : [thunk, (server) ? serverLogger : clientLogger]
    const reducers = (server) ? {connections, messages} : {connection, messages, errors}
    return applyMiddleware(...middleware)(createStore)(
        combineReducers(reducers),
        initialState
    )
}