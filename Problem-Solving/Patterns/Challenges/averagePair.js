// write a function called averagePair. Given a sorted array of integers and a target average,
// determine if there is a pair of values in the array, where the average equals the target average.
// there may be more than one pair.

console.log(averagePair([1,2,3], 2.5)); // true
console.log(averagePair([1,3,3,5,6,7,10,12,19,], 8)); // true
console.log(averagePair([-1,0,3,4,5,6], 4.1)); // false
console.log(averagePair([], 4)); // false


function averagePair(arr, target) {
  if (arr.length < 1) return false;
  let targetSum = target * 2;
  let num1 = 0;
  let num2 = arr.length - 1;

  while (num1 < num2) {
    let testValue = arr[num1] + arr[num2];
    if (testValue === targetSum) {
      return true;
    } else if (testValue < targetSum) {
      num1++
    } else {
      num2--;
    }
  }
  return false;
}
