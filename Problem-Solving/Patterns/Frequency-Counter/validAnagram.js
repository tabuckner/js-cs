// Write a function, validAnagram, that compares two strings and returns a boolean representing
// whether the strings are valid anagrams. Use the frequency counter pattern.

console.log(validAnagram('anagram', 'nagaram')); // true
console.log(validAnagram('aaz', 'zza')); // false


function validAnagram(str1, str2) {
  if (typeof(str1) !== 'string' || typeof(str2) !== 'string' || str1.length !== str2.length) {
    return false;
  }
  let charFreqs = getFrequenciesOfStrings(str1, str2);

  for (let key in charFreqs.str1) {
    if (charFreqs.str1[key] !== charFreqs.str2[key]) {
      return false;
    }
  }
  
  return true;
}

function getFrequenciesOfStrings(str1, str2) {
  let frequencies = {
    str1: {},
    str2: {}
  }
  // for each value of str1
  for (value of str1.trim().split('')) {
    // store value's freq in freq.str1
    frequencies.str1[value] = ++frequencies.str1[value] || 1
  }
  // for each value of str2
  for (value of str2.trim().split('')) {
    // store value's freq in freq.str2
    frequencies.str2[value] = ++frequencies.str2[value] || 1
  }
  return frequencies;
}
