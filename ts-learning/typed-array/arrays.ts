export {}

const arr: Array<any> = [1, 2]
arr.push(...['a', new Date()])
console.log(arr)

interface User {
  name: ''
  age: 0
}

const users: Array<string | number> = []

users.push(1, 'hello')
