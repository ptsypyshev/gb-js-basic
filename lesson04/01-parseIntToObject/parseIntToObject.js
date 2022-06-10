'use strict';

function parseInt(input) {
    let result = {};
    if (Number.isInteger(input) && input >= 0 && input < 1000) {
        result.hundereds = (input / 100) >> 0;
        result.tens = ((input % 100) / 10) >> 0;
        result.units = input % 10;
        return result;
    }
    console.error("Input value is not an Integer in range between 0 and 1000!");
    return result;
}

let intObj = parseInt(+prompt("Enter your digit"))
console.log(intObj)