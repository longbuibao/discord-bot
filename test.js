"use strict";
exports.__esModule = true;
var Stuff = /** @class */ (function () {
    function Stuff(stuff) {
        var _this = this;
        this.stuff = stuff;
        this.sayStuff = function () {
            _this.stuff = 'new Hamer';
            console.log(_this.stuff);
        };
    }
    return Stuff;
}());
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
        this.a = new Stuff('hamer');
    }
    Person.prototype.say = function () {
        console.log(this.name);
        this.a.sayStuff();
    };
    return Person;
}());
var longbui = new Person('longbui');
longbui.say();
longbui.a.sayStuff();
