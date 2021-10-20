"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
var Sorter_1 = require("./Sorter");
var Node = /** @class */ (function () {
    function Node(data) {
        this.data = data;
        this.next = null;
    }
    return Node;
}());
var LinkedList = /** @class */ (function (_super) {
    __extends(LinkedList, _super);
    function LinkedList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.head = null;
        return _this;
    }
    Object.defineProperty(LinkedList.prototype, "length", {
        get: function () {
            if (!this.head)
                return 0;
            var count = 1;
            var tail = this.head;
            while (tail.next) {
                ++count;
                tail = tail.next;
            }
            return count;
        },
        enumerable: false,
        configurable: true
    });
    LinkedList.prototype.add = function (data) {
        var node = new Node(data);
        if (!this.head) {
            this.head = node;
            return;
        }
        var tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }
        tail.next = node;
    };
    LinkedList.prototype.at = function (index) {
        var length = this.length;
        if (index > length - 1 || index < 0 || !this.head)
            return null;
        var count = 0;
        var tail = this.head;
        while (count < index && tail.next) {
            tail = tail.next;
            count++;
        }
        return tail;
    };
    LinkedList.prototype.checkList = function (i, j) {
        if (!this.head)
            throw 'Nothing in this list';
        var iNode = this.at(i);
        var jNode = this.at(j);
        if (!iNode || !jNode)
            throw 'Your input may out of range';
    };
    LinkedList.prototype.compare = function (i, j) {
        this.checkList(i, j);
        var iNode = this.at(i);
        var jNode = this.at(j);
        //@ts-ignore
        return iNode.data > jNode.data;
    };
    LinkedList.prototype.swap = function (i, j) {
        this.checkList(i, j);
        var iNode = this.at(i);
        var jNode = this.at(j);
        //@ts-ignore
        var temp = iNode.data;
        //@ts-ignore
        iNode.data = jNode.data;
        //@ts-ignore
        jNode.data = temp;
    };
    LinkedList.prototype.print = function () {
        var result = [];
        var temp = this.head;
        while (temp) {
            result.push(temp.data);
            temp = temp.next;
        }
        console.log(result.join(' => '));
    };
    return LinkedList;
}(Sorter_1.Sorter));
exports.LinkedList = LinkedList;
