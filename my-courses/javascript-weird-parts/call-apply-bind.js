const person = {
    firstName: 'bui',
    lastName: 'long',
    getFullName: function() {
        return this.firstName + this.lastName
    }
}

const logName = function(lang1, lang2) {
    console.log('Logged: ', this.getFullName())
    console.log(lang1, lang2)
}

const logPersonName = logName.bind(person, 'en')

logPersonName('jp')

logName.call({
    firstName: '????',
    lastName: '>>>>',
    getFullName: function() {
        return this.firstName + this.lastName
    }
}, 'en', 'vi')