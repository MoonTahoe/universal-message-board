import { SEND_MESSAGE, MESSAGE_RECEIVED } from '../../constants'
import message from './message'

const messages = (state=[], action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return [
                ...state,
                message({}, action)
            ]
        case MESSAGE_RECEIVED:
            return openMessages.map(m => (!m.id && m.message === action.message) ? message(m, action) : m)
        default :
            return state
    }
}

module.exports = messages