'use strict';

let a = +prompt("Введите a"), b = +prompt("Введите b");

if (a >= 0 && b >= 0) {
    console.log(a - b);
    alert(a - b);
} else if (a < 0 && b < 0) {
    console.log(a * b);
    alert(a * b);
} else {
    console.log(a + b);
    alert(a + b);
}
