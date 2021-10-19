"use strict";
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        var length = this.collection.length;
        for (var i = 0; i < length - 1; i++)
            for (var j = i + 1; j < length; j++) {
                //type guard
                if (this.collection instanceof Array) {
                    if (this.collection[i] > this.collection[j]) {
                        var temp = this.collection[i];
                        this.collection[i] = this.collection[j];
                        this.collection[j] = temp;
                    }
                }
            }
    };
    return Sorter;
}());
var sorter = new Sorter([1, -1, -2, 3, 5, -11]);
sorter.sort();
console.log(sorter.collection);
