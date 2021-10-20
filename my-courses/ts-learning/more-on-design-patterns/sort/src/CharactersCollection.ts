export class CharactersCollection {
  constructor(public data: string) {}
  get length(): number {
    return this.data.length
  }

  compare(i: number, j: number): boolean {
    return this.data[i].toLowerCase() > this.data[j].toLowerCase()
  }

  swap(i: number, j: number): void {
    const characters = this.data.split('')

    const temp: string = characters[i]
    characters[i] = characters[j]
    characters[j] = temp

    this.data = characters.join('')
  }
}
