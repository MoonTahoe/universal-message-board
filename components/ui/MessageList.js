import MessageInfo from './MessageInfo'

let input

const MessageList = ({ messages=[], onMessage=f=>f }) => {
    const dispMessages = [...messages].reverse()
    return (
        <form className='message-list' action="/" method="POST" onSubmit={e => e.preventDefault()}>
            <p>{dispMessages.length} messages</p>
            <ul>
                {dispMessages.map((m, i) => <MessageInfo key={i} {...m} />)}
            </ul>
            <input ref={i=> input = i}
                   type="text"
                   name="newMessage"
                   placeholder="add a new message..."
                   onKeyDown={e=>{
                if (e.which===13) {
                    onMessage(input.value)
                    input.value = ''
                }
               }}/>
        </form>
    )
}

module.exports = MessageList