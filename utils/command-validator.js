const commandValidator = (commandString) => {
    if (!commandString) return null
    const regex = /\d\d:\d\d/i
    const time = commandString.match(regex)

    if (time) {
        const todo = commandString.replace(time[0], '').trim()
        if (todo)
            return {
                time: time[0],
                todo
            }
        return null
    }
    return null
}

module.exports = commandValidator