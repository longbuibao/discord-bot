import { User } from './models/User'

const user = new User({ name: 'long bui', age: 20 })

user.on('change', () => {
  console.log('user has change something')
})

user.set({ name: 'long bui', age: 25 })
