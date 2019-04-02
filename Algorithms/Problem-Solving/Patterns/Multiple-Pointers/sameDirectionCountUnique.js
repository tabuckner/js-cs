// write a function, that given a sorted array, will return the count of unique values.
// Use multiple pointer approach and move both pointers in the same direction.

console.log(countUnique([1,1,2,2,3,3,4]));

function countUnique(arr) {
  // starting at 0,1 compare i and j
  for (i = 0, j = 1; j < arr.length; j++) {
    // if j == i, increment i and replace value of arr[i] with arr[j], then increment j
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
    // if j != i, increment j (implicit in loop)
  }

  return i + 1;
}