interface UserProp {
  name?: string
  age?: number
}

export class User {
  constructor(private data: UserProp) {}

  get<K extends keyof UserProp>(propName: K): number | string | void {
    return this.data[propName]
  }

  set(update: UserProp): void {
    Object.assign(this.data, update)
  }
}
