/**
 * Given a number and a position, returns the number in num at the position
 * 
 * e.g. getDigit(12345, 0) // returns 5
 * e.g. getDigit(12345, 2) // returns 3
 * @param {Number} num 
 * @param {Number} place 
 */
function getDigit(num, place) {
  // returns the digit in num at the given place value
  return Math.floor(Math.abs(num) / Math.pow(10, place) % 10);
}

/**
 * Given a base 10 number, returns the count of digits in the number.
 * 
 * getDigitCount(5000000) // returns 6
 * getDigitCount(1234567) // returns 7
 * getDigitCount(1234567.12) // returns 7? 9?
 * getDigitCount(-1234567) // returns 7
 * 
 * @param {Number} num 
 */
function getDigitCount(num) {
  // return the counts of digits
  if (num === 0) return 1
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

/**
 * Given an array of numbers, return the number of digits in the largest number of the list.
 * 
 * mostDigits([1234, 56, 7]) // returns 4
 * 
 * @param {Array<Number>} arr 
 */
function mostDigits(arr) {
  let maxDigits = 0;
  // returns count of digest in longest number
  for (let num of arr) {
    maxDigits = Math.max(maxDigits, getDigitCount(num));
  }
  return maxDigits;
}

/**
 * Given a list of integers, returns a sorted list.
 * @param {Array<Number>} arr 
 */
function radixSort(arr) {
  // get qty of loops needed
  const loops = mostDigits(arr);
  for (let k = 0; k <= loops; k++) {
    // create array of 10 empty arrays
    const buckets = [[],[],[],[],[],[],[],[],[],[]];
    for (let num of arr) {
      const destinationBucketIndex = getDigit(num, k);
      // place each number in it's assigned bucket based on it's kth digit
      buckets[destinationBucketIndex].push(num);
    }
    // replace existing array with values in order from our buckets
    arr = [].concat.apply([], buckets);
  }
  // return the list
  return arr;
}

console.log(radixSort([1, 123, 3, 324, 12345, 12, 312]));
