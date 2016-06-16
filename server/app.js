import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { App } from '../components'
import storeFactory from '../store'
import { match, RouterContext } from 'react-router'
import routes from '../routes'
import fs from 'fs'

let messages = []

if (!fs.existsSync(path.join(__dirname, '../data'))) {
    fs.mkdirSync(path.join(__dirname, '../data'))
}

if (fs.existsSync(path.join(__dirname,'../data/messages.json'))) {
    messages = require('../data/messages')
}

const defaultStyles = fs.readFileSync('./dist/bundle.min.css')
const serverStore = storeFactory(true, true, { messages })
console.log('server store initialized', serverStore.getState())

const page = (html, state, css=defaultStyles) => `
<!DOCTYPE html>
<html>
    <head>
        <meta name="viewport" content="minimum-scale=1.0, width=device-width, maximum-scale=1.0, user-scalable=no" />
        <meta charset="utf-8">
        <title>Redux Color Wall</title>
        <style>${css}</style>
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
    .set('store', serverStore)
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

        match({routes, location: req.url}, (error, redirectLocation, renderProps) => {
            if (error) {
                res.status(500).send(error.message)
            } else if (redirectLocation) {
                res.redirect(302, redirectLocation.search)
            } else if (renderProps) {
                let html = renderToString(
                    <Provider store={store}>
                        <RouterContext {...renderProps} />
                    </Provider>
                )
                res.status(200).send(page(html, store.getState()))
            } else {
                res.status(404).send('Not found')
            }
        })

    })