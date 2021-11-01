import { UserProp } from './User'

export class Attribute<T> {
  constructor(private data: T) {}

  get<K extends keyof T>(key: K): T[K] {
    return this.data[key]
  }

  set(update: T): void {
    Object.assign(this.data, update)
  }
}

const attrs = new Attribute<UserProp>({
  id: 5,
  age: 20,
  name: 'long',
})
