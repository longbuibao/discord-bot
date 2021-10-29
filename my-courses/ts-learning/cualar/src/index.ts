import { User } from './models/User'

const user = new User({ name: 'new user', age: 29 })

user.events.on('click', () => console.log('hi'))
user.events.on('click', () => console.log('hello'))

user.events.trigger('click')
