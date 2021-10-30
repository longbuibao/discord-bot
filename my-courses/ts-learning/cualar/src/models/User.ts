import { Event } from './Events'
import { Sync } from './Sync'

export interface UserProp {
  name?: string
  age?: number
  id?: number
}

export class User {
  events: Event = new Event()
  sync: Sync<UserProp> = new Sync<UserProp>('http://localhost:3000/users')
}
