export {}
class Stuff {
  constructor(public stuff: string) {}
  sayStuff = () => {
    this.stuff = 'new Hamer'
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
longbui.say()
longbui.a.sayStuff()
