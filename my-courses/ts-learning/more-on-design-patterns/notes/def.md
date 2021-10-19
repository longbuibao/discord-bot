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
