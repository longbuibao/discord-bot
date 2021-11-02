import { User } from './models/User'

const user = new User({})
user.on('click', () => console.log('hello'))
