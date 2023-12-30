function randomFunction(x) {
  // Replace this with your actual function
  return Math.sin(x); // Example: a sine function
}

function monteCarloIntegration(a, b, n) {
  let sum = 0;

  for (let i = 0; i < n; i++) {
    const x = a + Math.random() * (b - a); // Random x in the interval [a, b]
    const y = randomFunction(x); // Evaluate the function at the random x
    sum += y;
  }

  const average = sum / n;
  const integral = (b - a) * average;

  return integral;
}

const result = monteCarloIntegration(0, Math.PI, 1000000);
console.log(result);
