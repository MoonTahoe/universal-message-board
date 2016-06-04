import http from 'http'
import app from './app'

const port = process.env.PORT || 3000
const server = http.createServer(app)

app.set('port', port)
server.listen(port)

server.on('listening', () => {
  console.log(`running - 'http://localhost:${port}'`)
})