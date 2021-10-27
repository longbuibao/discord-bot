interface UserProp {
  name?: string
  age?: number
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
}
