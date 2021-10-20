// interface Sortable {
//   length: number
//   swap(i: number, j: number): void
//   compare(i: number, j: number): boolean
// }

export abstract class Sorter {
  abstract compare(i: number, j: number): boolean
  abstract swap(i: number, j: number): void
  abstract length: number

  sort(): void {
    const { length } = this

    for (let i = 0; i < length - 1; i++)
      for (let j = i + 1; j < length; j++) {
        if (this.compare(i, j)) {
          this.swap(i, j)
        }
      }
  }
}
