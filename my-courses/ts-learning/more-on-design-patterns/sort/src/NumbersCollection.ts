export class NumbersCollection {
  constructor(public data: number[]) {}
  get length(): number {
    return this.data.length
  }

  compare(i: number, j: number): boolean {
    return this.data[i] > this.data[j]
  }

  swap(i: number, j: number): void {
    const temp: number = this.data[i]
    this.data[i] = this.data[j]
    this.data[j] = temp
  }
}
