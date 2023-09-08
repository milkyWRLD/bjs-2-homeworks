"use strict";

function solveEquation(a, b, c) {
  let arr = [];

  const discriminant = b * b - 4 * a * c;

  if (discriminant < 0) {
    return arr;
  } else if (discriminant === 0) {
    const root = -b / (2 * a);
    arr.push(root);
  } else {
    const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    arr.push(root1, root2);
  }

  return arr;
}

const roots1 = solveEquation(1, -3, 2); // Два корня: [2, 1]
const roots2 = solveEquation(1, 2, 1); // Один корень: [-1]
const roots3 = solveEquation(1, 1, 1); // Нет корней: []

console.log("Корни уравнения 1: " + roots1);
console.log("Корни уравнения 2: " + roots2);
console.log("Корни уравнения 3: " + roots3);

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

}