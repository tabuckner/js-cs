/**
 * Returns a sorted array.
 * @param {Array<Number>} arr array
 */
function selectionSort(arr) {
  
  for (let i = 0; i < arr.length; i++) {
    let minValueIndex = i;
    // store index of first elem as smallest known value
    for (let j = i + 1; j < arr.length; j++) {
      // compare to next item in the array
      if (arr[j] < arr[minValueIndex]) {
        // if smaller update min value index
        minValueIndex = j;
      }
    }
    // swap values
    if (i !== minValueIndex) {
      swapArrVal(arr, minValueIndex, i);
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
console.log(selectionSort(testArr));
