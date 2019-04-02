/**
 * returns a sorted array
 * @param {Array<Number>} arr array to be sorted
 */
function bubbleSort(arr) {
  // start looping with i at the beginning
  for (let i = 0; i < arr.length; i++) {
    let noSwapsMade = false;
    // start looping with j, to i - 1
    for (let j = 0; j < arr.length - i; j++) {
      if (noSwapsMade) break ;
      // if left is greater than right, swap them
      const leftIndex = j;
      const rightIndex = j + 1;
      const leftVal = arr[leftIndex];
      const rightVal = arr[rightIndex];
      console.log({i, j, leftVal, rightVal});
      if (leftVal > rightVal) {
        swapArrVal(arr, leftIndex, rightIndex);
      } else {
        noSwapsMade = true;
      }
    }
  }
  return arr;
}

function swapArrVal(arr, index1, index2) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

const testArr = [12, 10, 13, 1, 5, 6, 9];
console.log(bubbleSort(testArr));