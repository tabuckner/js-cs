//factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040
/**
 * A factorial is the product of an integer and all of the integers
 * below it.
 * @param {number} num a number to get factorial of
 */
function factorial(num){
  if (num === 0) return 1;
  return num * factorial(num - 1);
}

console.log(factorial(1)) // 1
console.log(factorial(2)) // 2
console.log(factorial(4)) // 24
console.log(factorial(7)) // 5040
