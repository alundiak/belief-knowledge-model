// Function to calculate the integral using the trapezoidal rule
function trapezoidalIntegral(X, Y) {
  let integral = 0.0;
  const n = X.length;

  for (let i = 1; i < n; i++) {
    integral += 0.5 * (X[i] - X[i - 1]) * (Y[i - 1] + Y[i]);
  }

  return integral;
}

// Example data
const X = [2, 10, 40, 50, 80, 100]; // meters
const Y = [0, 10, 20, 50, 40, 90]; // percentage

// Calculate the integral
const result = trapezoidalIntegral(X, Y);

// Display the result
console.log("The Sweat integral is:", result, "%·m");

// The integral value, "3490 %·m," represents the accumulated "sweatiness" over the entire distance range. It takes into account both the magnitude of the sweat percentage and the distance covered, using the trapezoidal rule.
// The unit of "3490 %·m" indicates that the integral is a combined measure of sweat percentage and distance. It quantifies the overall sweatiness over the specified distance range.
