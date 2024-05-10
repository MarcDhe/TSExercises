/*
  18 - Length of Tuple
  -------
  by sinoon (@sinoon) #easy #tuple

  ### Question

  For given a tuple, you need create a generic `Length`, pick the length of the tuple

  For example:

  ```ts
  type tesla = ['tesla', 'model 3', 'model X', 'model Y']
  type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']

  type teslaLength = Length<tesla>  // expected 4
  type spaceXLength = Length<spaceX> // expected 5
  ```

  > View on GitHub: https://tsch.js.org/18
*/

/* _____________ Your Code Here _____________ */

// type Length <T> = any
type Length<T extends readonly  any[]> = T extends {length: infer Length} ? Length : never 

// il ne faut pas oublié un array[] a par defaut un propriété length
// et que infer nous permet de l'extraire

