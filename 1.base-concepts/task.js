"use strict";

function solveEquation(a, b, c) {
  // Вычисляем дискриминант
  const discriminant = b ** 2 - 4 * a * c;

  // Проверяем значение дискриминанта
  if (discriminant < 0) {
    // Нет корней
    return [];
  } else if (discriminant === 0) {
    // Один корень
    const root = -b / (2 * a);
    return [root];
  } else {
    // Два корня
    const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    return [root1, root2];
  }
}

// Пример использования функции
const a = 1;
const b = -3;
const c = 2;
const roots = solveEquation(a, b, c);
console.log("Корни уравнения:", roots);
