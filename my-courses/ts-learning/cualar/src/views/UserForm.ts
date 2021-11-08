import { User, UserProp } from '../models/User'
import { View } from './View'

export class UserForm extends View<User, UserProp> {
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-age': this.onSetAgeClick,
      'click:.set-name': this.onSetNameClick,
      'click:.save-model': this.onSaveClick,
    }
  }

  onSaveClick = (): void => {
    this.model.save()
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
			  <input placeholder="${this.model.get('name')}"/>
			  <button class="set-name">Change Name</button>
        <button class="set-age" >Set Random Age</button>
        <button class="save-model">Save</button>
		  </div>
	  `
  }
}
