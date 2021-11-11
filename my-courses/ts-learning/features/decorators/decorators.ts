class Boat {
  color: string = 'red'

  get formattedColor(): string {
    return `this boats color is ${this.color}`
  }

  @logError('OH SHIT')
  pilot(): void {
    throw new Error('WHAT THE FUCK')
  }
}

function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value

    desc.value = function () {
      try {
        method()
      } catch (error) {
        console.log(errorMessage)
      }
    }
  }
}

new Boat().pilot()
