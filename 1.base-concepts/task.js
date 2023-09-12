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
const roots2 = solveEquation(1, 2, 1);  // Один корень: [-1]
const roots3 = solveEquation(1, 1, 1);  // Нет корней: []

console.log("Корни уравнения 1: " + roots1);
console.log("Корни уравнения 2: " + roots2);
console.log("Корни уравнения 3: " + roots3);

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    percent = parseFloat(percent);
    contribution = parseFloat(contribution);
    amount = parseFloat(amount);
    countMonths = parseInt(countMonths);


    if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
        return false;
    }

    percent = percent / 100;


    const creditBody = amount - contribution;


    const monthlyPercent = percent / 12;


    const monthlyPayment = creditBody * (monthlyPercent + monthlyPercent / (Math.pow(1 + monthlyPercent, countMonths) - 1));


    const totalPayment = (monthlyPayment * countMonths).toFixed(2);

    return parseFloat(totalPayment);
}

const result1 = calculateTotalMortgage(10, 0, 50000, 12); // 52749.53
const result2 = calculateTotalMortgage(10, 1000, 50000, 12); // 51694.54
const result3 = calculateTotalMortgage(10, 0, 20000, 24); // 22149.56
const result4 = calculateTotalMortgage(10, 1000, 20000, 24); // 21042.09
const result5 = calculateTotalMortgage(10, 20000, 20000, 24); // 0
const result6 = calculateTotalMortgage(10, 0, 10000, 36); // 11616.19
const result7 = calculateTotalMortgage(15, 0, 10000, 36); // 12479.52

console.log("Результат 1: " + result1);
console.log("Результат 2: " + result2);
console.log("Результат 3: " + result3);
console.log("Результат 4: " + result4);
console.log("Результат 5: " + result5);
console.log("Результат 6: " + result6);
console.log("Результат 7: " + result7);

