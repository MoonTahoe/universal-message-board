import React from 'react'
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router'
import { App, Messages, Message, Whoops404} from './components'

const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Messages}/>
            <Route path="/:id" component={Message}/>
            <Route path="*" component={Whoops404} />
        </Route>
    </Router>
)

module.exports = routes