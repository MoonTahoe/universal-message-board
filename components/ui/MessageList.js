import MessageInfo from './MessageInfo'

let input

const MessageList = ({ messages=[], onMessage=f=>f }) =>
    <form className='message-list' action="/" method="POST" onSubmit={e => e.preventDefault()}>
        <p>{messages.length} messages</p>
        <ul>
            {messages.map((m, i) => <MessageInfo key={i} {...m} />)}
        </ul>
        <input ref={i=> input = i}
               type="text"
               name="newMessage"
               onKeyDown={e=>{
                if (e.which===13) {
                    onMessage(input.value)
                    input.value = ''
                }
               }}/>
    </form>

module.exports = MessageList