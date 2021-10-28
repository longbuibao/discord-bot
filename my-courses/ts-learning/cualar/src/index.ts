import axios from 'axios'
import { User } from './models/User'

const url: string = 'http://localhost:3000'

const user = new User({
  name: 'bui bao long',
  age: 21,
})

axios.post(url + '/users', user)
