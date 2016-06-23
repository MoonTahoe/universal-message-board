import { ago } from '../../lib'

const TimeAgo = ({timestamp}) => {
    return <div className="time-ago">
        { ago(timestamp) }
    </div>
}

module.exports = TimeAgo