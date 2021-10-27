# General Idea

- Model Classes
  > Any kind of class inside of our framework that is meant to handle some data
  > Use model class to represent resources or things inside of applications
  > Handle data, used to represent Users, Blog Posts, Images, etc
- View Classes
  > Responsible for producing HTML and showing that to the user
  > Handle HTML and events caused by the user (like clicks)

# Classes

### User class

- Probably need to create a class to represent a User and all of its data (like name and age)
- User class needs to have the ability to store some data, retrieve it, and change it
- Also needs to have the ability to notify the rest of the app when some data is changed
- User need to be able to persist data to an outside server, and then retrieve it at some feature point
- **_Extraction Approach_**
  > - Build up User class as a 'mega' class with tons of methods
  > - Refactor User to use `composition`
  > - Refactor User to be a reusable class that can represent any piece of data, not just a User
- **_class User_**
  > - private data: UserProps: Object to store information about a particular user (name, age)
  > - get(propName: string): (string | number): Gets a single piece of info about this user (name, age)
  > - set(update: UserProps): void: Changes information about this user (name, age)
  > - on(eventName: string, callback: ()=>{}): Registers an event handler with this object, so other parts of the app know when something changes
  > - trigger(eventName: string): void: Triggers an event to tell other parts of the app that something has changed
  > - fetch(): Promise: Fetches some data from the server about a particular user
  > - save(): Promise: Saves some data about this user to the server

# Extends interface to help Typescript resolving types correctly

```typescript
interface UserProp {
  name: string
  age: number
}
export class User {
  constructor(private data: UserProp) {}
  get<K extends keyof UserProp>(propName: K): number | string {
    return this.data[propName]
  }
}
console.log(new User({ name: 'long', age: 12 }).get('name')) // auto complete the get('') name || age will show up :D
```

# Properties Definition

```ts
events: {[key: string]: Callback[]}
```

> Hey TS, we don't know what the different keys are going to be, we have no idea whatsoever, but we do know that they will be strings. In all different keys are going to point at values that are an array of callback functions

```ts
events: {key: Callback[]}
```

> In this case, we know that it will have a key name: `key` and value is array of `Callback` functions

# REST conventions

> **GET - POST - PUT - DELETE**

- These are conventions for making network requests to some outside server and base upon the type of request or the method of the request and the path that we make the request, it's going to affect exactly what that back in server is going to do for us.
