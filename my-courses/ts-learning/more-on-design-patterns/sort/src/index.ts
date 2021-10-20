import { LinkedList } from './LinkedList'
import { Sorter } from './Sorter'

const ll = new LinkedList()

const sorter = new Sorter(ll)

ll.add(-100)
ll.add(2)
ll.add(1)
ll.add(3)
ll.add(-10)

sorter.sort()
ll.print()
