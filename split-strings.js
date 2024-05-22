function solution(str){
   if(str.length % 2 === 1) str += '_'
    arr = []
    for(let i=0; i < str.length-1; i+=2){
      arr.push(`${str[i]}${str[i+1]}`)
    }
    return arr
}

console.log(solution('abcdef'))
console.log(solution('abcb'))