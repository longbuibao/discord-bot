const mapForEach = (arr, callback) => {
    const res = []
    for (let i = 0; i < arr.length; i++) {
        res.push(
            callback(arr[i])
        )
    }
    return res
}

const greaterSomeValue = ((value) => {
    return (function(value, item) {
        return item > value
    }).bind(null, value)
})

const arr = [-2, 2, 3, 4]
console.log(mapForEach(arr, greaterSomeValue(-1)))