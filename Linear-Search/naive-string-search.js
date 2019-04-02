function quickSort(arr, left = 0, right = arr.length - 1) {
  let pivotIndex = pivot(arr);
}

/**
 * Given a string and a pattern to search for, return the count of matches.
 * @returns {Number} count of matches
 * @param {String} string larger string to search through
 * @param {String} pattern pattern to look for
 */
function naiveStringSearch(string, pattern) {
  let matches = 0;
  // loop over the longer string
  for (let i = 0; i < string.length; i++) {
    // loop over the shorter string
    for (let j = 0; j < pattern.length; j++) {
      const patternFocus = pattern[j];
      const stringFocus = string[i + j];
      const isFullMatch = j === pattern.length - 1;
      
      // if the characters dont match, break out of inner loop
      if (patternFocus !== stringFocus) {
        break;
      }
      // if we have match, increment counter
      if (isFullMatch) {
        matches++;
      }
    }
  }
  // return count
  return matches;
}

console.log(naiveStringSearch('lorie loled', 'lo'));
// naiveStringSearch('lorie loled', 'lol');
