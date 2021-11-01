import { User } from './models/User'

const user = new User()

user.events.on('click', () => console.log('hi'))
user.events.on('click', () => console.log('hello'))

user.events.trigger('click')
