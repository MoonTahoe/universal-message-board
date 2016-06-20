import { MESSAGE } from '../../constants'

const messages = (state=[], action) => {
    switch (action.type) {
        case MESSAGE :
            return [
                ...state,
                {
                    id: action.id,
                    timestamp: action.timestamp,
                    message: action.message
                }
            ]
        default :
            return state
    }
}

module.exports = messages