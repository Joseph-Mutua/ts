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
  - **Type Annotations + Inference** apply to *variables*, *Functions*, *Objects*
    -  **Type Annotations:** Code added to tell TypeScript what type of value a variable will refer to
    -  **Type Inference:** TS tries to figure out what type of value a variable refers to. If declaration and initialization are on the same line, TS will figure out the type annotation automatically.

## Annotations around Functions
**Type Annotations for functions:** Code we add to tell TS what type of arguments a function will receive and what type of values it will return
**Type inference for functions:** TS tries to figure out what type of value a function will return.
