/*Take a Number And Sum Its Digits Raised To The Consecutive Powers and check if the sum is equal to the original number*/

function sumDigPow(a, b) {
  const res = []
  for(let i = a; i<=b; i++){

    const digits = i.toString().split('')
    let sum = 0;
    for(let j = 0; j< digits.length; j++){
       sum += Math.pow(Number(digits[j]), j+1 )
  }

    if (sum === i) {
      res.push(i)
    }
   }

  return res
 
}

console.log(sumDigPow(0,90))