function AutoBind(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value as Function
  const adjeDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      return originalMethod.bind(this)
    },
  }
  return adjeDescriptor
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
