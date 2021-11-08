import { User, UserProp } from '../models/User'
import { View } from './View'

export class UserForm extends View<User, UserProp> {
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-age': this.onSetAgeClick,
      'click:.set-name': this.onSetNameClick,
    }
  }

  onSetAgeClick = (): void => {
    this.model.setRandomAge()
  }

  onSetNameClick = (): void => {
    const input = this.parent.querySelector('input')

    if (input) {
      const name = input.value

      if (name.length === 0) return alert('Please input your name')
      this.model.set({ name })
    }
  }

  template(): string {
    return `
	  	<div>
			  <h1>User Form</h1>
        <div>User name: ${this.model.get('name')}</div>
        <div>User age: ${this.model.get('age')}</div>
			  <input />
			  <button class="set-name">Change Name</button>
        <button class="set-age" >Set Random Age</button>
		  </div>
	  `
  }
}
