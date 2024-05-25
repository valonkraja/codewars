/*

Write two functions that convert a roman numeral to and from an integer value. Multiple roman numeral values will be tested for each function.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals:

1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC
2008 is written as 2000=MM, 8=VIII; or MMVIII
1666 uses each Roman symbol in descending order: MDCLXVI.
Input range : 1 <= n < 4000

In this kata 4 should be represented as IV, NOT as IIII (the "watchmaker's four").

*/

const rom = {
  'M': 1000,
  "D": 500,
  "C": 100,
  "L": 50,
  "X": 10,
  'V': 5,
  'I': 1
}

function romanToArabic(num){
  let arabic = 0
  for(r of num){
    arabic += rom[r]
  }
  return arabic
}



function arabicToRoman(num){
  let rom = ''
  const arabic = {
  "M" : 1000,
  "CM": 900,
  "D": 500,
  "CD": 400,
  "C": 100,
  "XC": 90,
  "L": 50,
  "XL": 40,
  "X": 10,
  "IX": 9,
  "V": 5,
  "IV": 4,
  "I": 1 
} 

  for(i in arabic){

    while(num >= arabic[i]){
      rom += i
      num -= arabic[i]
    }

  }

  return rom

}


console.log(romanToArabic('MDCCLXVI'))
console.log(arabicToRoman(1))
