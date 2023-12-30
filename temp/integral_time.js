// Початковий момент часу
const startTime = new Date('2022-02-22').getTime();

// Кінцевий момент часу
const endTime = new Date('2023-12-29').getTime();

// Кількість днів від початку до кінця
const totalDays = Math.ceil((endTime - startTime) / (1000 * 60 * 60 * 24));
console.log('totalDays', totalDays);

// Інтегральна функція (лінійна)
function integrand(t) {
  return t / totalDays; // Змінюйте цю функцію відповідно до вашого випадку
}

// Функція обчислення інтегралу
function integrate(a, b, n) {
  console.log(startTime, endTime);
  console.log(a, b, n);
  const deltaX = (b - a) / n;
  let integral = 0;

  for (let i = 0; i < n; i++) {
    const x1 = a + i * deltaX;
    const x2 = a + (i + 1) * deltaX;
    const increment = (integrand(x1) + integrand(x2)) / 2 * deltaX;
    integral += increment;

  }

  return integral;
}

// Обчислюємо інтеграл для заданого відрізка
const result = integrate(0, totalDays, totalDays);

console.log(result); // Вивід: кумулятивне значення до кінця періоду
