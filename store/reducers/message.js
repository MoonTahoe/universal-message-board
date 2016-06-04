import { SEND_MESSAGE, MESSAGE_RECEIVED } from '../../constants'

const message = (state = {}, action) => {
    switch (action.type) {
        case SEND_MESSAGE :
            return {
                message: action.message
            }
        case MESSAGE_RECEIVED :
            return {
                id: action.id,
                timestamp: action.timestamp,
                message: action.message
            }
        default :
            return state
    }
}

module.exports = message