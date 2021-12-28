type Overloading = string | number

function add(a: string, b: string): string
function add(a: number, b: number): number
function add(a: Overloading, b: Overloading) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString()
  }
  return a + b
}

console.log(add(1, 2))
