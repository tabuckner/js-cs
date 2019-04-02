// implement a function called, areThereDuplicates, which accepts a variable number of arguments
// and checks whether there are any duplicates amont the arguments passed in.
// You can solve this using the frequncy counter patter OR the multiple pointes pattern.


console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates(1, 3, 2, 4, 2)); // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true

/**
 * Freq Counter approach
 * @param  {...any} params any string or int
 */
// function areThereDuplicates(...params) {
//   const freqs = {};

//   for (let item of params) {
//     freqs[item] = freqs[item] + 1 || 1;
//   }

//   for (let key in freqs) {
//     if (freqs[key] > 1) {
//       return true;
//     }
//   }
//   return false;
// }

/**
 * Multiple Pointer Approach (after seeing that we can sort)
 * @param  {...any} params any string or int
 */
function areThereDuplicates(...params) {
  params.sort((a, b) => { return a > b })

  for (i = 0, j = 1; j < params.length; j++) {
    if (params[i] === params[j]) {
      return true;
    } else {
      i++;
    }
  }
  return false;
}
