// Задание №1: Форматтер чисел

function parseCount(value) {
    const parsedValue = Number.parseFloat(value);

    if (isNaN(parsedValue)) {
        throw new Error("Невалидное значение");
    }

    return parsedValue;
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch (error) {
        return error;
    }
}

// Задание №2: Треугольник

class Triangle {
    constructor(a, b, c) {
        if (a + b <= c || a + c <= b || b + c <= a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }

    get perimeter() {
        return this.a + this.b + this.c;
    }

    get area() {
        const p = this.perimeter / 2;
        const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        return +area.toFixed(3);
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        return {
            get area() {
                return "Ошибка! Треугольник не существует";
            },
            get perimeter() {
                return "Ошибка! Треугольник не существует";
            },
        };
    }
}

// Пример использования для задания №2:
const triangle1 = getTriangle(3, 4, 5);
console.log("Площадь треугольника:", triangle1.area);
console.log("Периметр треугольника:", triangle1.perimeter);

const triangle2 = getTriangle(1, 1, 3);
console.log("Площадь треугольника:", triangle2.area);
console.log("Периметр треугольника:", triangle2.perimeter);
