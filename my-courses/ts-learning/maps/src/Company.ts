import faker from 'faker'

export class Company {
  name: string
  catchPhrase: string
  location: {
    lng: number
    lat: number
  }
  constructor() {
    this.name = faker.company.companyName()
    this.catchPhrase = faker.company.catchPhrase()
    this.location = {
      lng: parseFloat(faker.address.longitude()),
      lat: parseFloat(faker.address.latitude()),
    }
  }
}
