import { CharactersCollection } from './CharactersCollection'
import { Sorter } from './Sorter'

const charsCollection = new CharactersCollection('Xaayb')
const sorter = new Sorter(charsCollection)

sorter.sort()
console.log(charsCollection.data)
