export {}

const profile = {
  name: 'alex',
  age: 20,
  coords: {
    long: 12,
    lat: 13,
  },
  setAge(age: number): void {
    this.age = age
  },
  getAge(): number {
    return this.age
  },
}

const {
  coords: { long, lat },
}: { coords: { long: number; lat: number } } = profile

const { name, age }: { name: string; age: number } = profile

console.log(long, lat)
console.log(name, age)
