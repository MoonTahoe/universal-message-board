import { CONNECTED, DISCONNECTED } from '../../constants'

const connection = (state={ connected: false }, action) => {
    switch (action.type) {
        case CONNECTED :
            return {
                connected: true,
                socketID: action.id
            }
        case DISCONNECTED :
        default :
            return state
    }
}

module.exports = connection;