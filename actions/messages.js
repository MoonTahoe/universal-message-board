import { MESSAGE, SEND_MESSAGE } from '../constants'
import { send } from './socket'

const sendMessage = message => dispatch => {
    send({
        type: MESSAGE,
        message
    })
    dispatch({ type: SEND_MESSAGE })
}


module.exports = {sendMessage}