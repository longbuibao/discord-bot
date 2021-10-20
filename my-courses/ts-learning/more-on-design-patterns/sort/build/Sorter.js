"use strict";
// interface Sortable {
//   length: number
//   swap(i: number, j: number): void
//   compare(i: number, j: number): boolean
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
var Sorter = /** @class */ (function () {
    function Sorter() {
    }
    Sorter.prototype.sort = function () {
        var length = this.length;
        for (var i = 0; i < length - 1; i++)
            for (var j = i + 1; j < length; j++) {
                if (this.compare(i, j)) {
                    this.swap(i, j);
                }
            }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
