/**
 * Given a number, and a sorted array of numbers, will return the index of the number
 * if it is present, or -1.
 * @returns {Number}
 * @param {Array<Number>} arr sorted array of Numbers
 * @param {Number} value number to be found.
 */
function binarySearch(arr, value) {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;
 
  while (leftPointer <= rightPointer) {
    const middlePointer = Math.floor((leftPointer + rightPointer) / 2);
    const focusValue = arr[middlePointer];

    if (focusValue === value) {
      return middlePointer;
    } else if (focusValue < value) {
      leftPointer = middlePointer + 1; // Because we already know that middle isnt it
    } else {
      rightPointer = middlePointer - 1;
    }
  }
  return -1;
}

console.log(binarySearch([1,2,3,4,5], ));
