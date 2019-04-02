// write a function that given two positive integers, will return a boolean representing
// whether the two numbers have the same frequency of digits.


console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
console.log(sameFrequency(121, 222)); // false

function sameFrequency(num1, num2) {
  let num1 = num1.toString();
  let num2 = num2.toString();
  if (num1.length !== num2.length) return false;

  let lookup = {};

  for (let char of num1.split('')) {
    lookup[char] = lookup[char] + 1 || 1;
  }

  for (let char of num2.split('')) {
    if (!lookup[char]) {
      return false;
    } else {
      lookup[char] -= 1;
    }
  }
  
  return true;
}
