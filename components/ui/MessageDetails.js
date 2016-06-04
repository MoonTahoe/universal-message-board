const MessageDetails = ({message, routeParams}) =>
    (!message) ?
        <h1>Message '{routeParams.id}' Not Found</h1> :
        <h1>{message.id} - {message.message}</h1>

module.exports = MessageDetails