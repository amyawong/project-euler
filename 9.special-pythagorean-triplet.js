// Special Pythagorean Triplet
// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
// a^2 + b^2 = c^2
// For example, 3^2 + 4^2 = 9 + 16 = 25 = 52.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

// logic:
// const pythagoreanTriplet = (num) => {
//   while (a + b + c === num && a ** 2 + b ** 2 === c ** 2) return a * b * c;
// };

const pythagoreanTriplet = (num) => {
  let numsArr = [];
  let numsArr2 = [];
  for (let i = 1; i <= num; i++) {
    numsArr.push(i);
  }
    for (let j = 0; j < numsArr.length; j++) {
      for (let k = 0; k < numsArr.length; k++) {
        for (let l = 0; l < numsArr.length; l++) {
          if (numsArr[j] + numsArr[k] + numsArr[l] === num && Math.pow(numsArr[j], 2) + Math.pow(numsArr[k], 2) === Math.pow(numsArr[l], 2)) {
            numsArr2.push([numsArr[j], numsArr[k], numsArr[l]])
        }
      }
    }
  }
  return numsArr2[0];
}

console.log(pythagoreanTriplet(1000));

// time complexity is horrendous but it works