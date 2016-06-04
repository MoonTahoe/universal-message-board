import deepFreeze from 'deep-freeze'

const constants = {
    CONNECTED: 'CONNECTED',
    DISCONNECTED: 'DISCONNECTED',
    MESSAGE: 'MESSAGE',
    ERROR: 'ERROR',
    CLEAR_ERROR: 'CLEAR_ERROR',
    SEND_MESSAGE: 'SEND_MESSAGE'
}

module.exports = deepFreeze(constants)