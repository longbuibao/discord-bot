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

// console.log(User.__proto__)

const Long = new User()

// for (const key in Long) console.log(key)

// console.log(Long)
console.log(Long.__proto__)