function AutoBind(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value as Function
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      // A function which serves
      // as a getter for the property, or
      // undefined if there is no getter.
      // When the property is accessed, this function is called without arguments
      // and with this set to the object through which the property is accessed
      // (this may not be the object on which the property is defined due to inheritance).
      // The return value will be used as the value of the property. Defaults to undefined.
      return originalMethod.bind(this)
    },
  }
  return adjDescriptor
}

class Print {
  message = 'This is a message'

  @AutoBind
  showMessage() {
    console.log(this.message)
  }
}

const p = new Print()
const button = document.querySelector('button')
button?.addEventListener('click', p.showMessage)
