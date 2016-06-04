import thunk from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { } from './reducers'

const logger = store => next => action => {
    let result;
    console.groupCollapsed("dispatching", action.type);
    console.log('prev state', store.getState());
    console.log('action', action);
    result = next(action);
    console.log('next state', store.getState());
    console.groupEnd();
    return result;
};

module.exports = (logging = false, initialState={}) => {
    const middleware = (logging) ? [thunk, logger] : [thunk]

    return applyMiddleware(...middleware)(createStore)(
        combineReducers({colors, sort, loading}),
        initialState
    )
}