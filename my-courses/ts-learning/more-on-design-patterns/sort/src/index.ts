import { LinkedList } from './LinkedList'
import { NumbersCollection } from './NumbersCollection'
import { CharactersCollection } from './CharactersCollection'

const ll = new LinkedList()
ll.add(1)
ll.add(2)
ll.add(-100)
ll.add(0)

ll.sort()
ll.print()

const nums = new NumbersCollection([-1, -9, 0, 10, 2])
nums.sort()
console.log(nums.data)

const chars = new CharactersCollection('longbuibao')
chars.sort()
console.log(chars.data)
