import { CONNECTED, DISCONNECTED } from '../../constants'
import connection from './connection'

const connections = (state=[], action) => {
    switch (action.type) {
        case CONNECTED :
            return [
                ...state,
                connection({}, action)
            ]
        case DISCONNECTED :
            return state.filter(c=> c.socketID !== action.id)
        default :
            return state
    }
}

module.exports = connections