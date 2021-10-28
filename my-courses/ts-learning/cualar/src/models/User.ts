import axios, { AxiosResponse } from 'axios'
const url = 'http://localhost:3000/'

interface UserProp {
  name?: string
  age?: number
  id?: number
}

type Callback = () => void

export class User {
  events: { [key: string]: Callback[] } = {}

  constructor(private data: UserProp) {}

  get<K extends keyof UserProp>(propName: K): number | string | void {
    return this.data[propName]
  }

  set(update: UserProp): void {
    Object.assign(this.data, update)
  }

  on(eventName: string, callback: Callback): void {
    const handlers = this.events[eventName] || []
    handlers.push(callback)
    this.events[eventName] = handlers
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName]

    if (!handlers || handlers.length === 0) return

    handlers.forEach((callback) => callback())
  }

  fetch(): void {
    axios
      .get(url + `users/${this.get('id')}`)
      .then((response: AxiosResponse): void => this.set(response.data))
  }
}
