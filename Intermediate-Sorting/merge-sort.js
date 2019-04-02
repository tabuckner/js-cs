
/**
 * Given two sorted arrays, returns a single merged and sorted array.
 * @param {Array<Number>} arr1 sorted array 1
 * @param {Array<Number>} arr2 sorted array 2
 */
function merge(arr1, arr2) {
  const returnArr = [];
  let arr1Index = 0, arr2Index = 0;
  
  while (shouldKeepGoing()) {
    const arr1TargetValue = arr1[arr1Index];
    const arr2TargetValue = arr2[arr2Index];
    
    if (arr1TargetValue < arr2TargetValue) {
      returnArr.push(arr1TargetValue);
      arr1Index++;
    } else if (arr1TargetValue > arr2TargetValue) {
      returnArr.push(arr2TargetValue);
      arr2Index++;
    } else {
      returnArr.push(arr1TargetValue);
      arr1Index++;
      arr2Index++;
    }
  }

  pushRemainingElements(arr2, arr2Index);

  pushRemainingElements(arr1, arr1Index);

  return returnArr;

  
  function shouldKeepGoing() {
    return arr1Index < arr1.length && arr2Index < arr2.length;
  }

  function pushRemainingElements(arr, index) {
    while (index < arr.length) {
      returnArr.push(arr[index]);
      index++;
    }
  }
}

/**
 * Given a single unsorted (or sorted) array, returns a sorted array.
 * @param {Array<Number>} arr array of unsorted values
 */
function mergeSort(arr) {
  if (arrayIsSmallEnough(arr)) return arr;

  const midPoint = Math.ceil(arr.length / 2);
  const leftHalf = mergeSort(arr.slice(0, midPoint));
  const rightHalf = mergeSort(arr.slice(midPoint, arr.length));
  return merge(leftHalf, rightHalf); // FIXME: YOU MUST FUCKING RETURN THIS!

  /**
   * Given an array, returns truthy if array is small enough.
   * @param {Array<Number>} arr array
   */
  function arrayIsSmallEnough(arr) {
    return arr.length <=1;
  }
}

// console.log(merge([1,10,14,50], [2,14,88,99,100]));
console.log(mergeSort([10,24,76,73,72,1,9,72]));
// console.log(mergeSort([10,24,10,76,73]))

