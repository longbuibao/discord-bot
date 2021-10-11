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


// function User() {
//     this.name = 'long'
//     this.age = 15
// }

// console.log(User.__proto__)

// console.log(User instanceof Object)
// console.log(User instanceof Function)

const a = [1, 2, 4, 3, 5]
const b = [1, 3, 4]

const c = a.concat(...b)

const d = a.reduce((res, cur) => {
    if (b.indexOf(cur) === -1) {
        return res.concat(cur)
    }
    return res
}, [])
console.log(d)