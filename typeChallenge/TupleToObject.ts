/*
  11 - Tuple to Object
  -------
  by sinoon (@sinoon) #easy #object-keys

  ### Question

  Given an array, transform it into an object type and the key/value must be in the provided array.

  For example:

  ```ts
  const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

  type result = TupleToObject<typeof tuple> // expected { 'tesla': 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
  ```

  > View on GitHub: https://tsch.js.org/11
*/

/* _____________ Your Code Here _____________ */
// type TupleToObject<T extends readonly any[]> =  any



type TupleToObject<T extends readonly PropertyKey[]> = {
  [key in T[number]]: key
}

// pouruqoi key in T[number] voir BB ? 

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
type AB = typeof tuple

type BB = AB[number]