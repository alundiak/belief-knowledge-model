// Інтеграл функції x на відрізку від 0 до 1 в JavaScript
function integrand(x) {
  return x;
}

function integrate(a, b, n) {
  const deltaX = (b - a) / n;
  let integral = 0;

  for (let i = 0; i < n; i++) {
    const x1 = a + i * deltaX;
    const x2 = a + (i + 1) * deltaX;
    integral += (integrand(x1) + integrand(x2)) / 2 * deltaX;
  }

  return integral;
}

const result = integrate(0, 1, 1000);
console.log(result); // Вивід: 0.5
