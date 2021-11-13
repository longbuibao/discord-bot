import 'reflect-metadata'

const plane = {
  color: 'red',
}

Reflect.defineMetadata('note', 'hi', plane)
console.log(Reflect.getMetadata('note', plane))
