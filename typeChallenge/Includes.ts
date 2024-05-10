/*
  898 - Includes
  -------
  by null (@kynefuk) #easy #array

  ### Question

  Implement the JavaScript `Array.includes` function in the type system. A type takes the two arguments. The output should be a boolean `true` or `false`.

  For example:

  ```ts
  type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`
  ```

  > View on GitHub: https://tsch.js.org/898
*/

/* _____________ Your Code Here _____________ */

// type Includes<T extends readonly any[], U> = any


//solution minutes 16:00
//https://grafikart.fr/tutoriels/typescript-type-challenges-1959#autoplay 

type TupleToUnion <T extends readonly any[]> = T[number]
type IsEqual<T, U> = T extends U ? (U extends T ? true : false ) : false
// cas si T est false il peut ettendre d'un boolean mais un boolean n'extends pas de false
// On peut également utilisé le type Equal qui existe deja par défaut

//type Includes<T extends readonly any[], U> = U extends TupleToUnion<T> ? true : false
type Includes<T extends readonly any[], U> = T extends [infer First, ... infer Rest] ? 
  ( IsEqual<U, First> extends true ? true : Includes<Rest, U> ) : false

 // ici on fait un type  "récursive" pour Checker chacun des élément du tableau
  // ici REst est le rest du tableau, et IsEqual 