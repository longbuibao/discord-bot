import { Event } from './Events'
import { Sync } from './Sync'
import { Attribute } from './Attribute'

export interface UserProp {
  name?: string
  age?: number
  id?: number
}

export class User {
  events: Event = new Event()
  sync: Sync<UserProp> = new Sync<UserProp>('http://localhost:3000/users')
  attribute: Attribute<UserProp> = new Attribute({})
}
