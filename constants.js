import deepFreeze from 'deep-freeze'

const constants = {
    CONNECTED: 'CONNECTED',
    DISCONNECTED: 'DISCONNECTED',
    SEND_MESSAGE: 'SEND_MESSAGE',
    MESSAGE_RECEIVED: 'MESSAGE_RECEIVED',
    ERROR: 'ERROR',
    CLEAR_ERROR: 'CLEAR_ERROR'
}

module.exports = deepFreeze(constants)