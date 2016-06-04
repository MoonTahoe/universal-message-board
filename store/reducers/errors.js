import { ERROR, CLEAR_ERROR } from '../../constants'

const errors = (state = [], action) => {
    switch (action.type) {
        case ERROR :
            return [
                ...state,
                action.error
            ]
        case CLEAR_ERROR :
            return state.filter(e=>e !== action.error)
        default:
            return state
    }
}

module.exports = errors