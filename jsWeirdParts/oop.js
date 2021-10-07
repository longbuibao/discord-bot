const person = {
    name: 'defaul',
    age: 15,
    getNameAndAge: function() {
        console.log(this)
        return this.name + ' ' + this.age
    }
}

const john = {
    name: 'john',
    age: 31
}

// never do this __proto__, for demo purpose only

john.__proto__ = person

console.log(john.getNameAndAge())
console.log(john.name)


function greeting() {
    console.log(this.name)
}

greeting.call = function() {
    console.log('this call is overrided')
}

greeting.call(john);