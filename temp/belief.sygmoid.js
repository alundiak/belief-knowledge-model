// Задані вхідні дані
const t0 = new Date('2022-02-22');
const t = new Date('2023-12-29');
const e = 2.71828;

// Початкове значення "Знання"
let someKnowledgeValue = 0;

// Функція для розрахунку "Знання" для конкретного моменту часу
function knowledgeFunction(currentTime) {
  // Ваш код для розрахунку "Знання" від часу
  // Припустимо, що ми просто збільшуємо знання на 1 кожною ітерацією
  return someKnowledgeValue += 0.0001;
}

// Цикл для ітерації крізь різні моменти часу
let current_time = new Date(t0);
let integralValue = 0; // Початкове значення інтегралу
while (current_time <= t) {
  // Розрахунок "Знання" для поточного моменту часу
  const knowledge_value = knowledgeFunction(current_time);

  // Додавання "Знання" до інтегрального значення
  integralValue += knowledge_value;

  // Розрахунок "Віри" за допомогою формули сигмоїди
  const faith_value = 1 / (1 + Math.pow(e, -(integralValue * Math.log(current_time - t0 + 1))));

  // Виведення або збереження значення "Віри"
  const formatted_date = new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(current_time);
  console.log(`For time ${formatted_date}, Knowledge: ${knowledge_value.toFixed(4)}, Faith: ${faith_value.toFixed(2)}`); // Округлення до двох знаків після коми

  // Збільшення поточного моменту часу (може бути настроєне відповідно до вашого контексту)
  current_time.setDate(current_time.getDate() + 1);
}
