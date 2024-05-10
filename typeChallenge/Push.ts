/*
  3057 - Push
  -------
  by jiangshan (@jiangshanmeta) #easy #array

  ### Question

  Implement the generic version of ```Array.push```

  For example:

  ```typescript
  type Result = Push<[1, 2], '3'> // [1, 2, '3']
  ```

  > View on GitHub: https://tsch.js.org/3057
*/

/* _____________ Your Code Here _____________ */

// type Push<T, U > = any
type Push<T extends any[], U> = [...T, U]


// AUTRE EXEMPLE 

// function push(arr:any, item: any){
//     return [...arr, item]
// }
// const ab= push([1,2], "3") // ici on a un tableau de any 
// const ac= push([1,2], 3)



function push<T, U>(arr:T[], item: U){
    return [...arr, item]
}
const ab= push([1,2], "3") 
const ac= push([1,2], 3)


// // si déclarer mannuelement :
// function push<T, U>(arr:T[], item: U): (T | U)[]{
//     return [...arr, item]
// }