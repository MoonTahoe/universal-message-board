const pluck = (field, arr) => arr.map(x => x[field])

const max = arr => arr
    .filter(n => typeof n === 'number')
    .reduce((p, n) => (n > p) ? n : p, 0)

module.exports = {max, pluck}