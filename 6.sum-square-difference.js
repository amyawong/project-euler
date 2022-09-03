// Sum square difference
// The sum of the squares of the first ten natural numbers is,
// 1^2 + 2^2 + ... + 10^2 = 385

// The square of the sum of the first ten natural numbers is,
// (1 + 2 + ... + 10)^2 = 3025

// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is .
// 3025 - 385 = 2640

// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.


const sumOfSquares = num => {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += (i * i)
  }
  return sum
}

// dont feel like writing out tests specs with mocha so here are some test cases to see if they pass
// console.log(sumOfSquares(2)) // 5
// console.log(sumOfSquares(5)) // 55
// console.log(sumOfSquares(10)) // 385


const squareOfSum = num => {
  let sum = 0;
  for (let i = num; i >= 0; i--) {
    sum += num
  }
  return (sum / 2) ** 2
}
// console.log(squareOfSum(2)) // 9
// console.log(squareOfSum(5)) // 225
// console.log(squareOfSum(10)) // 3025

const sumSquareDiff = num => squareOfSum(num) - sumOfSquares(num)
// console.log(sumSquareDiff(2)) // 4
// console.log(sumSquareDiff(5)) // 170
// console.log(sumSquareDiff(10)) // 2640

// time complexity: O(n^2) (i think)