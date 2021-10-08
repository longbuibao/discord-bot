const height = 7
const result = []

const mulNumber = (n) => {
    const arr = []
    for (let i = 1; i <= n; i++) {
        arr.push(i)
    }

    return arr.reduce((pre, cur) => {
        return pre + Math.pow(10, cur)
    }, 1)
}

// console.log(mulNumber(7))

for (let index = 0; index <= height; index++) {
    result.push(mulNumber(index) * mulNumber(index))
}

for (let index = 0; index < result.length; index++) {
    const element = result[index];
    console.log(' '.repeat(result.length - index) + element)
}

// console.log(result)