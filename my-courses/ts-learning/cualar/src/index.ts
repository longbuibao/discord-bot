import { UserForm } from './views/UserForm'
import { User } from './models/User'

const root = document.getElementById('root')

if (root) {
  const form = new UserForm(root, User.buildUser({ name: 'NAME', age: 20 }))
  form.render()
} else {
  throw new Error('No root element')
}
