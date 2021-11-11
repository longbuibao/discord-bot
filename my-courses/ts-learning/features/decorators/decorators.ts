class Boat {
  color: string = 'red'

  get formattedColor(): string {
    return `this boats color is ${this.color}`
  }

  @logError
  pilot(): void {
    throw new Error('YTO')
    console.log('swish')
  }
}

function logError(target: any, key: string, desc: PropertyDescriptor): void {
  console.log(desc)
}
