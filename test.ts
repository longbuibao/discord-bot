export {}
class Stuff {
  constructor(public stuff: string) {}
  sayStuff() {
    console.log(this)
    console.log(this.stuff)
  }
}

class Person {
  constructor(public name: string) {}

  a: Stuff = new Stuff('hamer')

  say() {
    console.log(this.name)
    this.a.sayStuff()
  }
}

const longbui = new Person('longbui')

const sayStuff = longbui.a.sayStuff
sayStuff()
