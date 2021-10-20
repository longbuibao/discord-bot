"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
var CharactersCollection = /** @class */ (function () {
    function CharactersCollection(data) {
        this.data = data;
    }
    Object.defineProperty(CharactersCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    CharactersCollection.prototype.compare = function (i, j) {
        return this.data[i].toLowerCase() > this.data[j].toLowerCase();
    };
    CharactersCollection.prototype.swap = function (i, j) {
        var characters = this.data.split('');
        var temp = characters[i];
        characters[i] = characters[j];
        characters[j] = temp;
        this.data = characters.join('');
    };
    return CharactersCollection;
}());
exports.CharactersCollection = CharactersCollection;
