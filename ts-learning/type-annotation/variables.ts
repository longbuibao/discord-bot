const apple: number = 5
// type annotation :number, only assign number value to the apple variable
const colors: Array<string> = ['hello', 'hi']
const allColors: string[] = ['red', 'blue']
const numbers: Array<number> = [1, 2, 3]
const dates: Array<Date> = [new Date()]

class Car {
  wheel: string
  constructor() {
    this.wheel = 'suzuki'
  }
}

const cars: Car[] = [new Car()]
const car: Car = new Car()

const point: { x: number; y: number } = {
  x: 1,
  y: 2,
}

console.log(point)
console.log(car)
console.log(cars)

const logNumber: (i: number, car: Car) => void = (i: number, car: Car) => {
  console.log(i)
  console.log(car.wheel)
}

logNumber(1, car)
