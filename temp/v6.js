const stepSize = 24 * 60 * 60 * 1000; // One day in milliseconds
console.log('stepSize', stepSize);

// Function representing knowledge as a function of time (replace this with your actual knowledge function)
function K(t) {
  // Placeholder knowledge function, replace with actual implementation
  // For simplicity, using a linear function here
  return 1 * t;
}

// Calculate the integral of knowledge over the time interval [t0, tx]
function calculateIntegral(t0, tx) {
  // Numerical integration using a simple method (replace with a more accurate method if needed)
  let integral = 0;

  for (let t = t0; t <= tx; t += stepSize) {
    const knowledgeIncrement = K(t) * stepSize;
    console.log('knowledgeIncrement', knowledgeIncrement);
    integral += knowledgeIncrement;
    console.log('integral', integral);
  }

  return integral;
}

// Function to calculate belief based on the integral of knowledge over time
function calculateBelief(C, t0, tx) {
  // Calculate belief using the formula B = C / integral(K(t), t0, tx)
  const belief = C / calculateIntegral(t0, tx);
  return belief;
}

// Example usage with C = 1, t0 = 22/02/2022, and tx = 29/12/2023
const C_value = 1;
const t0_value = new Date('2022-02-22').getTime(); // Convert date to timestamp
const tx_value = new Date('2023-12-29').getTime(); // Convert date to timestamp

const result = calculateBelief(C_value, t0_value, tx_value);
console.log(result);
