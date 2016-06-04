import { CONNECTED, DISCONNECTED } from '../constants'
import io from 'socket.io-client'

let socket

const connect = () => dispatch => {
    socket = io('/')
    socket.on('connect', () => dispatch({type: CONNECTED, id: socket.id}))
    socket.on('disconnect', () => dispatch({type: DISCONNECTED}))
    socket.on('dispatch', action => dispatch(action))
    window.socket = socket
}

const disconnect = () => dispatch => socket.disconnect()

const send = action =>
    (socket) ?
        socket.emit('action', action) :
        console.error(new Error(`socket not connected cannot send ${action.type} on the server`))

module.exports = {connect, disconnect, send}