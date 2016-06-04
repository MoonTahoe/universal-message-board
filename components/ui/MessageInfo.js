import TimeAgo from './TimeAgo'
import { Link } from 'react-router'

const MessageInfo = ({ id, message, timestamp}) =>
    <li>
        <Link to={`/${id}`}>
            <TimeAgo timestamp={timestamp} />
            {message}
        </Link>
    </li>

module.exports = MessageInfo