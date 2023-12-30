// Функція для обчислення рівня Віри
function calculateFaith(knowledge, startTime, currentTime) {
  // Початковий рівень Віри
  const initialFaith = 1;

  // Функція для обчислення логарифмічної частини
  function logarithmicPart(x) {
    return Math.log(x);
  }

  // Обчислення рівня Віри
  const faith = initialFaith / (knowledge * logarithmicPart(currentTime - startTime + 1));

  return faith;
}

// Початкові значення
const initialKnowledge = 0.1;  // Початковий рівень Знання
const startTime = new Date('2022-02-22');  // Початковий час
const currentTime = new Date();  // Поточний час

// Обчислення рівня Віри
const faith = calculateFaith(initialKnowledge, startTime, currentTime);

// Візуалізація результатів
console.log(`For time ${currentTime.toISOString()}, Knowledge: ${initialKnowledge.toFixed(2)}, Faith: ${faith.toFixed(2)}`);
