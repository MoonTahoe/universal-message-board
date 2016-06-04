import { MESSAGE } from '../../constants'

const message = (state = {}, action) => {
    switch (action.type) {
        case MESSAGE :
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