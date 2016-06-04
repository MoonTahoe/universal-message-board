import { SEND_MESSAGE, MESSAGE } from '../../constants'

const sending = (state = false, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return true
        case MESSAGE :
        default :
            return false
    }
}

module.exports = sending