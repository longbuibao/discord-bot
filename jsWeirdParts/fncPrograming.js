const mapForEach = (arr, callback) => {
    const res = []
    for (let i = 0; i < arr.length; i++) {
        res.push(
            callback(arr[i])
        )
    }
    return res
}

const greaterSomeValue = (value, item) => {
    return item > value
}

const arr = [1, 2, 3, 4]
console.log(mapForEach(arr, greaterSomeValue.bind(null, -1)))