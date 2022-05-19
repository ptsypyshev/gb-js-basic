'use strict';

function getDeclension(money) {
    switch (true) {
        case money % 10 === 1:
            return "рубль";
        case money % 10 === 2:
        case money % 10 === 3:
        case money % 10 === 4:
            return "рубля";
        default:
            return "рублей";
    }
}

function makeTransaction(money) {
    return `Ваша сумма в ${money} ${getDeclension(money)} успешно зачислена.`;
}

let moneyString = prompt("Сколько денег нужно положить на счет в банке?")
if (isNaN(+moneyString)) {
    alert(`"${moneyString}" не число!`)
} else {
    alert(makeTransaction(+moneyString))
}