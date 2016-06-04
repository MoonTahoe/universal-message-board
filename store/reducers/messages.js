import { MESSAGE } from '../../constants'
import message from './message'

const messages = (state=[], action) => {
    switch (action.type) {
        case MESSAGE :
            return [
                ...state,
                message({}, action)
            ]
        default :
            return state
    }
}

module.exports = messages