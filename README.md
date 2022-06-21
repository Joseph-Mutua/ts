# The TS Type System

1. Helps catch errors during development
2. Uses 'type annotations' to analyze code
3. Only active during development
4. Doesn't provide any performance optimization

**Syntax+Features** vs **Design Patterns with TS**

- **Syntax+Features:** What is an interface? What is the syntax for defining an interface?:
  - Understand basic types in TS
  - Function typing + annotations
  - Type definition files
  - Arrays in TS
  - Module systems
  - Classes + Refresher on OOP
  - Projects
- **Design Patterns with TS:** How to use interfaces to write reusable code
  - Projects

**Type-** The different properties + functions that a value has:

- Used by the typescript compiler to analyze the code for errors
- Allow other engineers to understand the types in the codebase

## TS Types
1. **Primitive Types:** number, string, boolean, symbol, void, null, undefined
2. **Object Types:** functions, classes, arrays, objects 


- **Type Annotations + Inference** apply to _variables_, _Functions_, _Objects_
  - **Type Annotations:** Code added to tell TypeScript what type of value a variable will refer to
  - **Type Inference:** TS tries to figure out what type of value a variable refers to. If declaration and initialization are on the same line, TS will figure out the type annotation automatically.

## When To Use
### Annotations
1. wehn we declare a variable on one line then initialize it later
2. When we want a variable to have a type that can't be inferred
3. When a function returns the "any" type and we need to clarify the value
   
## Annotations around Functions
**Type Annotations for functions:** Code we add to tell TS what type of arguments a function will receive and what type of values it will return
**Type inference for functions:** TS tries to figure out what type of value a function will return.



## Array vs Tuple annotations
- Use typed Arrays any time you need to represent a collection of records with some a arbitrary sort order
- A Tuple s an Array-like structure where each element represents some property of a record

**Interfaces:** Creates a new type, describing the property names and values of an object.
- General Strategy for reusaable code in TS
  - Create functions that accept arguments that are typed with interfaces
  - Objects/Classes can decide to 'implement' a given interface to work with a function

## Class Modifiers
1. **Public:** This method canbe called anywhere, anytime
2. **Private** This method can only be called by other methods in this class
3. **Protected** This method can be called by other methods in this class, or by other methods in child classes. 