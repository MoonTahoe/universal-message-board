import React from 'react'
import http from 'http'
import app from './app'
import socketIO from 'socket.io'
import { sockets } from './sockets'

global.React = React

const port = process.env.PORT || 3000
const server = http.createServer(app)
const io = require('socket.io').listen(server)

app.set('port', port)
server.listen(port)

sockets(io, app.get('store'))

server.on('listening', () => {
  console.log(`running - 'http://localhost:${port}'`)
})