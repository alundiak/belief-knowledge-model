/*
The Box-Muller transform typically involves pairs of independent, uniformly distributed random values, and it doesn't specifically require negative or positive values. 
The transform is designed to generate pairs of random numbers from a standard normal distribution 
(with mean 0 and standard deviation 1) using two independent uniformly distributed random values.

Generating a pair of random values is crucial because the transform produces two independent samples from a standard normal distribution. 
The standard normal distribution is characterized by a mean (μ) of 0 and a standard deviation (σ) of 1.
*/
function generateNormalDistribution(mean, stdDev) {
  let u = 0, v = 0;
  while (u === 0) u = Math.random();
  while (v === 0) v = Math.random();
  // The need to ensure that the generated u values are not zero in the context of the Box-Muller transform 
  // is related to the fact that the transformation involves taking the square root of -2 * ln(u), and the natural logarithm (ln) of zero is undefined.

  const z0 = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2 * Math.PI * v);
  const z1 = Math.sqrt(-2.0 * Math.log(u)) * Math.sin(2 * Math.PI * v);

  const x = mean + stdDev * z0;
  const y = mean + stdDev * z1;

  return [x, y];
}

// Example usage
const [randomX, randomY] = generateNormalDistribution(0, 1);
console.log('Random value for X:', randomX);
console.log('Random value for Y:', randomY);

function boxMullerTransform() {
  let u1, u2;

  do {
    u1 = Math.random();
    u2 = Math.random();
  } while (u1 === 0 || u2 === 0);

  const z0 = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
  const z1 = Math.sqrt(-2 * Math.log(u1)) * Math.sin(2 * Math.PI * u2);

  return [z0, z1];
}

// Example usage
const [z0, z1] = boxMullerTransform();
const [z2, z3] = boxMullerTransform();

console.log("Z0:", z0);
console.log("Z1:", z1);
console.log("Z2:", z2);
console.log("Z3:", z3);


// for (let index = 0; index < Number.MAX_SAFE_INTEGER; index++) {
//   const u1 = Math.random();
//   const u2 = Math.random();
//   const u3 = Math.random();
//   if (u1 === 0 || u2 === 0 || u3 === 0) {
//     console.log(u1, u2, u3);
//   }
// }
//  NO ZERO VALUES, so far
