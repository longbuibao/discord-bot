function Logger(target: any, propertyName: string | Symbol) {
  console.log(target)
  console.log(propertyName)
  console.log(arguments)
}

function Log2(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log('prop decorator')
  console.log(target)
  console.log(name)
  console.log(descriptor)
}

function LogParams(
  target: Object,
  propertyKey: string | symbol,
  parameterIndex: number
) {
  console.log(target)
  console.log(propertyKey)
  console.log(parameterIndex)
}

class Person {
  // @Logger
  name: string = 'long bui bao'

  // @Log2
  set setName(name: string) {
    this.name = name
  }

  get getName(): string {
    return this.name
  }

  sayHi(@LogParams name: string, @LogParams yo: string) {
    console.log('Hi there')
  }

  constructor() {
    console.log('creating person object...')
  }
}
