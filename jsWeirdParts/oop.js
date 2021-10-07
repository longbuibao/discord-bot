// const person = {
//     name: 'defaul',
//     age: 15,
//     getNameAndAge: function() {
//         console.log(this)
//         return this.name + ' ' + this.age
//     }
// }

// const john = {
//     name: 'john',
//     age: 31
// }

// // never do this __proto__, for demo purpose only

// john.__proto__ = person

// console.log(john.getNameAndAge())
// console.log(john.name)


// function greeting() {
//     console.log(this.name)
// }

// greeting.call = function() {
//     console.log('this call is overrided')
// }

// greeting.call(john);

// const obj = {
//     name: 'png',
//     text: 'hello'
// }

// for (const i in obj) {
//     console.log(i)
//     console.log(obj.__proto__)
// }


function User() {
    this.name = 'long'
    this.age = 15
}

User.prototype.getName = function() {
    return this.name
}

const Long = new User()

console.log(Long)
console.log(Long.__proto__)


class Human {
    constructor() {
        this.name = 'I AM HUMAN '
        this.age = 0
    }
    greet() {
        console.log(this.name + this.age)
    }

}

class Employee extends Human {
    constructor() {
        super()
        this.id = 12
    }
}

const longbui = new Employee()
console.log(longbui.__proto__)