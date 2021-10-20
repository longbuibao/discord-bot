# Some useful package

- `concurrently`
  > ```bash
  > npm install concurrently
  > ```
  >
  > This package allow you to run multiple command in one single window terminal

# Or operator `|`

The Union Operator, when we use it, TypeScript behind the scenes is going to restrict the properties that we can access on the resulting type. TS is going to look at each of these different types and say you can only access the different properties that are common to both of them

> So if we write
>
> ```typescript
> constructor(public collection: number[] | string)
> ```
>
> We just only can access properties that are common to both an array of numbers and a string

# Type guard

A type guard is going to be a check on the type of this collection, once we run a type guard, we are going to essentially going to clarify that type of value we are working with. It will store the access to all the different properties associated with this collection.

```typescript
function sort(collection: number[] | string): void {
	//there is no all methods of number array here
	if(collection instanceof Array) {
		// all access to methods that `Array` has, will be restored here
		collection.<SOME METHODs>
	}
}
```

# `get` keyword

```typescript
export class NumbersCollection {
  constructor(public data: number[]) {}

  get length(): number {
    return this.data.length
  }
}
```

The `length` look likes a method, but we can access it as a property.

# Notes on `interface`

`interface` only specifies the properties name and respective types of some other class or some other object,
`interface` doesn't actually make any claims about these methods doing the correct things. Keep in mind this.

# Abstract classes

- Can't not be used to create an object directly.
- Only use as a parent class.
- The implemented methods can refer to other methods that don't actually exist yet.
- Can make child classes promise to implement some other method

# Interfaces vs Abstract classes

`interface`

> - Set up a contract between different classes.
> - Use when we have very different objects that we want to work together (without a direct dependency between them).
> - Promotes loose coupling (components are weakly associated with each other).

`inheritance/Abstract class`

> - Set up a contract between different classes.
> - Use when we are trying to build up a definition of an object
> - Strongly couples classes together

**In general, we always want to first reach for interfaces as a solution to code reuse, unless we are in a scenario where we have some different objects that are very closely related**
