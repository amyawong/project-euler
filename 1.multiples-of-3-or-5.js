// Multiples of 3 or 5
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
// The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

const sumOfMultiples = num => {
  let arr = [];
  for (let i = 1; i < num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      arr.push(i);
    }
  }
  return arr.reduce((prev, curr) => prev + curr, 0)
}

console.log(sumOfMultiples(10)) // 23
console.log(sumOfMultiples(20)) // 3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 10 => 78