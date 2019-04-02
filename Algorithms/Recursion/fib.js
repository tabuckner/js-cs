// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

/**
 * Returns the nth position of the fib sequence.
 * @param {Number} position the nth position of the fib sequence to return
 */
function fib(position, sequence = []){
  if (sequence[position - 1]) return sequence[position - 1];

  if (sequence.length < 2) {
    sequence.push(1);
    return fib(position, sequence);
  }

  const lastNum = sequence[sequence.length - 1];
  const secondToLastNum = sequence[sequence.length - 2];
  sequence.push(lastNum + secondToLastNum);
  return fib(position, sequence);

}

console.log(fib(4)) // 3
console.log(fib(10)) // 55
console.log(fib(28)) // 317811
console.log(fib(35)) // 9227465
