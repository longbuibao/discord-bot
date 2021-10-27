import axios from 'axios'

const url: string = 'http://localhost:3000'

axios.post(url + '/users', {
  name: 'bui bao long',
  age: 21,
})
