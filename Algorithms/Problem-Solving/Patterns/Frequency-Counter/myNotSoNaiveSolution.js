// Write a function called same(), which accepts two arrays. The function should return true
// if every value in the first array has a squared representation of itself in the second array.
// Additionally the frequency of the value presence must be the same. 
// Order does not matter.

console.log(same([1,2,3], [4,1,9])) // true
console.log(same([1,2,3,6], [1,9])) // false
console.log(same([1,2,1], [4,4,1])) // false (must be same frequency)

function same(arr1, arr2) {
  let frequencies = {
    arr1: {},
    arr2: {}
  }

  // for each value of arr1
  for (value of arr1) {
    // store value's freq in freq.arr1
    frequencies.arr1[value] = ++frequencies.arr1[value] || 1
  }
  // for each value of arr2
  for (value of arr2) {
    // store value's freq in freq.arr2
    frequencies.arr2[value] = ++frequencies.arr2[value] || 1
  }
  // compare freq.arr1 w freq.arr2
  for (let baseVal in frequencies.arr1) {
    const square = baseVal*baseVal;
    if (frequencies.arr1[baseVal] !== frequencies.arr2[square]) {
      return false;
    }
  }
  return true;
}
