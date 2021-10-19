class Sorter {
  constructor(public collection: number[]) {}

  sort(): void {
    const { length } = this.collection

    for (let i = 0; i < length - 1; i++)
      for (let j = i + 1; j < length; j++) {
        //type guard
        if (this.collection instanceof Array) {
          if (this.collection[i] > this.collection[j]) {
            const temp: number = this.collection[i]
            this.collection[i] = this.collection[j]
            this.collection[j] = temp
          }
        }
      }
  }
}

const sorter = new Sorter([1, -1, -2, 3, 5, -11])
sorter.sort()
console.log(sorter.collection)
