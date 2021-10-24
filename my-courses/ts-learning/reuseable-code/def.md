# `fs` module not found in TS

- When we work with TS, we can freely work with different JS libraries, the only requirement is that we have to install something called that type definition file type. The type definition file tell TS about all the different objects, properties, functions and functions arguments and return value inside of these JS libraries.
- So any time we want to work with a third party JS library, we have to install that type definition file, unless it is included by default with the library itself.
- So it turns out the same is true of Node.js as well, when ever we want to work with Node.js from TS, we have to install a type definition file. The type definition type tells TS about all the different modules inside the Node standard library.

```bash
npm install @types/node
```

# enum

Represent for a very close connection between `enum members`, indicate that there only values in this enum collection is possible for some value

- Follow near-identical syntax rules as normal objects.
- Create an object with the same keys and values when converted from TS to JS.
- Primary goal is to signal to other engineers that these are all closely related values.
- Use whenever we have a small fixed set of values that are all closely related and **known at compile time**.

```typescript
enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}

const printMatchResult = (): MatchResult => {}
```

The code above indicate that only some values in `MatchResult` are possible for returned value.

# `generic`

- Like function arguments, but for types in class/function definition.
  > When we work with functions, we pass arguments to customize how the function body behaves. With `generics` we are going to define classes and function and we're going to customize the different types inside of those class and function definitions by passing in a types as though kind of somewhat like an argument
- Allows us to define the type of a property/argument/return value at a feature point.
- Used heavily when writing reusable code.

# Inheritance vs Composition

- Inheritance: Characterized by an **'is a'** relationship between two classes
- Composition: Characterized by an **'has a'** relationship between two classes
