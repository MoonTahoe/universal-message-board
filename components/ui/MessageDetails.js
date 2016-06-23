import { Link } from 'react-router'

const MessageDetails = ({message, routeParams}) =>
    (!message) ?
        <h1>Message '{routeParams.id}' Not Found</h1> :
        <div className="message-details">
            <span>{message.timestamp}</span>
            <span><Link to="/">&lt; back to messages</Link></span>
            <div>
                <span>{message.message}</span>
            </div>
        </div>

module.exports = MessageDetails