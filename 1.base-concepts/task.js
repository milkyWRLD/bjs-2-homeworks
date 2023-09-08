"use strict";

function solveEquation(a, b, c) {

	const discriminant = b ** 2 - 4 * a * c;

	а
	if (discriminant < 0) {

		return [];
	} else if (discriminant === 0) {

		const root = -b / (2 * a);
		return [root];
	} else {

		const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
		const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
		return [root1, root2];
	}
}


const a = 1;
const b = -3;
const c = 2;
const roots = solveEquation(a, b, c);
console.log("Корни уравнения:", roots);
