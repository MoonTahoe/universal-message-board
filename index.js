import React from 'react'
import { Provider } from 'react-redux'
import storeFactory from './store'
import { render } from 'react-dom'
import { App } from './components'
import '!style!css!sass!postcss-loader!./stylesheets/APP.scss'

window.React = React
const store = window.store = storeFactory(true, false, window.__INITIAL_STATE__)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('react-container'))
