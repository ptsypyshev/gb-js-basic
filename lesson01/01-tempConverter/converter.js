'use strict';
const symbolFahrenheitUtf8 = "\u2109";
let tempCelsius = prompt("Введите температуру в градусах Цельсия");
let tempFahrenheit = (9 / 5) * tempCelsius + 32;
alert("Температура по Фаренгейту " + tempFahrenheit + symbolFahrenheitUtf8);