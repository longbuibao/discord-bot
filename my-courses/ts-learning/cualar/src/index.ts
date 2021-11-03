import { User } from './models/User'

const user = new User({ name: 'duong thi lua', age: 20, id: 1 })

user.on('change', () => {
  console.log('user has change something')
})

user.set({ name: 'bui bao long' })
console.log(user.events)
