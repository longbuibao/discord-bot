import { User } from './models/User'

const longbui = new User({ name: 'long bui', age: 21 })
longbui.on('click', () => console.log('hello'))
longbui.on('press', () => console.log('hello 2'))
longbui.on('click', () => console.log('vcl'))

longbui.trigger('click')
