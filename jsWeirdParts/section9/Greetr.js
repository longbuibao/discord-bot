(function(global, $) {

    const Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language)
    }

    const supportedLanguages = ['en', 'es']

    var greeting = {
        en: 'hello',
        es: 'hola'
    }

    var formalGreeting = {
        en: 'greetings',
        es: 'saludos'
    }

    var loggedMessage = {
        en: 'logged in',
        es: 'inicio sesion'
    }

    Greetr.prototype = {
        fullName: function() {
            return this.firstName + ' ' + this.lastName
        },
        validate: function() {
            if (supportedLanguages.indexOf(this.language) === -1)
                throw "invalid language"
        },
        greeting: function() {
            return greeting[this.language] + ' ' + this.firstName
        },
        formalGreeting: function() {
            return formalGreeting[this.language] + ' ' + this.fullName()
        },
        formal: function(formal) {
            let msg
            if (formal) {
                msg = this.formalGreeting()
            } else msg = this.greeting()
            if (console) {
                console.log(msg)
            }
            return this
        },
        log: function() {
            if (console) console.log(loggedMessage[this.language]) + ' ' + this.fullName()
            return this
        },
        setLang: function(lang) {
            this.language = lang
            this.validate()
            return this
        }
    }

    Greetr.init = function(firstName, lastName, language) {
        this.firstName = firstName || ''
        this.lastName = lastName || ''
        this.language = language || 'en'
    }

    Greetr.init.prototype = Greetr.prototype

    global.Greetr = global.G$ = Greetr

})(window, jQuery)