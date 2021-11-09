import { UserEdit } from './views/UserEdit'
import { User } from './models/User'

const root = document.getElementById('root')
const user = User.buildUser({ name: 'long buiiiiii', age: 21 })

if (root) {
  const userEdit = new UserEdit(root, user)

  userEdit.render()

  console.log(userEdit)
} else {
  throw new Error('No root element')
}
