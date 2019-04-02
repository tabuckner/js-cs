// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55 

/**
 * Returns the sum of all numbers, starting at 0 and ending at `num`.
 * @param {number} num a given number
 */
function recursiveRange(num){
  if (num === 0) return 0;
  return num + recursiveRange(num - 1);   
}

console.log(recursiveRange(6)) // 21
console.log(recursiveRange(10)) // 55 
