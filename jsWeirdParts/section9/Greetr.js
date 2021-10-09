(function(global, $) {

    const Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language)
    }

    const supportedLanguages = ['en', 'es']

    Greetr.prototype = {}

    Greetr.init = function(firstName, lastName, language) {
        this.firstName = firstName || ''
        this.lastName = lastName || ''
        this.language = language || 'en'
    }

    Greetr.init.prototype = Greetr.prototype

    global.Greetr = global.G$ = Greetr

})(window, jQuery)