import axios, { AxiosResponse } from 'axios'
import { Event } from './Events'

const url = 'http://localhost:3000/'

interface UserProp {
  name?: string
  age?: number
  id?: number
}

export class User {
  events: Event = new Event()

  constructor(private data: UserProp) {}

  get<K extends keyof UserProp>(propName: K): number | string | void {
    return this.data[propName]
  }

  set(update: UserProp): void {
    Object.assign(this.data, update)
  }

  fetch(): void {
    axios
      .get(url + `users/${this.get('id')}`)
      .then((response: AxiosResponse): void => this.set(response.data))
  }

  save(): void {
    const id = this.get('id')
    if (id) {
      axios.put(`${url}users/${id}`, this.data)
    } else {
      axios.post(`${url}users`, this.data)
    }
  }
}
