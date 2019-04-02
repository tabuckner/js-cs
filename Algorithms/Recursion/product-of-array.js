// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

/**
 * Returns product of all elems in array.
 * @param {array} arr array of nums to be multiplied.
 */
function productOfArray(arr) {
  if (arr.length <= 0) return 1;
  
  const element = arr[0];
  return element * productOfArray(arr.slice(1));
}

console.log(productOfArray([1,2,3])) // 6
console.log(productOfArray([1,2,3,10])) // 60