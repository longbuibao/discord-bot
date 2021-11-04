import axios, { AxiosResponse } from 'axios'
import { User, UserProp } from './User'
import { Event } from './Events'

export class Collection {
  models: User[] = []
  events: Event = new Event()

  constructor(public rootUrl: string) {}

  get on() {
    return this.events.on
  }

  get trigger() {
    return this.events.trigger
  }

  fetch(): void {
    axios.get(this.rootUrl).then((res: AxiosResponse) => {
      res.data.forEach((data: UserProp) => {
        const user = User.buildUser(data)
        this.models.push(user)
      })

      this.trigger('change')
    })
  }
}
