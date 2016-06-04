let input

const MessageList = ({ messages=[], onMessage=f=>f }) =>
    <div className='message-list'>
        <p>{messages.length} messages</p>
        <ul>
            {messages.map((m, i) => <li key={i}>{m.message}</li>)}
        </ul>
        <input ref={i=> input = i}
               type="text"
               onKeyDown={e=>{
                if (e.which===13) {
                    onMessage(input.value)
                    input.value = ''
                }
               }}/>
    </div>

module.exports = MessageList