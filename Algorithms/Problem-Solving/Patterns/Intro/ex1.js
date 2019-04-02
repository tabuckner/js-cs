// Given a string, return a count of each alphanum char in string.

function charCount(str) {
  if (typeof str !== 'string') {
    return;
  }
  if (str.length < 1) {
    return;
  }
  let returnObj = {};

  for (let char of str.toLowerCase().replace(/\W/g, '').split('')) {
    !returnObj[`${char}`] ? returnObj[`${char}`] = 1 : returnObj[`${char}`] +=1;
  }
  
  return returnObj;
}

console.log(JSON.stringify(charCount('abbccc!$#@%^&*'), null, 2));
console.log(JSON.stringify(charCount('easy as 1, 2, 3'), null, 2));
console.log(JSON.stringify(charCount(''), null, 2));
console.log(JSON.stringify(charCount(null), null, 2));
console.log(JSON.stringify(charCount(undefined), null, 2));
console.log(JSON.stringify(charCount(true), null, 2));
console.log(JSON.stringify(charCount(false), null, 2));
