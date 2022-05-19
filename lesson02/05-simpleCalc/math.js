'use strict';

function Add(a, b) {
    return isNaN(a + b) ? "Один или оба аргумента не числа" : a + b;
}

function Sub(a, b) {
    return isNaN(a - b) ? "Один или оба аргумента не числа" : a - b;
}

function Mult(a, b) {
    return isNaN(a * b) ? "Один или оба аргумента не числа" : a * b;
}

function Div(a, b) {
    return isNaN(a / b) ? "Один или оба аргумента не числа" : a / b;
}

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return Add(arg1, arg2);
        case "-":
            return Sub(arg1, arg2);
        case "*":
            return Mult(arg1, arg2);
        case "/":
            return Div(arg1, arg2);
        default:
            return `Некорректный оператор "${operation}" (доступны + - * /)`;
    }
}

let a = +prompt("Введите a"), b = +prompt("Введите b");
let op = prompt("Введите операцию (доступны + - * /)");
alert(mathOperation(a, b, op));