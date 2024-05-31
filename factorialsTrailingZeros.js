function trailingZeros(n){
  let kMax = Math.log(n)/Math.log(5)
  let zeros = 0
  for(let k = 1; k <= kMax; k++){
    zeros += Math.floor(n/Math.pow(5,k))
  }

  return zeros
}

console.log(trailingZeros(1000))
