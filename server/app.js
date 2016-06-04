import React from 'react'
import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { App } from '../components'
import storeFactory from '../store'

global.React = React

//
//  TODO: Get initial state data from json
//

const serverStore = storeFactory(true, true)
console.log('server store initialized', serverStore.getState())

const page = (html, state) => `
<!DOCTYPE html>
<html>
    <head>
        <meta name="viewport" content="minimum-scale=1.0, width=device-width, maximum-scale=1.0, user-scalable=no" />
        <meta charset="utf-8">
        <title>Redux Color Wall</title>
    </head>
    <body>
        <div id="react-container">${html}</div>
        <script>
            window.__INITIAL_STATE__ = ${JSON.stringify(state)}
        </script>
        <script src="/bundle.min.js"></script>
    </body>
</html>
`

module.exports = express()
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({extended: false}))
    .use((req, res, next) => {
        console.log(`${req.method} request for '${req.url}'`)
        next()
    })
    .use(express.static(path.join(__dirname, '../dist')))
    .use((req, res) => {

        const store = storeFactory(true, false, {
            messages: serverStore.getState().messages
        });

        const html = renderToString(
            <Provider store={store}>
                <App />
            </Provider>
        )

        res.status(200).send(page(html, store.getState()))
    })