"use strict";
exports.__esModule = true;
var Stuff = /** @class */ (function () {
    function Stuff(stuff) {
        this.stuff = stuff;
    }
    Stuff.prototype.sayStuff = function () {
        console.log(this);
        console.log(this.stuff);
    };
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
var sayStuff = longbui.a.sayStuff;
sayStuff();
