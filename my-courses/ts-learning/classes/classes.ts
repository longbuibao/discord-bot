class Car {
  constructor(private name: string, private year: Date) {}
  public getName(): string {
    return this.name
  }
}

const suzuki = new Car('Suzuki', new Date())
console.log(suzuki.getName())
