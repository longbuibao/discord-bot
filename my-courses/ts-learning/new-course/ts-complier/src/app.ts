interface Yo {
  name: string
}

class Department {
  static Pi = 1e2
  constructor(private name: string, private readonly id: string) {}
  sayName(this: Department) {
    console.log(`${this.name} has id of ${this.id}`)
  }
  static yo() {
    console.log(Department.Pi)
  }
}

class SingletonClass {
  private static instance: SingletonClass

  static getInstance(): SingletonClass {
    if (!SingletonClass.instance) {
      SingletonClass.instance = new SingletonClass()
      return SingletonClass.instance
    }
    return SingletonClass.instance
  }
}

const singleton1 = SingletonClass.getInstance()
const singleton2 = SingletonClass.getInstance()

console.log(singleton1 === singleton2)
