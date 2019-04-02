// Write a function, validAnagram, that compares two strings and returns a boolean representing
// whether the strings are valid anagrams. Use the frequency counter pattern.

console.log(validAnagram('anagram', 'nagaram')); // true
console.log(validAnagram('aaz', 'zza')); // false


function validAnagram(str1, str2) {
  if (typeof(str1) !== 'string' || typeof(str2) !== 'string' || str1.length !== str2.length) {
    return false;
  }
  let charFreqs = getFrequencyObj(str1.trim().split(''));

  for (let key of str2.trim().split('')) {
    if (!charFreqs[key]) {
      return false;
    } else {
      charFreqs[key] -= 1;
    }
  }
  
  return true;
}

function getFrequencyObj(arr1) {
  let frequencies = {
  }
  // for each value of str1
  for (value of arr1) {
    // store value's freq in freq.str1
    frequencies[value] = ++frequencies[value] || 1
  }
  return frequencies;
}
