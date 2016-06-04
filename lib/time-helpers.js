//
//  TODO: Improve these variables,functions over values
//

const second = 1000,
    minute = 60 * second,
    hour = 60 * minute,
    day = 24 * hour,
    timeframe = {second, minute, hour, day}

//
//  TODO: Break into smaller functions and compose
//

const checkDate = (diff, tf, under) => {
    let result
    if (diff / timeframe[tf] < under) {
        result = Math.floor(diff / timeframe[tf])
        return result + " " + tf + ((result > 1) ? "s" : "")
    }
}

const ago = (timestamp, now = new Date().toString()) => {

    let diff, result
    timestamp = new Date(timestamp)
    now = new Date(now)
    diff = now - timestamp

    //
    //  TODO: Improve this composition with a functional approach
    //

    result = checkDate(diff,"second",60)
    if (result) return "less than a minute"

    result = checkDate(diff,"minute",60)
    if (result) return result;

    result = checkDate(diff,"hour",24)
    if (result) return result;

    result = checkDate(diff,"day",30)
    if (result) return result

    return `${timestamp.getMonth() + 1}/${timestamp.getDate()}/${timestamp.getFullYear()}`

}


module.exports = {ago}