class Human {
  city: string = 'AN KHE'
  yo() {}
}
const human: Array<Human> = []

const promise: Promise<string> = new Promise((resolve, reject) => {
  resolve('')
  reject()
})

promise.then((value) => value.split(''))

function merge<T, Z>(objA: T, objB: Z) {
  return Object.assign(objA, objB)
}

const ob = merge(new Human(), { age: 12 })
console.log(ob.city)
