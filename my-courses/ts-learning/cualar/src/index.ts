import { Collection } from './models/Collection'

const rootUrl = 'http://localhost:3000/users'
const collection = new Collection(rootUrl)

collection.on('change', () => {
  console.log(collection)
})

collection.fetch()
