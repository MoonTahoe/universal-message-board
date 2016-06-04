import { connect } from 'react-redux'
import { MessageList } from '../ui'
import { sendMessage } from '../../actions'

const mapStateToProps = state =>
    ({
        messages: state.messages
    })

const mapDispatchToProps = dispatch =>
    ({
        onMessage: message => dispatch(sendMessage(message))
    })

module.exports = connect(mapStateToProps, mapDispatchToProps)(MessageList)