import { MESSAGE } from '../../constants'

const firstLetterFromEachWord = string => string.split(" ").map(w=>w[0].toLowerCase()).join("")

const message = getID => action => {
    if (action.type === MESSAGE) {
        return {
            ...action,
            timestamp: new Date().toString(),
            id: firstLetterFromEachWord(action.message) + getID()
        }
    } else {
        return action
    }
}

module.exports = message