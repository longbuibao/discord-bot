// @classDecorator
class Boat {
  //   @testDecorator
  color: string = 'red'

  // @testDecorator
  formattedColor(): string {
    return `this boats color is ${this.color}`
  }

  //   @logError('OH SHIT')
  pilot(speed: string): void {
    if (speed === 'fast') console.log('swish')
    else console.log('nothing')
  }
}

console.log(Boat.prototype)

// function classDecorator(constructor: typeof Boat) {
//   console.log(constructor)
// }

// function parameterDecorator(target: any, key: string, index: number) {
//   console.log(key, index)
// }

// function testDecorator(target: any, key: string) {
//   console.log(arguments)
// }

// function logError(errorMessage: string) {
//   return function (target: any, key: string, desc: PropertyDescriptor): void {
//     const method = desc.value

//     desc.value = function () {
//       try {
//         method()
//       } catch (error) {
//         console.log(errorMessage)
//       }
//     }
//   }
// }

// new Boat().pilot()
