import { CONNECTED, DISCONNECTED, MESSAGE } from '../constants'
import { message as produceMessage } from './producers'
import { compose } from 'redux'
import fs from 'fs'
import path from 'path'

const sendAll = io => action => {
    io.sockets.emit('dispatch', action)
    return action
}
const dispatch = store => action => {
    store.dispatch(action)
    return action
}
const save = (key, file, getState) => action => {
    fs.writeFile(path.join(__dirname, file), JSON.stringify(getState()[key]))
    return action
}

let handleAction = f => f

const socketAction = action => handleAction(action)

const sockets = (io, store) => {

    let nextID = store.getState().messages.map(m=>m.id).reduce((max, id) => (id >= max) ? id : max, 0) + 1

    handleAction = compose(
        save('messages', '../data/messages.json', store.getState),
        sendAll(io),
        dispatch(store),
        produceMessage(() => nextID++)
    )

    io.sockets.on('connection', (socket) => {
        let { id } = socket

        id = id.replace('/#', '')

        store.dispatch({type: CONNECTED, id})

        socket.once('disconnect', () => {
            id = id.replace('/#', '')
            console.log(`socket disconnected: ${id}`)
            store.dispatch({type: DISCONNECTED, id})
            socket.disconnect()
        })

        socket.on('action', socketAction)

    })

}

module.exports = {sockets, socketAction}