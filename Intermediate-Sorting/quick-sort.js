function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    // left
    quickSort(arr, left, pivotIndex - 1);
    // right
    quickSort(arr, pivotIndex + 1, right);
  }

  return arr
}

/**
 * Returns the index of the pivot, and mutates the provided array such that
 * all values less than pivot value are on the left, and 
 * all values greater than the pivot are on the right.
 * 
 * @param {Array<Number>} arr array
 * @param {Number} startIndex starting index
 * @param {Number} endIndex ending index.
 */
function pivot(arr, startIndex = 0, endIndex = arr.length + 1) {
  let pivotIndex = startIndex;
  const pivotValue = arr[pivotIndex];

  for (let i = startIndex + 1; i <= endIndex; i++) {
    const currentValue = arr[i];

    if (pivotValue > currentValue) {
      // increment pivotIndex
      pivotIndex++;
      // swap current element with element at pivotIndex
      swap(arr, i, pivotIndex);
    }
  }

  // Swap starting element with pivotIndex
  swap(arr, startIndex, pivotIndex);

  return pivotIndex;


  function swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  }
}

let arr = [4,8,2,1,5,7,6,3];
console.log(quickSort(arr));

