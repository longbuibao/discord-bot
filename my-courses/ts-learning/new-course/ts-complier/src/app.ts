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

// const p = new Print()
// const button = document.querySelector('button')
// button?.addEventListener('click', p.showMessage)

class Course {
  title: string
  price: number
  constructor(title: string, price: number) {
    this.title = title
    this.price = price
  }
}

const courseFrom = document.querySelector('form')
courseFrom?.addEventListener('submit', (e) => {
  e.preventDefault()
  const titleElement = document.getElementById('title') as HTMLInputElement
  const priceElement = document.getElementById('price') as HTMLInputElement

  const title = titleElement.value
  const price = +priceElement.value

  const course = new Course(title, price)
  console.log(course)
})
