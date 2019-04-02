// write a function, maxSubarraySum that, given an array and a quantity of values to sum (num),
// will return the maximum possible sum of values in the array.

console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3], 3)); // 19

function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;

  // get the initial num-sized subarray's sum
  for (let i = 0; i < num; i++) {
    // set as max-sum
    maxSum += arr[i]
  }
  // set tempsum to max sum
  tempSum = maxSum;
  
  // starting at the arr[i], where i is the next available value in arr
  for (let i = num; i < arr.length; i++) {
    // subtract the first value of the subarray
    // add the value of arr[i]
    tempSum = tempSum - arr[i - num] + arr[i];
    // if tempsum > maxsum; maxsum = tempsum
    if (tempSum > maxSum) {
      maxSum = tempSum;
    }
  }
  return maxSum;
}
