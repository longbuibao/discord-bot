import { Model } from './Model'
import { Attribute } from './Attribute'
import { ApiSync } from './ApiSync'
import { Event } from './Events'
import { Collection } from './Collection'

const url = 'http://localhost:3000/users'

export interface UserProp {
  name?: string
  age?: number
  id?: number
}

export class User extends Model<UserProp> {
  static buildUser(attrs: UserProp): User {
    return new User(
      new Attribute<UserProp>(attrs),
      new ApiSync<UserProp>(url),
      new Event()
    )
  }

  static buildUserCollection(): Collection<User, UserProp> {
    return new Collection<User, UserProp>(url, (data: UserProp) => {
      return User.buildUser(data)
    })
  }
}
