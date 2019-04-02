// Write a funciton that accepts a string input and returns a reversed copy.

function reverse(string) {
  const chars = [];
  
  for (char of string.toString().trim().split('')) {
    chars.unshift(char);
  }
  
  return chars.join('');
}

console.log(reverse('test'));
