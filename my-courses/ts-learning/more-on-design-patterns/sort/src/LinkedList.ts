class Node {
  next: Node | null = null
  constructor(public data: number) {}
}

export class LinkedList {
  head: Node | null = null

  get length(): number {
    if (!this.head) return 0
    let count = 1

    let tail = this.head

    while (tail.next) {
      ++count
      tail = tail.next
    }

    return count
  }

  add(data: number): void {
    const node = new Node(data)
    if (!this.head) {
      this.head = node
      return
    }

    let tail = this.head

    while (tail.next) {
      tail = tail.next
    }

    tail.next = node
  }

  at(index: number): Node | null {
    const length = this.length
    if (index > length - 1 || index < 0 || !this.head) return null

    let count = 0
    let tail = this.head

    while (count < index && tail.next) {
      tail = tail.next
      count++
    }
    return tail
  }

  private checkList(i: number, j: number): void {
    if (!this.head) throw 'Nothing in this list'

    const iNode = this.at(i)
    const jNode = this.at(j)

    if (!iNode || !jNode) throw 'Your input may out of range'
  }

  compare(i: number, j: number): boolean {
    this.checkList(i, j)
    const iNode = this.at(i)
    const jNode = this.at(j)
    //@ts-ignore
    return iNode.data > jNode.data
  }

  swap(i: number, j: number): void {
    this.checkList(i, j)
    const iNode = this.at(i)
    const jNode = this.at(j)
    //@ts-ignore
    const temp = iNode.data
    //@ts-ignore
    iNode.data = jNode.data
    //@ts-ignore
    jNode.data = temp
  }

  print(): void {
    let result = []
    let temp = this.head
    while (temp) {
      result.push(temp.data)
      temp = temp.next
    }
    console.log(result.join(' => '))
  }
}
