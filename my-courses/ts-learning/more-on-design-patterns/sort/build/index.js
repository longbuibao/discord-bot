"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CharactersCollection_1 = require("./CharactersCollection");
var Sorter_1 = require("./Sorter");
var charsCollection = new CharactersCollection_1.CharactersCollection('Xaayb');
var sorter = new Sorter_1.Sorter(charsCollection);
sorter.sort();
console.log(charsCollection.data);
