import axios, { AxiosResponse } from 'axios'
import { Event } from './Events'

// K is structure of JSON we get back
export class Collection<T, K> {
  models: T[] = []
  events: Event = new Event()

  constructor(public rootUrl: string, public deserialize: (data: K) => T) {}

  get on() {
    return this.events.on
  }

  get trigger() {
    return this.events.trigger
  }

  fetch(): void {
    axios.get(this.rootUrl).then((res: AxiosResponse) => {
      res.data.forEach((data: K) => {
        this.models.push(this.deserialize(data))
      })

      this.trigger('change')
    })
  }
}
