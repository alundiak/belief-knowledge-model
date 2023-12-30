// Функція для обчислення Віри в залежності від Знання
function calculateFaith(knowledge) {
  const A = 1;
  return A / Math.log(knowledge + 1);
}

// Початкові значення
const initialKnowledge = 0;  // Початковий рівень Знання
const initialFaith = 1;  // Початковий рівень Віри

// Динаміка зміни Знання та обчислення Віри
for (let time = new Date('2023-02-22'); time <= new Date(); time.setDate(time.getDate() + 1)) {
  // Моделюємо динаміку зміни Знання з часом (наприклад, збільшення на деяку величину)
  const knowledge = 0.1;

  // Обчислюємо Віру
  const faith = calculateFaith(knowledge);

  // Візуалізація результатів
  const formatted_date = new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(time);
  console.log(`For time ${formatted_date}, Knowledge: ${knowledge.toFixed(2)}, Faith: ${faith.toFixed(2)}`);
}
