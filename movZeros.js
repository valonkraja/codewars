

/*

Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

*/

function moveZeros(arr){
  return arr.filter(el => el !== 0).concat(arr.filter(el => el === 0))
 

}

console.log(moveZeros([false,1,0,1,2,0,1, 3,"a"]))
console.log(moveZeros([ 9, +0, 9, 1, 2, 1, 1, 3, 1, 9, +0, +0, 9, +0, +0, +0, +0, +0, +0, +0 ]))