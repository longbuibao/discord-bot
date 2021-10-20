interface Sortable {
  length: number
  swap(i: number, j: number): void
  compare(i: number, j: number): boolean
}

export class Sorter {
  constructor(public collection: Sortable) {}

  sort(): void {
    const { length } = this.collection

    for (let i = 0; i < length - 1; i++)
      for (let j = i + 1; j < length; j++) {
        if (this.collection.compare(i, j)) {
          this.collection.swap(i, j)
        }
      }
  }
}
