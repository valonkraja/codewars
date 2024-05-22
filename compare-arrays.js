/*Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.*/

function comp(array1, array2){
  if (array1 === null || array2 === null) return false
  for(let a of array1){
    if(array2.indexOf(a*a) !== -1){
    let b=array2.splice(array2.indexOf(a * a), 1)
    }
  }
  return array2.length === 0
}

console.log(comp([121, 144, 19, 161, 19, 144, 19, 11]  ,[12, 14641, 20736, 361, 25921, 361, 20736, 361]))