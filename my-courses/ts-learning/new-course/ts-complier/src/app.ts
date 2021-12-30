class Human {
  city: string = 'AN KHE'
  yo() {}
}

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB)
}

const ob = merge(new Human(), { age: 12 })

function extractAndConvert<T extends object, U extends keyof T>(
  objA: T,
  keys: U
) {
  return objA[keys]
}

console.log(
  extractAndConvert(
    {
      name: 'long bui',
      age: 12,
    },
    'age'
  )
)

interface CatInfo {
  age: number
  breed: string
}

type CatName = 'tep' | 'tom'

const cats: Record<CatName, CatInfo> = {
  tep: { age: 12, breed: 'tep breed' },
  tom: { age: 24, breed: 'tom breed' },
}

console.log(cats)
