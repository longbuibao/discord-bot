module.exports = (argsString, name) => {
    const agrsList = argsString.split(' ')
    if (agrsList[0] === 'random')
        console.log(...name)
}