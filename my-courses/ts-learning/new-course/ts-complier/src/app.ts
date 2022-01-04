function someDecorator<T extends { new (...arg: any[]): {} }>(target: T) {
  return class extends target {
    age: number = 12
    constructor(...arg: any[]) {
      super(...arg)
    }
  }
}

// function someDecorator(target: any) {
//   console.log(target)
// }

@someDecorator
class Person {
  name: string = 'long bui bao'
  print() {
    console.log(this.name)
  }
  constructor() {
    console.log('creating person object...')
  }
}

const person = new Person()
console.log(person)
