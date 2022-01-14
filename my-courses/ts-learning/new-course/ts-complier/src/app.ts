interface Validatable {
  value: string | number
  required?: boolean
  minLength?: number
  maxLength?: number
  min?: number
  max?: number
}

function validate(validatable: Validatable): boolean {
  let isValid = true

  if (validatable.required) {
    isValid = isValid && validatable.value.toString().length !== 0
  }

  if (validatable.minLength != null && typeof validatable.value === 'string') {
    isValid = isValid && validatable.value.length >= validatable.minLength
  }

  if (validatable.maxLength != null && typeof validatable.value === 'string') {
    isValid = isValid && validatable.value.length <= validatable.maxLength
  }

  if (validatable.min != null && typeof validatable.value === 'number') {
    isValid = isValid && validatable.value >= validatable.min
  }

  if (validatable.max != null && typeof validatable.value === 'number') {
    isValid = isValid && validatable.value <= validatable.max
  }

  return isValid
}

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

enum ProjectStatus {
  Active,
  Finished,
}

class Project {
  constructor(
    public id: string,
    public title: string,
    public people: number,
    public status: ProjectStatus
  ) {}
}

type Listener = (items: Project[]) => void

class ProjectList {
  templateElement: HTMLTemplateElement
  hostElement: HTMLDivElement
  element: HTMLElement
  assignedProjects: any[]

  constructor(private type: 'active' | 'finished') {
    this.templateElement = document.getElementById(
      'project-list'
    ) as HTMLTemplateElement
    this.hostElement = document.getElementById('app') as HTMLDivElement

    this.assignedProjects = []

    const importedNode = document.importNode(this.templateElement.content, true)
    this.element = importedNode.firstElementChild as HTMLElement
    this.element.id = `${this.type}-projects`

    projectState.addListener((projects: Project[]) => {
      this.assignedProjects = projects
      this.renderProjects()
    })

    this.attach()
    this.renderContent()
  }

  private renderProjects() {
    const listEl = document.getElementById(
      `${this.type}-projects-list`
    ) as HTMLUListElement

    for (const prjItem of this.assignedProjects) {
      const listItem = document.createElement('li')
      listItem.textContent = prjItem.title
      listEl?.appendChild(listItem)
    }
  }

  private renderContent() {
    const listId = `${this.type}-projects-list`
    this.element.querySelector('ul')!.id = listId
    this.element.querySelector('h2')!.textContent =
      this.type.toUpperCase() + `PROJECTS`
  }

  private attach() {
    this.hostElement.insertAdjacentElement('beforeend', this.element)
  }
}

class ProjectState {
  private project: any[] = []
  private listeners: Listener[] = []
  private static instance: ProjectState

  private constructor() {}

  static getInstance() {
    if (this.instance) return this.instance

    this.instance = new ProjectState()
    return this.instance
  }

  addListener(listeners: Listener) {
    this.listeners.push(listeners)
  }

  addProject(title: string, description: string, numOfPeople: number) {
    const newProject = new Project(
      Math.random().toString(),
      title,
      numOfPeople,
      ProjectStatus.Active
    )

    this.project.push(newProject)

    for (const iterator of this.listeners) {
      iterator(this.project.slice())
    }
  }
}

const projectState = ProjectState.getInstance()

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
    const userInput = this.gatherUserInput()
    if (Array.isArray(userInput)) {
      const [title, desc, people] = userInput
      projectState.addProject(title, desc, people)
    }
    this.clearInputs()
  }

  private configure() {
    this.element.addEventListener('submit', this.submitHandler)
  }

  private attach() {
    this.hostElement.insertAdjacentElement('afterbegin', this.element)
  }

  private gatherUserInput(): [string, string, number] | void {
    const enteredTitle = this.titleInputElement.value
    const enteredDescription = this.descriptionInputElement.value
    const enteredPeople = this.peopleInputElement.value

    const titleValidatabele: Validatable = {
      value: enteredTitle,
      required: true,
    }

    const descriptionValidatable: Validatable = {
      value: enteredDescription,
      required: true,
      minLength: 5,
    }

    const peopleValidatable: Validatable = {
      value: +enteredPeople,
      required: true,
      min: 1,
    }

    if (
      !validate(titleValidatabele) ||
      !validate(descriptionValidatable) ||
      !validate(peopleValidatable)
    ) {
      alert('Invalid input')
      return
    } else return [enteredTitle, enteredDescription, +enteredPeople]
  }

  private clearInputs() {
    this.titleInputElement.value = ''
    this.descriptionInputElement.value = ''
    this.peopleInputElement.value = ''
  }
}

const projectInput = new ProjectInput()
const activeProjectList = new ProjectList('active')
const finishedProjectList = new ProjectList('finished')
