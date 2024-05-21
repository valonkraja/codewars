var countBits = function(n) {
  const binary = n.toString(2);
  
  let numberOfOnes = 0
  
  for(let b of binary){
    if(b === '1') numberOfOnes++
      
  }
    
    return numberOfOnes
  
};

console.log(countBits(7))