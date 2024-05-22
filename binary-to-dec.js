const binaryArrayToNumber = arr => {
  let decimal = 0;
  let len = arr.length - 1
  for(let i = 0; i <= len; i++){
    decimal += arr[i] * Math.pow(2, len - i)
  }

  return decimal
};

// console.log(binaryArrayToNumber([0,0,0,1]))

console.log(binaryArrayToNumber([1,0,1,1]))