/*
Consecutive strings

You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

*/

function longestConsec(strarr, k) {
  let longestStr = strarr[0]
  for(let i=0; i < strarr.length - k + 1; i++){

    let str = strarr.slice(i, i + k).join('');
    if(str.length > longestStr.length){
      longestStr = str
    }
  }
  return longestStr
}

console.log(longestConsec(['aaaa', 'aaa', 'aaaaaa', 'aaaaaaaa', 'aa'], 3))
