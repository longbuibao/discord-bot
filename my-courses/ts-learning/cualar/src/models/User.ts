import { Event } from './Events'
import { Sync } from './Sync'
import { Attribute } from './Attribute'

const url = 'http://localhost:3000/users'

export interface UserProp {
  name?: string
  age?: number
  id?: number
}

export class User {
  events: Event = new Event()
  sync: Sync<UserProp> = new Sync<UserProp>(url)
  attribute: Attribute<UserProp>

  constructor(attrs: UserProp) {
    this.attribute = new Attribute<UserProp>(attrs)
  }

  get on() {
    return this.events.on
  }

  get trigger() {
    return this.events.trigger
  }

  get get() {
    return this.attribute.get
  }
}
