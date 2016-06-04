import { ago } from '../../lib'

const TimeAgo = ({timestamp}) => {
    return <div className="time-ago">
        { ago(timestamp) } ago
    </div>
}

module.exports = TimeAgo