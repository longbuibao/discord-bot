import { User } from './models/User'

const longbui = new User({ name: 'long bui', age: 21 })
console.log(longbui.get('name'))
console.log(longbui.get('age'))

longbui.set({ name: 'bui long bao' })
console.log(longbui)
