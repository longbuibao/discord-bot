function AutoBind(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value as Function
<<<<<<< Updated upstream
  const adjeDescriptor: PropertyDescriptor = {
=======
  const newDescriptor: PropertyDescriptor = {
>>>>>>> Stashed changes
    configurable: true,
    enumerable: false,
    get() {
      return originalMethod.bind(this)
    },
  }
<<<<<<< Updated upstream
  return adjeDescriptor
=======
  return newDescriptor
>>>>>>> Stashed changes
}

class ProjectInput {
  templateElement: HTMLTemplateElement
  hostElement: HTMLDivElement
  element: HTMLFormElement
  titleInputElement: HTMLInputElement
  descriptionInputElement: HTMLInputElement
  peopleInputElement: HTMLInputElement

  constructor() {
    this.templateElement = document.getElementById(
      'project-input'
    ) as HTMLTemplateElement
    this.hostElement = document.getElementById('app') as HTMLDivElement

    const importedNode = document.importNode(this.templateElement.content, true)
    this.element = importedNode.firstElementChild as HTMLFormElement
    this.element.id = 'user-input'

    this.titleInputElement = this.element.querySelector(
      '#title'
    ) as HTMLInputElement
    this.descriptionInputElement = this.element.querySelector(
      '#description'
    ) as HTMLInputElement
    this.peopleInputElement = this.element.querySelector(
      '#people'
    ) as HTMLInputElement

    this.attach()
    this.configure()
  }
  @AutoBind
  private submitHandler(event: Event) {
    event.preventDefault()

    console.log(this.titleInputElement.value)
  }

  private configure() {
    this.element.addEventListener('submit', this.submitHandler)
  }

  private attach() {
    this.hostElement.insertAdjacentElement('afterbegin', this.element)
  }
}

const projectInput = new ProjectInput()
