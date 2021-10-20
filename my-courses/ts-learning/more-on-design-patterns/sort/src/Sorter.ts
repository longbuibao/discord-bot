import { NumbersCollection } from './NumbersCollection'

interface sortable {}

export class Sorter {
  constructor(public collection: NumbersCollection) {}

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
