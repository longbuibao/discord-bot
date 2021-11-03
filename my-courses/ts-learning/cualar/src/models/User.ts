import { Event } from './Events'
import { Sync } from './Sync'
import { Attribute } from './Attribute'
import { AxiosResponse } from 'axios'

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

  set(update: UserProp): void {
    console.log(this)
    this.attribute.set(update)
    this.events.trigger('change')
  }

  fetch(): void {
    const id = this.attribute.get('id')
    if (typeof id !== 'number') throw new Error('Cannot fetch without an id')

    this.sync.fetch(id).then((res: AxiosResponse): void => this.set(res.data))
  }

  save(): void {
    this.sync
      .save(this.attribute.getAll())
      .then((res: AxiosResponse): void => {
        this.trigger('save')
      })
      .catch((err) => this.trigger('error'))
  }
}
