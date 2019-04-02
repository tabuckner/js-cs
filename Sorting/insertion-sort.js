/**
 * Returns a sorted array
 * @param {Array<number>} arr array
 */
function insertionSort(arr) {
  
  for (let i = 0; i < arr.length; i++) {
    let insertionIndex = -1;
    const sortedRangeRightBoundary = i;  
    // start w/ second elem in array
    const targetElemIndex = i + 1;
    const targetElemValue = arr[targetElemIndex];

    // compare to imediate predecessor
    for (let j = sortedRangeRightBoundary; j >= 0; j--) {
      const comparedValueIndex = j;
      const comparedValue = arr[comparedValueIndex]
      if (targetElemValue > comparedValue) { // The value is already where it should be.
        break;
      }
      if (targetElemValue < comparedValue) {
        insertionIndex = comparedValueIndex;
      }
    }
    
    if (insertionIndex > -1) {
      arr.splice(insertionIndex, 0, targetElemValue);
      arr.splice(targetElemIndex + 1, 1);
    }
  }
  return arr;
}

const testArr = [12, 10, 13, 1, 5, 6, 9, 2, 0];
console.log(insertionSort(testArr));