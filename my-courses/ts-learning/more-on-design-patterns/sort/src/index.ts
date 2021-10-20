import { NumbersCollection } from './NumbersCollection'
import { Sorter } from './Sorter'

const collection = new NumbersCollection([-101, 3, 4, 5, -1])
const sorter = new Sorter(collection)
sorter.sort()
console.log(collection.data)
